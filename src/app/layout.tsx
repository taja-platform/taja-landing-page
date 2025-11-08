import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taja Platform Landing Page",
  description: "Taja Platform Landing Page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
