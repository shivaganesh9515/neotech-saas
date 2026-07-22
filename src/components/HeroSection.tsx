import RevealMotion from "./RevealMotion";

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center relative border-b border-brand-primary overflow-hidden">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 border-l border-r border-brand-primary/50 bg-neutral-background/30 backdrop-blur-[2px]">
        {/* Left Column */}
        <RevealMotion variant="right" className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <div className="inline-block border border-brand-secondary text-brand-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest w-fit">
            System Operational
          </div>
          <h1 className="font-primary text-6xl lg:text-8xl font-medium tracking-tight text-text-primary leading-[0.9]">
            Constructing
            <span className="block text-brand-secondary">Digital Reality</span>
            <span className="text-4xl lg:text-6xl text-text-secondary block mt-2 font-normal">
              through code.
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl border-l-2 border-brand-primary pl-6 py-2">
            A precise, neo-classical approach to SaaS infrastructure. We integrate asymmetrical grid
            systems with robust backend logic.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-brand-secondary text-white font-secondary font-bold px-8 py-4 shadow-cta hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">
              Start Compilation
            </button>
            <button className="bg-transparent border-2 border-text-primary text-text-primary font-secondary font-bold px-8 py-4 hover:bg-brand-primary transition-colors uppercase">
              View Documentation
            </button>
          </div>
        </RevealMotion>

        {/* Right Column — Code Terminal */}
        <RevealMotion variant="scale" className="lg:col-span-5 relative">
          <div className="relative h-full min-h-[400px] w-full bg-neutral-card border border-brand-primary p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_#107a4d] transition-shadow duration-500">
            {/* Window Controls */}
            <div>
              <div className="flex justify-between items-center border-b border-brand-primary pb-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-primary border border-text-primary" />
                  <div className="w-3 h-3 rounded-full bg-brand-primary border border-text-primary" />
                </div>
                <span className="text-xs text-text-secondary">main.tsx</span>
              </div>
              <div className="font-secondary text-xs text-brand-secondary space-y-2 opacity-80 overflow-hidden">
                <p>&gt; initializing core_modules...</p>
                <p>&gt; loading grid_system (v2.0.1)</p>
                <p>&gt; optimizing assets...</p>
                <div className="pl-4 border-l border-brand-primary/30 my-4">
                  <p>const layout = new ClassicalGrid({'{'}</p>
                  <p>&nbsp;&nbsp;padding: &apos;4rem&apos;,</p>
                  <p>&nbsp;&nbsp;asymmetry: true,</p>
                  <p>&nbsp;&nbsp;mode: &apos;light&apos;</p>
                  <p>{'}'});</p>
                </div>
                <p>&gt; process complete.</p>
                <p className="animate-pulse">_</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-secondary/10 backdrop-blur-sm border border-brand-secondary z-[-1]" />
          </div>
        </RevealMotion>
      </div>
    </section>
  );
}
