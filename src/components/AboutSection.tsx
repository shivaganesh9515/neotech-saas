import RevealMotion from "./RevealMotion";

export default function AboutSection() {
  return (
    <section className="py-24 border-t border-brand-primary" id="about">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 border-l border-r border-brand-primary/50">
        <RevealMotion>
          <h2 className="font-primary text-4xl lg:text-5xl font-medium mb-8">
            Why we use <br />
            <span className="bg-brand-secondary text-white px-2">Monospaced</span> Logic?
          </h2>
          <div className="space-y-6 text-text-secondary font-secondary text-sm leading-loose">
            <p>
              In a world of fluid design, structure is often lost. We bring back the rigidity of the
              code editor into the verified user experience. Every pixel is calculated, every margin is
              intentional.
            </p>
            <p>
              The beauty of raw data visualization lies in its honesty. We don&apos;t hide behind
              gradients (mostly). We show the structure.
            </p>
          </div>
          <div className="mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 border-b-2 border-brand-secondary pb-1 text-brand-secondary font-bold uppercase tracking-widest hover:text-text-primary hover:border-text-primary transition-colors"
            >
              Read the Manifesto <span className="text-xl">{"\u2192"}</span>
            </a>
          </div>
        </RevealMotion>

        <RevealMotion variant="scale" className="relative pt-12">
          <div className="absolute top-0 left-0 text-[10rem] font-primary font-bold text-brand-primary/50 leading-none -z-10">
            &ldquo;
          </div>
          <blockquote className="font-primary text-2xl lg:text-3xl leading-snug">
            The interface should not merely be a container for content, but a reflection of the
            underlying logic that powers it.
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-secondary rounded-full" />
            <div>
              <div className="font-bold text-sm uppercase">Alex Chen</div>
              <div className="text-xs text-text-secondary">Lead Architect</div>
            </div>
          </div>
        </RevealMotion>
      </div>
    </section>
  );
}
