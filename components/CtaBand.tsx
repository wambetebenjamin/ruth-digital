import Link from "next/link";
import { Check, MessageCircle, PhoneCall } from "lucide-react";
import StrategyCallForm from "./StrategyCallForm";
import { whatsappLink } from "@/lib/site";

const points = [
  "A 30 minute call with a strategist, not a salesperson",
  "A straight look at your current accounts and ads",
  "A written plan outline within three working days",
];

/** Full width call to action band with the strategy call form embedded. */
export default function CtaBand({
  eyebrow = "Free 30 minute strategy call",
  title = "Let us look at your brand and tell you what we would do.",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="rd-cta" id="strategy-call">
      <div className="rd-container">
        <div className="rd-cta__grid">
          <div>
            <span className="rd-eyebrow">{eyebrow}</span>
            <h2 className="rd-cta__title">{title}</h2>
            <p className="rd-cta__text">
              {`No obligation and no pitch deck. Bring your numbers, your questions and the posts that are not working, and we will tell you honestly what we would change first.`}
            </p>
            <ul className="rd-cta__list">
              {points.map((point) => (
                <li key={point}>
                  <Check size={18} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
              <a
                href={whatsappLink}
                className="rd-btn rd-btn--light rd-btn--sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <Link href="/pricing" className="rd-btn rd-btn--outline rd-btn--sm" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
                <PhoneCall size={17} aria-hidden="true" />
                See packages
              </Link>
            </div>
          </div>

          <div className="rd-cta__panel">
            <h3>Book your call</h3>
            <p>Tell us a little about the business and we will confirm a time.</p>
            <StrategyCallForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
