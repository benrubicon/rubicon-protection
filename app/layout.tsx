import type { Metadata } from "next";
import { Barlow_Condensed, Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import { orgJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rubiconprotection.com"),
  alternates: { canonical: "./" },
  robots: { index: true, follow: true },
  verification: { google: "mQ9uH9njSKvwOqJ85Y52oeh5qxIL-jbDc-x31Be1YgQ" },
  title: {
    default: "Rubicon Protection | Executive Protection and Security Guards",
    template: "%s | Rubicon Protection",
  },
  description:
    "Arizona based security company with worldwide reach. Executive protection, event security, and armed or unarmed guards for commercial clients.",
  applicationName: site.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48 64x64", type: "image/x-icon" },
      { url: "/logo-lion.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Rubicon Protection",
    description:
      "Executive protection, event security, and security guards. Arizona based. Worldwide reach.",
    type: "website",
    siteName: "Rubicon Protection",
    locale: "en_US",
    images: [
      {
        url: "/og-rubicon-lion.png?v=20261112",
        width: 1200,
        height: 630,
        alt: "Rubicon Protection lion logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubicon Protection",
    description:
      "Executive protection, event security, and security guards. Arizona based. Worldwide reach.",
    images: [
      {
        url: "/og-rubicon-lion.png?v=20261112",
        width: 1200,
        height: 630,
        alt: "Rubicon Protection lion logo",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
