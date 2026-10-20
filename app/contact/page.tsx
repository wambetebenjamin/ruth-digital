import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import StrategyCallForm from "@/components/StrategyCallForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a strategy call",
  description:
    "Book a free 30 minute digital marketing strategy call with Ruth Digital in Nairobi. Tell us about your brand, your platform and your goals.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a free 30 minute strategy call"
        text="Tell us where your brand is now and where you want it to be. We will come back with a time and a short agenda, so the call is useful from the first minute."
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />

      <section className="rd-section">
        <div className="rd-container">
          <div style={{ display: "grid", gridTemplateColumns: "1.35fr 0.85fr", gap: 40 }} className="rd-contact-grid">
            <div className="rd-form-card">
              <h2 className="rd-h2" style={{ paddingBottom: 8 }}>
                Strategy call request
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, paddingBottom: 24 }}>
                {`Fields marked with an asterisk are required. We reply within one working day, and we never pass your details to a third party.`}
              </p>
              <StrategyCallForm />
            </div>

            <aside>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e6e1e1",
                  borderRadius: 20,
                  padding: 28,
                  marginBottom: 24,
                }}
              >
                <h3 className="rd-h3" style={{ paddingBottom: 16 }}>
                  Reach us directly
                </h3>
                <div className="rd-footer__contact">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={17} aria-hidden="true" />
                    <span>WhatsApp {site.phoneDisplay}</span>
                  </a>
                  <a href={`tel:+${site.whatsappNumber}`}>
                    <Phone size={17} aria-hidden="true" />
                    <span>{site.phoneDisplay}</span>
                  </a>
                  <a href={`mailto:${site.email}`}>
                    <Mail size={17} aria-hidden="true" />
                    <span>{site.email}</span>
                  </a>
                  <span>
                    <MapPin size={17} aria-hidden="true" />
                    <span>{site.addressLine}</span>
                  </span>
                  <span>
                    <Clock size={17} aria-hidden="true" />
                    <span>{site.hours}</span>
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: "#0891f8",
                  color: "#ffffff",
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <h3 style={{ color: "#ffffff", fontSize: 20, paddingBottom: 10 }}>
                  Prefer to talk it through?
                </h3>
                <p style={{ color: "rgba(255,255,255,0.92)", fontSize: 14.5, lineHeight: 1.7, paddingBottom: 18 }}>
                  Send a WhatsApp message and we will reply on the same working day.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rd-btn rd-btn--light rd-btn--sm"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Open WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 991px) {
          .rd-contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
