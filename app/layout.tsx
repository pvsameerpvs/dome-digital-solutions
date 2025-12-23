import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.domedigitalsolutions.com"),
  title: {
    default: `${COMPANY.name} | Corporate IT & AV Solutions`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Professional value-added system integrator specializing in Audio-Visual, IT & Security products. Reliable, cost-effective, high-quality solutions through global vendor partnerships.",
  keywords: [
    "Dome Digital Solutions",
    "AV Solutions",
    "IT Products",
    "Security Systems",
    "Network Security",
    "Access Control",
    "Digital Signage",
    "Conference Room Solutions",
    "Structured Cabling",
    "Managed Wi-Fi",
    "VPN Solutions",
  ],
  openGraph: {
    type: "website",
    url: "https://www.domedigitalsolutions.com",
    title: `${COMPANY.name} | Corporate IT & AV Solutions`,
    description:
      "AV Solutions, IT Products & Support, Security Systems, and Network Security—delivered with premium vendor partnerships.",
    siteName: COMPANY.name,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
