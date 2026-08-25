import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "RAJA | Enterprise Distribution Intelligence & Field Force Command Center",
  description: "The operating system for FMCG manufacturers, tier-1 distributors, and field sales agencies in emerging markets. Geo-tagged retail mapping, live order automation, and fraud-proof route execution.",
  keywords: ["Distribution Intelligence", "FMCG Retail Mapping", "Field Sales Automation", "Direct to Store", "B2B Route Optimization", "Emerging Markets Retail"],
  authors: [{ name: "RAJA Distribution Intelligence" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-emerald-500 selection:text-white bg-slate-50 text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
