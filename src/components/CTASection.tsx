"use client";

import RevealMotion from "./RevealMotion";

export default function CTASection() {
  return (
    <section className="py-24 border-t border-brand-primary bg-neutral-background overflow-hidden relative">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-brand-primary/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Form */}
          <RevealMotion className="space-y-8">
            <div className="inline-block bg-brand-secondary text-white px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              Final Step: Secure Access
            </div>
            <h2 className="font-primary text-5xl lg:text-7xl font-medium text-text-primary leading-none">
              Send a <br />
              <span className="text-brand-secondary italic">Request.</span>
            </h2>
            <p className="font-secondary text-text-secondary max-w-md">
              Fill in your parameters to initialize the onboarding sequence. Our system will generate
              your unique access key and dispatch it via physical-digital bridge.
            </p>

            <form className="space-y-4 max-w-md bg-white border border-brand-primary p-8 shadow-cta">
              <div className="space-y-2">
                <label className="block font-secondary text-xs font-bold uppercase text-text-primary">
                  User_Identifier
                </label>
                <input
                  type="text"
                  placeholder="e.g. Satoshi Nakamoto"
                  className="w-full bg-neutral-surface border border-text-primary/10 p-3 font-secondary text-sm focus:border-brand-secondary outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-secondary text-xs font-bold uppercase text-text-primary">
                  Communication_Node
                </label>
                <input
                  type="email"
                  placeholder="email@protocol.com"
                  className="w-full bg-neutral-surface border border-text-primary/10 p-3 font-secondary text-sm focus:border-brand-secondary outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-secondary text-white font-bold uppercase tracking-widest py-4 mt-4 hover:shadow-none transition-all flex items-center justify-center gap-2"
              >
                Dispatch Request
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </RevealMotion>

          {/* Right Side: Envelope Animation */}
          <RevealMotion variant="scale" className="relative h-[500px] flex items-center justify-center">
            <div className="animate-mail relative w-80 h-56 bg-white border-2 border-text-primary shadow-[10px_10px_0px_#107a4d]">
              {/* Postcard (Inside) */}
              <div className="postcard absolute inset-4 bg-[#fff9eb] border border-brand-primary p-4 shadow-lg flex flex-col justify-between opacity-0 z-0">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="h-1 w-12 bg-brand-secondary/30" />
                    <div className="h-1 w-8 bg-brand-secondary/30" />
                    <div className="h-1 w-10 bg-brand-secondary/30" />
                  </div>
                  <div className="w-8 h-10 border border-brand-secondary/40 flex items-center justify-center text-[8px] font-secondary text-brand-secondary">
                    STAMP
                  </div>
                </div>
                <div className="font-primary font-bold text-xs text-brand-secondary tracking-tighter">
                  WELCOME TO THE FUTURE_
                </div>
              </div>

              {/* Envelope Front Body */}
              <div className="absolute inset-0 bg-white z-10 border-t-0 flex items-center justify-center">
                <div className="w-full h-full relative overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(35deg, transparent 49%, #1a1a1a 50%, transparent 51%)",
                      opacity: 0.1,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(-35deg, transparent 49%, #1a1a1a 50%, transparent 51%)",
                      opacity: 0.1,
                    }}
                  />
                </div>
              </div>

              {/* Envelope Top Flap */}
              <div
                className="envelope-top absolute top-0 left-0 w-full h-1/2 bg-white border-2 border-text-primary z-20"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              >
                <div className="w-full h-full bg-neutral-surface" />
              </div>
            </div>
          </RevealMotion>
        </div>
      </div>

    </section>
  );
}
