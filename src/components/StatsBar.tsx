import RevealMotion from "./RevealMotion";

const stats = [
  { value: "99.9%", label: "Uptime_Metric", delay: 100 },
  { value: "250ms", label: "Avg_Latency", delay: 200 },
  { value: "1.2M", label: "Requests_Hr", delay: 300 },
  { value: "14bit", label: "Entropy_Level", delay: 400 },
];

export default function StatsBar() {
  return (
    <section className="border-b border-brand-primary bg-white relative">
      <div className="w-[94%] max-w-[1800px] mx-auto border-l border-r border-brand-primary/50 grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <RevealMotion
            key={s.label}
            variant="up"
            delay={s.delay}
            className={`p-8 flex flex-col gap-2 ${s.label !== "Entropy_Level" ? "border-r border-brand-primary/50" : ""} ${s.label === "Avg_Latency" ? "lg:border-r border-brand-primary/50" : ""}`}
          >
            <span className="text-4xl font-primary font-bold text-brand-secondary">
              {s.value}
            </span>
            <span className="text-xs font-secondary uppercase tracking-widest text-text-secondary">
              {s.label}
            </span>
          </RevealMotion>
        ))}
      </div>
    </section>
  );
}
