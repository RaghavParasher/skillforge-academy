import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillForge Academy | Enterprise AI & Engineering Upskilling Platform",
  description: "Accelerate your engineering pod's velocity with custom 12-week AI upskilling roadmaps, hands-on architectural coding labs, and live Jira/GitHub ROI telemetry.",
  keywords: [
    "Enterprise AI Training",
    "Corporate Learning",
    "GenAI Upskilling",
    "Kubernetes Mesh",
    "SkillForge Academy",
    "PR Velocity Tracking",
    "SOC2 Sandboxes",
    "MLOps Production"
  ],
  authors: [{ name: "Raghav Parasher", url: "https://skillforge-academyy.vercel.app/" }],
  openGraph: {
    title: "SkillForge Academy | High-Velocity AI Workforce Engine",
    description: "Interactive coding labs, principal architect reviews, and live engineering velocity telemetry for high-performance teams.",
    url: "https://skillforge-academyy.vercel.app/",
    siteName: "SkillForge Academy",
    type: "website",
  },
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
