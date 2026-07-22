import RevealMotion from "./RevealMotion";

export default function Footer() {
  return (
    <footer className="bg-brand-primary border-t border-text-primary pt-20 pb-10">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-text-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <RevealMotion className="col-span-1 md:col-span-2">
            <h3 className="font-primary text-2xl font-bold mb-6">NeoSaaS_V1.0</h3>
            <p className="max-w-md text-text-secondary">
              Building the future of asymmetrical web architecture. Clean code, cleaner design.
            </p>
          </RevealMotion>
          <RevealMotion>
            <h4 className="font-bold uppercase tracking-widest mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Status
                </a>
              </li>
            </ul>
          </RevealMotion>
          <RevealMotion>
            <h4 className="font-bold uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
            </ul>
          </RevealMotion>
        </div>
        <div className="border-t border-text-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">{"\u00A9"} 2024 NeoSaaS Inc. system_status: operational.</p>
          <div className="flex gap-4">
            <div className="w-6 h-6 bg-text-primary rounded-full" />
            <div className="w-6 h-6 bg-text-primary rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
