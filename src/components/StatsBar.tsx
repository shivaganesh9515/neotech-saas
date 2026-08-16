const stats = [
  { value: "99.9%", label: "Uptime_Metric", delay: "100ms" },
  { value: "250ms", label: "Avg_Latency", delay: "200ms" },
  { value: "1.2M", label: "Requests_Hr", delay: "300ms" },
  { value: "14bit", label: "Entropy_Level", delay: "400ms" },
];

export default function StatsBar() {
  return (
    <section className="border-b border-[#e5e5e5] bg-white relative">
      <div className="w-[94%] max-w-[1800px] mx-auto border-l border-r border-[#e5e5e5]/50 grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-8 border-r border-[#e5e5e5]/50 flex flex-col gap-2"
            style={{ transitionDelay: stat.delay }}
          >
            <span className="text-4xl font-[family-name:var(--font-space-grotesk)] font-bold text-[#107a4d]">
              {stat.value}
            </span>
            <span className="text-xs font-[family-name:var(--font-space-mono)] uppercase tracking-widest text-[#4a4a4a]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}