import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import StructuredData from "@/components/StructuredData/StructuredData";
import { company } from "@/components/config";
import { brandColors } from "@/components/brandColors";
import "./globals.scss";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-accent",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const description = `${company.fullName} — ${company.tagline}. Licensed protection, surveillance, risk advisory, and marine security serving ${company.addressLocality}, ${company.addressRegion}.`;

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: company.fullName,
    template: `%s | ${company.fullName}`,
  },
  description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: company.fullName,
    title: company.fullName,
    description,
    url: "/",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: company.fullName,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: brandColors.navy,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfairDisplay.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <body>
        <StructuredData />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
