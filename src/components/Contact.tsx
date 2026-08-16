"use client";

import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 border-t border-[#e5e5e5] bg-[#f2f2f2] overflow-hidden relative">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-[#e5e5e5]/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Form */}
          <div className="space-y-8">
            <div className="inline-block bg-[#107a4d] text-white px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              Final Step: Secure Access
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-5xl lg:text-7xl font-medium text-[#1a1a1a] leading-none">
              Send a <br />
              <span className="text-[#107a4d] italic">Request.</span>
            </h2>
            <p className="font-[family-name:var(--font-space-mono)] text-[#4a4a4a] max-w-md">
              Fill in your parameters to initialize the onboarding sequence. Our system will generate
              your unique access key and dispatch it via physical-digital bridge.
            </p>

            <form className="space-y-4 max-w-md bg-white border border-[#e5e5e5] p-8 shadow-[4px_4px_0px_0px_#1a1a1a]">
              <div className="space-y-2">
                <label className="block font-[family-name:var(--font-space-mono)] text-xs font-bold uppercase text-[#1a1a1a]">
                  User_Identifier
                </label>
                <input
                  type="text"
                  placeholder="e.g. Satoshi Nakamoto"
                  className="w-full bg-[#f4f4f5] border border-[#1a1a1a]/10 p-3 font-[family-name:var(--font-space-mono)] text-sm focus:border-[#107a4d] outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-[family-name:var(--font-space-mono)] text-xs font-bold uppercase text-[#1a1a1a]">
                  Communication_Node
                </label>
                <input
                  type="email"
                  placeholder="email@protocol.com"
                  className="w-full bg-[#f4f4f5] border border-[#1a1a1a]/10 p-3 font-[family-name:var(--font-space-mono)] text-sm focus:border-[#107a4d] outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#107a4d] text-white font-bold uppercase tracking-widest py-4 mt-4 hover:shadow-none transition-all flex items-center justify-center gap-2"
              >
                Dispatch Request
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Right: Envelope Animation */}
          <div className="relative h-[500px] flex items-center justify-center">
            <style>{`
              @keyframes envelope-open {
                0% { transform: rotateX(0deg); z-index: 10; }
                100% { transform: rotateX(180deg); z-index: 1; }
              }
              @keyframes postcard-pop {
                0% { transform: translateY(0) scale(0.9); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateY(-120px) scale(1.05); opacity: 1; }
              }
              .envelope-top {
                transform-origin: top;
                transition: transform 0.6s ease;
              }
              .animate-mail .envelope-top {
                animation: envelope-open 0.8s forwards 0.5s;
              }
              .animate-mail .postcard {
                animation: postcard-pop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 1.2s;
              }
            `}</style>

            <div className="animate-mail relative w-80 h-56 bg-white border-2 border-[#1a1a1a] shadow-[10px_10px_0px_#107a4d]">
              {/* Postcard */}
              <div className="postcard absolute inset-4 bg-[#fff9eb] border border-[#e5e5e5] p-4 shadow-lg flex flex-col justify-between opacity-0 z-0">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="h-1 w-12 bg-[#107a4d]/30" />
                    <div className="h-1 w-8 bg-[#107a4d]/30" />
                    <div className="h-1 w-10 bg-[#107a4d]/30" />
                  </div>
                  <div className="w-8 h-10 border border-[#107a4d]/40 flex items-center justify-center text-[8px] font-[family-name:var(--font-space-mono)] text-[#107a4d]">
                    STAMP
                  </div>
                </div>
                <div className="font-[family-name:var(--font-space-grotesk)] font-bold text-xs text-[#107a4d] tracking-tighter">
                  WELCOME TO THE FUTURE_
                </div>
              </div>

              {/* Envelope Front */}
              <div className="absolute inset-0 bg-white z-10 border-t-0 flex items-center justify-center">
                <div className="w-full h-full relative overflow-hidden">
                  <div className="absolute inset-0" style={{ background: "linear-gradient(35deg, transparent 49%, #1a1a1a 50%, transparent 51%)", opacity: 0.1 }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(-35deg, transparent 49%, #1a1a1a 50%, transparent 51%)", opacity: 0.1 }} />
                </div>
              </div>

              {/* Envelope Flap */}
              <div className="envelope-top absolute top-0 left-0 w-full h-1/2 bg-white border-2 border-[#1a1a1a] z-20" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}>
                <div className="w-full h-full bg-[#f4f4f5]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}