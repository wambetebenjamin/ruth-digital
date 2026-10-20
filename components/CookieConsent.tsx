"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import {
  defaultConsent,
  readConsent,
  writeConsent,
  type ConsentPreferences,
} from "@/lib/consent";

const categories = [
  {
    key: "necessary" as const,
    label: "Necessary",
    desc: "Required for the site to work, including security, page routing and remembering your cookie choice. These cannot be switched off.",
  },
  {
    key: "functional" as const,
    label: "Functional",
    desc: "Remember preferences such as the voice tour setting and form progress, so you do not have to repeat yourself.",
  },
  {
    key: "analytics" as const,
    label: "Analytics",
    desc: "Help us understand which pages and articles are useful, using aggregated Vercel Analytics data. No advertising profiles are built.",
  },
  {
    key: "marketing" as const,
    label: "Marketing",
    desc: "Allow us to measure campaign performance and show relevant ads on Meta and Google after you submit an enquiry.",
  },
];

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPreferences>(defaultConsent);

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setPrefs(stored);
    } else {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const save = (values: Omit<ConsentPreferences, "necessary" | "updatedAt" | "version">) => {
    const saved = writeConsent(values);
    setPrefs(saved);
    setVisible(false);
    setModalOpen(false);
  };

  if (!visible && !modalOpen) return null;

  return (
    <>
      {visible && (
        <div
          className="rd-cookie"
          role="region"
          aria-label="Cookie preferences"
        >
          <div className="rd-container">
            <div className="rd-cookie__inner">
              <div className="rd-cookie__text">
                <Cookie size={24} aria-hidden="true" />
                <p>
                  {`We use cookies to keep this site working, understand what you find useful and improve our marketing. Under the Kenya Data Protection Act 2019 you can accept everything or choose what you allow. Read our `}
                  <Link href="/legal/cookie-policy">Cookie Policy</Link>
                  {` and `}
                  <Link href="/legal/privacy-policy">Privacy Policy</Link>.
                </p>
              </div>
              <div className="rd-cookie__actions">
                <button
                  type="button"
                  className="rd-btn rd-btn--outline rd-btn--sm"
                  onClick={() => setModalOpen(true)}
                >
                  Manage Preferences
                </button>
                <button
                  type="button"
                  className="rd-btn rd-btn--brand rd-btn--sm"
                  onClick={() =>
                    save({ functional: true, analytics: true, marketing: true })
                  }
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div
          className="rd-modal-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setModalOpen(false);
          }}
        >
          <div
            className="rd-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
          >
            <div className="rd-modal__head">
              <div>
                <h2 id="cookie-modal-title">Cookie preferences</h2>
                <p className="rd-form-note">
                  Choose what you allow. Necessary cookies stay on so the site can
                  function.
                </p>
              </div>
              <button
                type="button"
                className="rd-modal__close"
                onClick={() => setModalOpen(false)}
                aria-label="Close cookie preferences"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {categories.map((category) => {
              const locked = category.key === "necessary";
              const on = locked ? true : Boolean(prefs[category.key]);
              return (
                <div className="rd-pref" key={category.key}>
                  <div>
                    <div className="rd-pref__label" id={`pref-${category.key}`}>
                      {category.label}
                      {locked ? " (always on)" : ""}
                    </div>
                    <p className="rd-pref__desc">{category.desc}</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={on}
                    aria-labelledby={`pref-${category.key}`}
                    disabled={locked}
                    className={`rd-switch${on ? " is-on" : ""}${locked ? " is-locked" : ""}`}
                    onClick={() => {
                      if (locked) return;
                      setPrefs((current) => ({ ...current, [category.key]: !on }));
                    }}
                  >
                    <span className="rd-switch__dot" />
                  </button>
                </div>
              );
            })}

            <div className="rd-cookie__actions" style={{ marginTop: 24 }}>
              <button
                type="button"
                className="rd-btn rd-btn--outline rd-btn--sm"
                onClick={() =>
                  save({ functional: false, analytics: false, marketing: false })
                }
              >
                Reject optional
              </button>
              <button
                type="button"
                className="rd-btn rd-btn--outline rd-btn--sm"
                onClick={() =>
                  setPrefs({ ...prefs, functional: true, analytics: true, marketing: true })
                }
              >
                Select all
              </button>
              <button
                type="button"
                className="rd-btn rd-btn--brand rd-btn--sm"
                onClick={() =>
                  save({
                    functional: prefs.functional,
                    analytics: prefs.analytics,
                    marketing: prefs.marketing,
                  })
                }
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
