"use client";

import { useEffect } from "react";

/** Last resort error boundary, rendered when the root layout itself fails. */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[ruth-digital] global error:", error.message);
  }, [error]);

  return (
    <html lang="en-KE">
      <body style={{ margin: 0, fontFamily: "'Lato', sans-serif", background: "#ffffff" }}>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "#0891f8",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <p style={{ fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fdd430" }}>
              500
            </p>
            <h1 style={{ fontSize: 32, lineHeight: 1.2, margin: "10px 0 14px", fontWeight: 700 }}>
              The site could not load this page.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24, color: "rgba(255,255,255,0.95)" }}>
              Try again, or message us on WhatsApp at +254112272061 and we will help directly.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={reset}
                style={{
                  background: "#ffffff",
                  color: "#0891f8",
                  border: 0,
                  borderRadius: 10,
                  padding: "14px 28px",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Try Again
              </button>
              <a
                href="https://wa.me/254112272061"
                style={{
                  border: "1px solid rgba(255,255,255,0.7)",
                  color: "#ffffff",
                  borderRadius: 10,
                  padding: "14px 28px",
                  fontSize: 16,
                  textDecoration: "none",
                }}
              >
                WhatsApp +254112272061
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
