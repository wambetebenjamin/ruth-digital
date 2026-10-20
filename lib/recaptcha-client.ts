"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type GrecaptchaV3 = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: GrecaptchaV3 & {
      reset?: (widgetId?: number) => void;
      render?: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
        },
      ) => number;
    };
    rdOnRecaptchaV2Load?: () => void;
  }
}

export function useRecaptchaV3(action: string) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  const [ready, setReady] = useState(false);
  const readyRef = useRef(false);

  useEffect(() => {
    if (!siteKey) return;
    let cancelled = false;

    const check = () => {
      if (cancelled) return;
      if (window.grecaptcha && typeof window.grecaptcha.execute === "function") {
        readyRef.current = true;
        setReady(true);
        return true;
      }
      return false;
    };

    if (check()) return;

    const interval = window.setInterval(() => {
      if (check()) window.clearInterval(interval);
    }, 400);

    const timeout = window.setTimeout(() => window.clearInterval(interval), 12000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [siteKey]);

  const execute = useCallback(async (): Promise<string | undefined> => {
    if (!siteKey) return undefined;
    if (!window.grecaptcha || typeof window.grecaptcha.execute !== "function") return undefined;

    try {
      await new Promise<void>((resolve) => {
        window.grecaptcha?.ready(() => resolve());
        window.setTimeout(resolve, 2500);
      });
      const token = await window.grecaptcha.execute(siteKey, { action });
      return token;
    } catch {
      return undefined;
    }
  }, [action, siteKey]);

  return { execute, ready, enabled: siteKey.length > 0, siteKey };
}

export function loadRecaptchaV2(siteKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-rd-recaptcha-v2="true"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("load failed")));
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=rdOnRecaptchaV2Load&render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.rdRecaptchaV2 = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("load failed"));
    window.rdOnRecaptchaV2Load = () => resolve();
    document.head.appendChild(script);
  });
}
