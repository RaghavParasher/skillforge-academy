import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Corporate Learning & Development",
  description: "Transform your workforce with Accredian's enterprise-grade learning solutions. Expert-led training in Data Science, AI, and Product Management.",
  keywords: ["Enterprise Training", "Corporate Learning", "Data Science Training", "AI for Business", "Accredian"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

