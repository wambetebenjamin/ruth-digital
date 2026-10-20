"use client";

import Script from "next/script";

/**
 * Google reCAPTCHA v3 loader. The site key is public, the secret stays on the
 * server and is only read inside the API routes.
 */
export default function RecaptchaScript() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) return null;

  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
      strategy="afterInteractive"
    />
  );
}

export function getRecaptchaSiteKey(): string | null {
  const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return key && key.length > 0 ? key : null;
}
