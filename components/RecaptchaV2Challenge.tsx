"use client";

import { useEffect, useRef, useState } from "react";
import { loadRecaptchaV2 } from "@/lib/recaptcha-client";

type Props = {
  onToken: (token: string | null) => void;
};

/**
 * reCAPTCHA v2 fallback. The API routes ask for this when the v3 score is
 * below 0.5. The v2 site key is public and configured separately because a v2
 * key cannot be used for v3.
 */
export default function RecaptchaV2Challenge({ onToken }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<number | null>(null);
  const [error, setError] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY ?? "";

  useEffect(() => {
    if (!siteKey) return;
    let cancelled = false;

    loadRecaptchaV2(siteKey)
      .then(() => {
        if (cancelled || !containerRef.current) return;
        const grecaptcha = window.grecaptcha as unknown as {
          render: (
            element: HTMLElement,
            options: {
              sitekey: string;
              callback: (token: string) => void;
              "expired-callback": () => void;
            },
          ) => number;
        };
        if (!grecaptcha || typeof grecaptcha.render !== "function") {
          setError(true);
          return;
        }
        if (widgetRef.current === null) {
          widgetRef.current = grecaptcha.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => onToken(token),
            "expired-callback": () => onToken(null),
          });
        }
      })
      .catch(() => setError(true));

    return () => {
      cancelled = true;
    };
  }, [onToken, siteKey]);

  if (!siteKey || error) {
    return (
      <div className="rd-alert rd-alert--error" role="alert">
        We could not complete the security check automatically. Please email{" "}
        <a href="mailto:hello@ruthdigital.co.ke">hello@ruthdigital.co.ke</a> or message
        us on WhatsApp and we will pick it up straight away.
      </div>
    );
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <span className="rd-mini-label">Security check</span>
      <div ref={containerRef} />
    </div>
  );
}
