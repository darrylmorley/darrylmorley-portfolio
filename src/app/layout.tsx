import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Darryl Morley - Full-Stack Developer | Warwickshire | eCommerce, Infrastructure & Digital Solutions",
  description:
    "Experienced full-stack developer serving Warwickshire and beyond. Specializing in eCommerce development, self-hosted infrastructure, backend APIs (Go/Node.js), database optimization, and automated SEO solutions for local businesses.",
  keywords: [
    "freelance developer Warwickshire",
    "full-stack developer",
    "eCommerce development",
    "Next.js developer",
    "Go developer",
    "Node.js developer",
    "PostgreSQL optimization",
    "self-hosted infrastructure",
    "Lightspeed Retail",
    "API integration",
    "SEO automation",
    "Caddy NGINX",
    "HashiCorp Vault",
    "Temporal workflows",
    "CRON jobs",
    "local business websites",
    "Warwickshire web developer",
  ],
  authors: [{ name: "Darryl Morley", url: "https://github.com/darrylmorley" }],
  creator: "Darryl Morley",
  metadataBase: new URL("https://darrylmorley.co.uk"),
  openGraph: {
    title: "Darryl Morley - Full-Stack Developer | Warwickshire",
    description:
      "Expert full-stack developer specializing in eCommerce, infrastructure, and digital solutions for local businesses across Warwickshire and beyond.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darryl Morley - Full-Stack Developer | Warwickshire",
    description:
      "Expert full-stack developer specializing in eCommerce, infrastructure, and digital solutions for local businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
