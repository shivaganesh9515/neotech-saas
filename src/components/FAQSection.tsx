import RevealMotion from "./RevealMotion";

const faqs = [
  {
    q: "Is the architecture scalable?",
    a: "Yes. Our systems are built on Kubernetes clusters that auto-scale based on load handling. We guarantee 99.99% uptime even during traffic spikes.",
  },
  {
    q: "Can I export my data?",
    a: "Data sovereignty is a core principle. You can export your entire database in JSON, CSV, or SQL format through the dashboard at any time.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-neutral-surface border-t border-brand-primary">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-brand-primary/50">
        <h2 className="font-primary text-4xl font-medium mb-12">System Queries</h2>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq) => (
            <RevealMotion key={faq.q}>
              <details className="group border border-brand-primary bg-neutral-background cursor-pointer">
                <summary className="flex justify-between items-center p-6 font-primary text-xl font-bold list-none">
                  <span>{faq.q}</span>
                  <span className="text-brand-secondary text-2xl group-open:hidden">+</span>
                  <span className="text-brand-secondary text-2xl hidden group-open:block">&minus;</span>
                </summary>
                <div className="px-6 pb-6 text-text-secondary font-secondary text-sm leading-relaxed border-t border-brand-primary/30 pt-4">
                  {faq.a}
                </div>
              </details>
            </RevealMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
