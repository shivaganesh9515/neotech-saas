import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center relative border-b border-[#e5e5e5] overflow-hidden">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 border-l border-r border-[#e5e5e5]/50 bg-[#f2f2f2]/30 backdrop-blur-[2px]">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <div className="inline-block border border-[#107a4d] text-[#107a4d] px-3 py-1 text-xs font-bold uppercase tracking-widest w-fit">
            System Operational
          </div>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl lg:text-8xl font-medium tracking-tight text-[#1a1a1a] leading-[0.9]">
            Constructing
            <span className="block text-[#107a4d]">Digital Reality</span>
            <span className="text-4xl lg:text-6xl text-[#4a4a4a] block mt-2 font-normal">through code.</span>
          </h1>
          <p className="text-lg text-[#4a4a4a] max-w-xl border-l-2 border-[#e5e5e5] pl-6 py-2">
            A precise, neo-classical approach to SaaS infrastructure. We integrate asymmetrical grid
            systems with robust backend logic.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#107a4d] text-white font-[family-name:var(--font-space-mono)] font-bold px-8 py-4 shadow-[4px_4px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">
              Start Compilation
            </button>
            <button className="bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] font-[family-name:var(--font-space-mono)] font-bold px-8 py-4 hover:bg-[#e5e5e5] transition-colors uppercase">
              View Documentation
            </button>
          </div>
        </div>

        {/* Right Column: Code Terminal */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-full min-h-[400px] w-full bg-[rgba(249,247,243,0.5)] border border-[#e5e5e5] p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_#107a4d] transition-shadow duration-500">
            <div className="flex justify-between items-center border-b border-[#e5e5e5] pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#e5e5e5] border border-[#1a1a1a]" />
                <div className="w-3 h-3 rounded-full bg-[#e5e5e5] border border-[#1a1a1a]" />
              </div>
              <span className="text-xs text-[#4a4a4a]">main.tsx</span>
            </div>
            <div className="font-[family-name:var(--font-space-mono)] text-xs text-[#107a4d] space-y-2 opacity-80 overflow-hidden">
              <p>&gt; initializing core_modules...</p>
              <p>&gt; loading grid_system (v2.0.1)</p>
              <p>&gt; optimizing assets...</p>
              <div className="pl-4 border-l border-[#e5e5e5]/30 my-4">
                <p>const layout = new ClassicalGrid(&#123;</p>
                <p>&nbsp;&nbsp;padding: &apos;4rem&apos;,</p>
                <p>&nbsp;&nbsp;asymmetry: true,</p>
                <p>&nbsp;&nbsp;mode: &apos;light&apos;</p>
                <p>&#125;);</p>
              </div>
              <p>&gt; process complete.</p>
              <p className="animate-pulse">_</p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#107a4d]/10 backdrop-blur-sm border border-[#107a4d] z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
}