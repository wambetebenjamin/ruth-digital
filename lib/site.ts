export const site = {
  name: "Ruth Digital",
  tagline: "Your brand online. Done properly.",
  description:
    "Ruth Digital is a social media management and digital marketing agency in Nairobi, Kenya. We help Kenyan brands grow online with content, paid ads and monthly reporting.",
  city: "Nairobi",
  country: "Kenya",
  addressLine: "Kilimani, Nairobi, Kenya",
  email: "hello@ruthdigital.co.ke",
  phoneDisplay: "+254 112 272 061",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER &&
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.length > 0
      ? process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
      : "254112272061",
  whatsappMessage:
    "Hello Ruth Digital, I would like to grow my brand online and ask about your services.",
  consentKey: "ruth_digital_consent",
  social: {
    instagram: "https://www.instagram.com/ruthdigital",
    facebook: "https://www.facebook.com/ruthdigital",
    linkedin: "https://www.linkedin.com/company/ruthdigital",
    tiktok: "https://www.tiktok.com/@ruthdigital",
    x: "https://x.com/ruthdigital",
  },
  hours: "Monday to Friday, 8:30am to 6:00pm EAT",
} as const;

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.length > 0
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://ruthdigital.co.ke";
