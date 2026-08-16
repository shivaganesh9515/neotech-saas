const tiers = [
  {
    badge: "Local_Host",
    badgeColor: "bg-[#e5e5e5]/20 text-[#1a1a1a]",
    name: "Dev Node",
    price: "$0",
    period: "/mo",
    features: ["Single Project", "Community Support", "1GB Storage"],
    cta: "Initialize",
    ctaStyle: "w-full py-4 border-2 border-[#1a1a1a] text-sm font-bold uppercase hover:bg-[#e5e5e5] transition-colors",
    highlight: false,
  },
  {
    badge: "Production",
    badgeColor: "bg-[#107a4d] text-white",
    name: "Cluster",
    price: "$29",
    period: "/mo",
    features: ["Unlimited Projects", "Priority Email Support", "100GB NVMe Storage", "API Access"],
    cta: "Upgrade Node",
    ctaStyle: "w-full py-4 bg-[#107a4d] text-white shadow-[4px_4px_0px_0px_#1a1a1a] text-sm font-bold uppercase hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all",
    highlight: true,
  },
  {
    badge: "Mainframe",
    badgeColor: "bg-[#1a1a1a] text-white",
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Dedicated Instance", "24/7 Phone Support", "Custom Audit Logs"],
    cta: "Contact Sales",
    ctaStyle: "w-full py-4 border-2 border-[#1a1a1a] text-sm font-bold uppercase hover:bg-[#e5e5e5] transition-colors",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 border-t border-[#e5e5e5] bg-[#f2f2f2]" id="pricing">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-[#e5e5e5]/50">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-6xl font-medium mb-4">
            Resource Allocation
          </h2>
          <p className="text-[#4a4a4a] font-[family-name:var(--font-space-mono)] text-sm">
            Select your bandwidth capacity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-[#e5e5e5]">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 lg:p-12 border-b md:border-b-0 md:border-r border-[#e5e5e5] transition-colors relative ${
                tier.highlight ? "bg-[#107a4d]/5" : "hover:bg-[#f4f4f5]"
              }`}
            >
              {tier.highlight && <div className="absolute top-0 left-0 w-full h-1 bg-[#107a4d]" />}
              <div className={`${tier.badgeColor} text-xs font-bold uppercase tracking-widest inline-block px-2 py-1 mb-6`}>
                {tier.badge}
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl lg:text-5xl font-[family-name:var(--font-space-grotesk)]">{tier.price}</span>
                {tier.period && (
                  <span className="text-sm font-[family-name:var(--font-space-mono)] text-[#4a4a4a]">{tier.period}</span>
                )}
              </div>
              <ul className="space-y-4 mb-12 font-[family-name:var(--font-space-mono)] text-sm text-[#4a4a4a]">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#107a4d]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={tier.ctaStyle}>{tier.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}