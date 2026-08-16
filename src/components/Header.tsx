"use client";

import { useEffect } from "react";
import { Box, Tag, Info, ArrowRight } from "lucide-react";

export default function Header() {
  useEffect(() => {
    const container = document.getElementById("subheader-blink-container");
    if (!container) return;
    const width = window.innerWidth;
    const cellSize = 10;
    const cols = Math.ceil(width / cellSize);
    const rows = Math.ceil(32 / cellSize);

    for (let i = 0; i < 50; i++) {
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
      <div className="w-full h-8 bg-[#107a4d] border-b border-white/20 relative overflow-hidden flex items-center justify-center bg-grid-micro z-30">
        <div id="subheader-blink-container" className="absolute inset-0 z-0 pointer-events-none" />
        <div className="relative z-10 flex items-center gap-4 text-xs font-bold uppercase text-white tracking-[0.15em]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Status: Waitlist Open
          </span>
          <span className="opacity-40">/</span>
          <a href="#" className="hover:underline underline-offset-4 decoration-white/60">Secure Spot -&gt;</a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-[#f2f2f2]/90 backdrop-blur-sm border-b border-[#e5e5e5] z-20 relative">
        <nav className="w-[94%] max-w-[1800px] mx-auto px-6 py-2 flex items-center justify-between border-l border-r border-[#e5e5e5]/50">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-[#107a4d] uppercase group">
            <div className="w-8 h-8 bg-[#1a1a1a] text-white flex items-center justify-center group-hover:bg-[#107a4d] transition-colors">
              <Box size={20} />
            </div>
            <span>Neo<span className="text-[#1a1a1a]">SaaS</span></span>
          </a>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#features" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#107a4d] transition-colors">
                <Box size={16} className="text-[#107a4d]" />
                Services
              </a>
              <a href="#pricing" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#107a4d] transition-colors">
                <Tag size={16} className="text-[#107a4d]" />
                Pricing
              </a>
              <a href="#about" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#107a4d] transition-colors">
                <Info size={16} className="text-[#107a4d]" />
                About
              </a>
            </div>

            <div className="flex items-center gap-4 border-l-2 border-[#e5e5e5] pl-8">
              <button className="text-sm font-bold uppercase tracking-wider hover:text-[#107a4d] transition-colors px-4 py-2 border-2 border-transparent hover:border-[#e5e5e5]">
                Log In
              </button>
              <button className="flex items-center gap-2 border-2 border-[#1a1a1a] bg-[#e5e5e5] text-[#1a1a1a] font-bold text-sm px-6 py-2 shadow-[4px_4px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">
                Get Access
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}