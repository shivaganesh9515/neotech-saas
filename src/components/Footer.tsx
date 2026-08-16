export default function Footer() {
  return (
    <footer className="bg-[#e5e5e5] border-t border-[#1a1a1a] pt-20 pb-10">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 lg:px-12 border-l border-r border-[#1a1a1a]/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-6">
              NeoSaaS_V1.0
            </h3>
            <p className="max-w-md text-[#4a4a4a]">
              Building the future of asymmetrical web architecture. Clean code, cleaner design.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">API Reference</a></li>
              <li><a href="#" className="hover:underline">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2024 NeoSaaS Inc. system_status: operational.</p>
          <div className="flex gap-4">
            <div className="w-6 h-6 bg-[#1a1a1a] rounded-full" />
            <div className="w-6 h-6 bg-[#1a1a1a] rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}