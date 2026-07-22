"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface RevealMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "right" | "scale";
}

export default function RevealMotion({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: RevealMotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass =
    variant === "right"
      ? "reveal-right"
      : variant === "scale"
        ? "reveal-scale"
        : "reveal-up";

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? "animate-on-scroll-visible" : `animate-on-scroll-hidden ${revealClass}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
