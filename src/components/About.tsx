import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 border-t border-[#e5e5e5]">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 border-l border-r border-[#e5e5e5]/50">
        <div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-medium mb-8">
            Why we use <br />
            <span className="bg-[#107a4d] text-white px-2">Monospaced</span> Logic?
          </h2>
          <div className="space-y-6 text-[#4a4a4a] font-[family-name:var(--font-space-mono)] text-sm leading-loose">
            <p>
              In a world of fluid design, structure is often lost. We bring back the rigidity of the
              code editor into the verified user experience. Every pixel is calculated, every margin
              is intentional.
            </p>
            <p>
              The beauty of raw data visualization lies in its honesty. We don&apos;t hide behind gradients
              (mostly). We show the structure.
            </p>
          </div>
          <div className="mt-12">
            <a href="#" className="inline-flex items-center gap-2 border-b-2 border-[#107a4d] pb-1 text-[#107a4d] font-bold uppercase tracking-widest hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors">
              Read the Manifesto <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="relative pt-12">
          <div className="absolute top-0 left-0 text-[10rem] font-[family-name:var(--font-space-grotesk)] font-bold text-[#e5e5e5]/50 leading-none -z-10">
            &ldquo;
          </div>
          <blockquote className="font-[family-name:var(--font-space-grotesk)] text-2xl lg:text-3xl leading-snug">
            The interface should not merely be a container for content, but a reflection of the
            underlying logic that powers it.
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-10 h-10 bg-[#107a4d] rounded-full" />
            <div>
              <div className="font-bold text-sm uppercase">Alex Chen</div>
              <div className="text-xs text-[#4a4a4a]">Lead Architect</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}