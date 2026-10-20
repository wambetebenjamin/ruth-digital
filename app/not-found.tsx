import Link from "next/link";
import { ArrowRight, Signal } from "lucide-react";

export const metadata = {
  title: "Page not found",
  description: "This page did not reach its audience.",
};

export default function NotFound() {
  return (
    <section className="rd-page-hero" style={{ padding: "90px 0 96px" }}>
      <div className="rd-container">
        <div
          style={{
            maxWidth: 620,
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 84,
              height: 84,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.16)",
              border: "1px solid rgba(255,255,255,0.4)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
            }}
          >
            <Signal size={38} />
          </span>
          <p className="rd-eyebrow" style={{ color: "#fdd430", margin: 0 }}>
            404
          </p>
          <h1 className="rd-page-hero__title" style={{ margin: 0 }}>
            This page did not reach its audience.
          </h1>
          <p className="rd-page-hero__text" style={{ margin: 0 }}>
            The link may have changed, or the page has been moved. Everything else is
            still where you left it.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/" className="rd-btn rd-btn--light">
              Back to Home
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="rd-btn rd-btn--outline" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
