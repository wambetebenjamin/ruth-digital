import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { legalLinks, site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/content";

function SocialIcon({ name }: { name: "instagram" | "facebook" | "linkedin" | "tiktok" }) {
  const paths: Record<string, React.ReactNode> = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8.5c0-.3.2-.5.5-.5H14Z" />,
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7.5 10v7M7.5 7.2v.1M11.5 17v-4a2 2 0 0 1 4 0v4" />
      </>
    ),
    tiktok: (
      <path d="M14 4v9.2a3.8 3.8 0 1 1-3.2-3.7M14 4c.4 2.2 2 3.7 4.2 3.9" />
    ),
  };

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rd-footer">
      <div className="rd-container">
        <div className="rd-footer__grid">
          <div className="rd-footer__brand">
            <Logo />
            <p>
              {`Social media management, content and paid media for Kenyan brands. We build real audiences and real revenue, then show you the numbers every month.`}
            </p>
            <div className="rd-footer__social">
              <a
                href={site.social.instagram}
                aria-label="Ruth Digital on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name="instagram" />
              </a>
              <a
                href={site.social.facebook}
                aria-label="Ruth Digital on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name="facebook" />
              </a>
              <a
                href={site.social.linkedin}
                aria-label="Ruth Digital on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name="linkedin" />
              </a>
              <a
                href={site.social.tiktok}
                aria-label="Ruth Digital on TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name="tiktok" />
              </a>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <div className="rd-footer__links">
              {services.slice(0, 5).map((service) => (
                <Link key={service.slug} href={`/services#${service.slug}`}>
                  {service.title}
                </Link>
              ))}
              <Link href="/services">All services</Link>
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <div className="rd-footer__links">
              <Link href="/work">Case studies</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Book a strategy call</Link>
              <Link href="/auth/signin">Client sign in</Link>
            </div>
          </div>

          <div>
            <h4>Talk to us</h4>
            <div className="rd-footer__contact">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={17} aria-hidden="true" />
                <span>WhatsApp {site.phoneDisplay}</span>
              </a>
              <a href={`tel:+${site.whatsappNumber}`}>
                <Phone size={17} aria-hidden="true" />
                <span>Call {site.phoneDisplay}</span>
              </a>
              <a href={`mailto:${site.email}`}>
                <Mail size={17} aria-hidden="true" />
                <span>{site.email}</span>
              </a>
              <span>
                <MapPin size={17} aria-hidden="true" />
                <span>{site.addressLine}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rd-footer__bottom">
        <div className="rd-container">
          <div className="rd-footer__bottom-inner">
            <p>{`Copyright ${year} Ruth Digital. All rights reserved.`}</p>
            <div className="rd-footer__legal">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
