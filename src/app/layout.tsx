import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "NeoTech SaaS",
  description: "A precise, neo-classical approach to SaaS infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} font-[family-name:var(--font-space-mono)] text-[#1a1a1a] overflow-x-hidden`}
      >
        {/* Hazy Background Layer */}
        <div className="fixed inset-0 z-[-1] bg-[#f2f2f2] bg-grid-pattern pointer-events-none" />

        {/* Vertical Lined Grid Layout */}
        <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
          <div className="w-[94%] max-w-[1800px] h-full border-l border-r border-[#e5e5e5] grid grid-cols-4 lg:grid-cols-6 relative">
            <div className="border-r border-[#e5e5e5] h-full" />
            <div className="border-r border-[#e5e5e5] h-full" />
            <div className="border-r border-[#e5e5e5] h-full hidden lg:block" />
            <div className="border-r border-[#e5e5e5] h-full hidden lg:block" />
            <div className="border-r border-[#e5e5e5] h-full hidden lg:block" />
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}