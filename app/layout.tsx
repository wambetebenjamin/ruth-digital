import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppButton from "@/components/WhatsAppButton";
import VoiceTour from "@/components/VoiceTour";
import SmoothScroll from "@/components/SmoothScroll";
import RecaptchaScript from "@/components/RecaptchaScript";
import { site, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "social media management Nairobi",
    "digital marketing agency Kenya",
    "content creation Nairobi",
    "paid ads Kenya",
    "SEO Nairobi",
    "influencer marketing Kenya",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: siteUrl,
    siteName: site.name,
    locale: "en_KE",
    type: "website",
    images: [{ url: "/images/hero-studio.jpg", width: 1200, height: 800, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ["/images/hero-studio.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0891f8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organisation = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: siteUrl,
    telephone: `+${site.whatsappNumber}`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    areaServed: "Kenya",
    priceRange: "KES 30,000 to KES 185,000 per month",
    sameAs: [site.social.instagram, site.social.facebook, site.social.linkedin],
  };

  return (
    <html lang="en-KE">
      <head>
        {/* Template stylesheets, reproduced from the uploaded zip. */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }}
        />
      </head>
      <body>
        <LoadingScreen />
        <a href="#main" className="rd-visually-hidden">
          Skip to main content
        </a>
        <SmoothScroll />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <VoiceTour />
        <CookieConsent />
        <RecaptchaScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
