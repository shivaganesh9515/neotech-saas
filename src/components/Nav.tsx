"use client";

import { useEffect, useRef } from "react";

export default function Nav() {
  const subheaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = subheaderRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = 32;
    const cellSize = 10;
    const cols = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);
    const totalBlinkers = 50;

    for (let i = 0; i < totalBlinkers; i++) {
      const div = document.createElement("div");
      div.className = "absolute animate-grid-blink bg-zinc-400";
      div.style.width = `${cellSize - 1}px`;
      div.style.height = `${cellSize - 1}px`;
      div.style.opacity = "0.7";
      div.style.left = `${Math.floor(Math.random() * cols) * cellSize + 1}px`;
      div.style.top = `${Math.floor(Math.random() * rows) * cellSize + 1}px`;
      div.style.animationDelay = `${Math.random() * 2}s`;
      div.style.animationDuration = `${0.5 + Math.random() * 2}s`;
      container.appendChild(div);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm flex flex-col">
      {/* Subheader */}
      <div className="w-full h-8 bg-brand-secondary border-b border-white/20 relative overflow-hidden flex items-center justify-center bg-grid-micro z-30">
        <div ref={subheaderRef} className="absolute inset-0 z-0 pointer-events-none" />
        <div className="relative z-10 flex items-center gap-4 text-xs font-bold uppercase text-white tracking-[0.15em]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Status: Waitlist Open
          </span>
          <span className="opacity-40">/</span>
          <a href="#" className="hover:underline underline-offset-4 decoration-white/60">
            Secure Spot -&gt;
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full bg-neutral-background/90 backdrop-blur-sm border-b border-brand-primary z-20 relative">
        <nav className="w-[94%] max-w-[1800px] mx-auto px-6 py-2 flex items-center justify-between border-l border-r border-brand-primary/50">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 font-primary text-2xl font-bold tracking-tight text-brand-secondary uppercase group"
          >
            <div className="w-8 h-8 bg-text-primary text-white flex items-center justify-center group-hover:bg-brand-secondary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span>Neo<span className="text-text-primary">SaaS</span></span>
          </a>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-8">
            {/* Nav Links */}
            <div className="flex items-center gap-6">
              <a href="#features" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">
                <svg className="w-4 h-4 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Services
              </a>
              <a href="#pricing" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">
                <svg className="w-4 h-4 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Pricing
              </a>
              <a href="#about" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">
                <svg className="w-4 h-4 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </a>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 border-l-2 border-brand-primary pl-8">
              <button className="text-sm font-bold uppercase tracking-wider hover:text-brand-secondary transition-colors px-4 py-2 border-2 border-transparent hover:border-brand-primary">
                Log In
              </button>
              <button className="flex items-center gap-2 border-2 border-text-primary bg-brand-primary text-text-onPrimary font-bold text-sm px-6 py-2 shadow-cta hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">
                Get Access
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
