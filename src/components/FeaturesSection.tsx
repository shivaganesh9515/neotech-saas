import RevealMotion from "./RevealMotion";

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-neutral-surface" id="features">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-brand-primary/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <RevealMotion className="lg:col-span-8">
            <h2 className="font-primary text-5xl lg:text-7xl font-medium text-text-primary mb-6">
              System <span className="text-brand-secondary">Modules</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl font-secondary">
              deploy_features( array );
            </p>
          </RevealMotion>
          <RevealMotion className="lg:col-span-4 text-right hidden lg:block">
            <span className="text-xs font-bold uppercase tracking-widest border-b border-text-primary pb-1">
              v.2.0.4 stable
            </span>
          </RevealMotion>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Card 1: Large - Grid Architecture */}
          <RevealMotion className="lg:col-span-2 bg-neutral-card border border-brand-primary p-8 lg:p-12 hover:border-brand-secondary transition-colors duration-300 group">
            <div className="w-12 h-12 bg-brand-primary flex items-center justify-center mb-8 border border-text-primary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
              <span className="font-bold font-secondary text-lg">01</span>
            </div>
            <h3 className="font-primary text-3xl font-bold mb-4">Grid Architecture</h3>
            <p className="text-text-secondary font-secondary text-sm leading-relaxed max-w-lg">
              Our proprietary grid system allows for fluid, responsive layouts that break the monotony
              of standard bootstrap 12-column structures. Designed for visual impact.
            </p>
            <div className="mt-8 flex gap-2">
              <div className="h-1 flex-1 bg-brand-secondary" />
              <div className="h-1 w-1/4 bg-brand-primary" />
            </div>
          </RevealMotion>

          {/* Card 2: Standard - Data Persistence */}
          <RevealMotion className="bg-neutral-background border border-text-primary/10 p-8 flex flex-col justify-between hover:shadow-cta transition-shadow duration-300">
            <div>
              <h3 className="font-primary text-2xl font-bold mb-4">Data Persistence</h3>
              <p className="text-text-secondary font-secondary text-sm">
                Reliable storage solutions engineered for high throughput and low latency.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-dashed border-text-primary/20">
              <span className="text-xs font-bold uppercase text-brand-secondary">Status: Active</span>
            </div>
          </RevealMotion>

          {/* Card 3: Standard - API Integration */}
          <RevealMotion className="bg-neutral-background border border-text-primary/10 p-8 hover:shadow-cta transition-shadow duration-300">
            <h3 className="font-primary text-2xl font-bold mb-4">API Integration</h3>
            <p className="text-text-secondary font-secondary text-sm mb-6">
              Seamlessly connect with third-party endpoints using our standardized hooks.
            </p>
            <code className="block bg-brand-primary/30 p-2 text-xs text-text-primary">
              GET /api/v1/sync
            </code>
          </RevealMotion>

          {/* Card 4: Wide - Security Protocol */}
          <RevealMotion className="lg:col-span-2 bg-neutral-card border border-brand-primary p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8 hover:border-brand-secondary transition-colors duration-300 group">
            <div className="flex-1">
              <h3 className="font-primary text-3xl font-bold mb-4">Security Protocol</h3>
              <p className="text-text-secondary font-secondary text-sm leading-relaxed">
                Enterprise-grade encryption protecting your data at rest and in transit.
                <br />
                <span className="opacity-60 block mt-2">// certified_encryption: true</span>
              </p>
            </div>
            <div className="w-full lg:w-48 h-32 bg-brand-secondary/5 border border-brand-secondary/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-20">
                <div className="bg-brand-secondary" />
                <div className="bg-transparent" />
                <div className="bg-brand-secondary" />
                <div className="bg-transparent" />
              </div>
              <div className="bg-white px-2 py-1 border border-brand-secondary text-brand-secondary text-xs font-bold z-10">
                LOCKED
              </div>
            </div>
          </RevealMotion>
        </div>
      </div>
    </section>
  );
}
