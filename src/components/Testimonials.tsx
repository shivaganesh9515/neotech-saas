const testimonials = [
  {
    quote: "The asymmetrical layout isn't just aesthetic—it actually improved our content hierarchy. It's the first SaaS platform that feels like it was designed by architects.",
    name: "Marcus Thorne",
    role: "CTO, Vertex Analytics",
    seed: "user1",
  },
  {
    quote: "Scaling from 10 to 1000 nodes was instantaneous. The API documentation is the cleanest I've ever read. NeoSaaS is now our primary dependency.",
    name: "Helena Frost",
    role: "Lead Engineer, ColdStream",
    seed: "user2",
  },
  {
    quote: "We switched from a 'friendly' UI to NeoSaaS's 'brutal' logic and our developers' productivity spiked. Less fluff, more function. 10/10.",
    name: "Soren Kierk",
    role: "Founder, LogicBox",
    seed: "user3",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-[#e5e5e5] overflow-hidden">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-[#e5e5e5]/50">
        <div className="mb-16 flex justify-between items-end">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-medium">Client_Logs</h2>
          <div className="font-[family-name:var(--font-space-mono)] text-xs opacity-50 hidden md:block">
            88 total_entries verified
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={t.name} className="relative group">
              <div className="absolute -top-4 -left-4 text-6xl font-[family-name:var(--font-space-grotesk)] text-[#107a4d] opacity-20">
                &ldquo;
              </div>
              <div className="space-y-6 pt-6 relative z-10">
                <p className="font-[family-name:var(--font-space-grotesk)] text-xl leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 border-t border-[#e5e5e5] pt-6">
                  <div className="w-12 h-12 bg-[#1a1a1a] grayscale border border-[#107a4d] overflow-hidden">
                    <img
                      src={`https://api.dicebear.com/7.x/shapes/svg?seed=${t.seed}`}
                      alt={t.name}
                      className="w-full h-full p-2"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-tighter">{t.name}</div>
                    <div className="text-xs font-[family-name:var(--font-space-mono)] text-[#107a4d]">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}