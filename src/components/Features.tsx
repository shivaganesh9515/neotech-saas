"use client";

import { Lock } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 bg-[#f4f4f5]" id="features">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-[#e5e5e5]/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-5xl lg:text-7xl font-medium text-[#1a1a1a] mb-6">
              System <span className="text-[#107a4d]">Modules</span>
            </h2>
            <p className="text-xl text-[#4a4a4a] max-w-2xl font-[family-name:var(--font-space-mono)]">
              deploy_features( array );
            </p>
          </div>
          <div className="lg:col-span-4 text-right hidden lg:block">
            <span className="text-xs font-bold uppercase tracking-widest border-b border-[#1a1a1a] pb-1">
              v.2.0.4 stable
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Card 1: Large */}
          <div className="lg:col-span-2 bg-[rgba(249,247,243,0.5)] border border-[#e5e5e5] p-8 lg:p-12 hover:border-[#107a4d] transition-colors duration-300 group">
            <div className="w-12 h-12 bg-[#e5e5e5] flex items-center justify-center mb-8 border border-[#1a1a1a] group-hover:bg-[#107a4d] group-hover:text-white transition-colors">
              <span className="font-bold font-[family-name:var(--font-space-mono)] text-lg">01</span>
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold mb-4">Grid Architecture</h3>
            <p className="text-[#4a4a4a] font-[family-name:var(--font-space-mono)] text-sm leading-relaxed max-w-lg">
              Our proprietary grid system allows for fluid, responsive layouts that break the monotony
              of standard bootstrap 12-column structures. Designed for visual impact.
            </p>
            <div className="mt-8 flex gap-2">
              <div className="h-1 flex-1 bg-[#107a4d]" />
              <div className="h-1 w-1/4 bg-[#e5e5e5]" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f2f2f2] border border-[#1a1a1a]/10 p-8 flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_#1a1a1a] transition-shadow duration-300">
            <div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-4">Data Persistence</h3>
              <p className="text-[#4a4a4a] font-[family-name:var(--font-space-mono)] text-sm">
                Reliable storage solutions engineered for high throughput and low latency.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-dashed border-[#1a1a1a]/20">
              <span className="text-xs font-bold uppercase text-[#107a4d]">Status: Active</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f2f2f2] border border-[#1a1a1a]/10 p-8 hover:shadow-[4px_4px_0px_0px_#1a1a1a] transition-shadow duration-300">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-4">API Integration</h3>
            <p className="text-[#4a4a4a] font-[family-name:var(--font-space-mono)] text-sm mb-6">
              Seamlessly connect with third-party endpoints using our standardized hooks.
            </p>
            <code className="block bg-[#e5e5e5]/30 p-2 text-xs text-[#1a1a1a]">GET /api/v1/sync</code>
          </div>

          {/* Card 4: Wide */}
          <div className="lg:col-span-2 bg-[rgba(249,247,243,0.5)] border border-[#e5e5e5] p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8 hover:border-[#107a4d] transition-colors duration-300 group">
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold mb-4">Security Protocol</h3>
              <p className="text-[#4a4a4a] font-[family-name:var(--font-space-mono)] text-sm leading-relaxed">
                Enterprise-grade encryption protecting your data at rest and in transit.
                <br />
                <span className="opacity-60 block mt-2">// certified_encryption: true</span>
              </p>
            </div>
            <div className="w-full lg:w-48 h-32 bg-[#107a4d]/5 border border-[#107a4d]/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-20">
                <div className="bg-[#107a4d]" /><div /><div className="bg-[#107a4d]" /><div />
              </div>
              <div className="bg-white px-2 py-1 border border-[#107a4d] text-[#107a4d] text-xs font-bold z-10 flex items-center gap-1">
                <Lock size={12} />
                LOCKED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}