import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company, siteUrl } from "@/content/company";
import { getDictionary } from "@/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const t = getDictionary();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.tradingName} · ${t.hero.tagline}`,
    template: `%s · ${company.tradingName}`,
  },
  description: t.hero.subtitle,
  applicationName: company.tradingName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: company.tradingName,
    locale: "en_IE",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0d1f" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fc" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
