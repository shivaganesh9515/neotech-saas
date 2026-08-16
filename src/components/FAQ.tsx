const faqs = [
  {
    question: "Is the architecture scalable?",
    answer: "Yes. Our systems are built on Kubernetes clusters that auto-scale based on load handling. We guarantee 99.99% uptime even during traffic spikes.",
  },
  {
    question: "Can I export my data?",
    answer: "Data sovereignty is a core principle. You can export your entire database in JSON, CSV, or SQL format through the dashboard at any time.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#f4f4f5] border-t border-[#e5e5e5]">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-[#e5e5e5]/50">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium mb-12">
          System Queries
        </h2>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border border-[#e5e5e5] bg-[#f2f2f2] cursor-pointer">
              <summary className="flex justify-between items-center p-6 font-[family-name:var(--font-space-grotesk)] text-xl font-bold list-none">
                <span>{faq.question}</span>
                <span className="text-[#107a4d] text-2xl group-open:hidden">+</span>
                <span className="text-[#107a4d] text-2xl hidden group-open:block">&minus;</span>
              </summary>
              <div className="px-6 pb-6 text-[#4a4a4a] font-[family-name:var(--font-space-mono)] text-sm leading-relaxed border-t border-[#e5e5e5]/30 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}