import RevealMotion from "./RevealMotion";

const tiers = [
  {
    badge: "Local_Host",
    badgeClass: "bg-brand-primary/20 text-text-primary",
    name: "Dev Node",
    price: "$0",
    period: "/mo",
    features: ["Single Project", "Community Support", "1GB Storage"],
    buttonText: "Initialize",
    buttonClass: "border-2 border-text-primary hover:bg-brand-primary",
    highlighted: false,
  },
  {
    badge: "Production",
    badgeClass: "bg-brand-secondary text-white",
    name: "Cluster",
    price: "$29",
    period: "/mo",
    features: ["Unlimited Projects", "Priority Email Support", "100GB NVMe Storage", "API Access"],
    buttonText: "Upgrade Node",
    buttonClass: "bg-brand-secondary text-white shadow-cta hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none",
    highlighted: true,
  },
  {
    badge: "Mainframe",
    badgeClass: "bg-text-primary text-white",
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Dedicated Instance", "24/7 Phone Support", "Custom Audit Logs"],
    buttonText: "Contact Sales",
    buttonClass: "border-2 border-text-primary hover:bg-brand-primary",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 border-t border-brand-primary bg-neutral-background" id="pricing">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-brand-primary/50">
        <RevealMotion className="mb-16 text-center lg:text-left">
          <h2 className="font-primary text-4xl lg:text-6xl font-medium mb-4">
            Resource Allocation
          </h2>
          <p className="text-text-secondary font-secondary text-sm">
            Select your bandwidth capacity.
          </p>
        </RevealMotion>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-brand-primary">
          {tiers.map((tier, i) => (
            <RevealMotion
              key={tier.name}
              delay={i * 100}
              className={`p-8 lg:p-12 border-b md:border-b-0 ${
                i < tiers.length - 1 ? "md:border-r border-brand-primary" : ""
              } ${
                tier.highlighted
                  ? "bg-brand-secondary/5 relative overflow-hidden"
                  : "hover:bg-neutral-surface transition-colors"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-secondary" />
              )}
              <div
                className={`text-xs font-bold uppercase tracking-widest inline-block px-2 py-1 mb-6 ${tier.badgeClass}`}
              >
                {tier.badge}
              </div>
              <h3 className="font-primary text-3xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl lg:text-5xl font-primary">{tier.price}</span>
                {tier.period && (
                  <span className="text-sm font-secondary text-text-secondary">{tier.period}</span>
                )}
              </div>
              <ul className="space-y-4 mb-12 font-secondary text-sm text-text-secondary">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-secondary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 text-sm font-bold uppercase transition-all ${tier.buttonClass}`}
              >
                {tier.buttonText}
              </button>
            </RevealMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
