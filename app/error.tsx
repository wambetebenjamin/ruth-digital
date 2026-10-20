"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Home, MessageCircle, RefreshCw, AlertTriangle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[ruth-digital] route error:", error.message);
  }, [error]);

  return (
    <section className="rd-page-hero" style={{ padding: "90px 0 96px" }}>
      <div className="rd-container">
        <div
          style={{
            maxWidth: 640,
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
            <AlertTriangle size={36} />
          </span>
          <p className="rd-eyebrow" style={{ color: "#fdd430", margin: 0 }}>
            500
          </p>
          <h1 className="rd-page-hero__title" style={{ margin: 0 }}>
            Something went wrong on our side.
          </h1>
          <p className="rd-page-hero__text" style={{ margin: 0 }}>
            Try again in a moment. If it keeps happening, message us on WhatsApp at
            +254112272061 and we will sort it out.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <button type="button" onClick={reset} className="rd-btn rd-btn--light">
              <RefreshCw size={17} aria-hidden="true" />
              Try Again
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rd-btn rd-btn--outline"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp +254112272061
            </a>
            <Link href="/" className="rd-btn rd-btn--outline" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
              <Home size={17} aria-hidden="true" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
