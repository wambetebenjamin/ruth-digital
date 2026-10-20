import { z } from "zod";

export const consentPreferencesSchema = z.object({
  necessary: z.literal(true),
  functional: z.boolean(),
  analytics: z.boolean(),
  marketing: z.boolean(),
  updatedAt: z.string(),
  version: z.number(),
});

export type ConsentPreferences = z.infer<typeof consentPreferencesSchema>;

export const defaultConsent: ConsentPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  updatedAt: "",
  version: 1,
};

export function readConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem("ruth_digital_consent");
    if (!raw) return null;
    const parsed = consentPreferencesSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

export function writeConsent(
  preferences: Omit<ConsentPreferences, "necessary" | "updatedAt" | "version">,
): ConsentPreferences {
  const value: ConsentPreferences = {
    necessary: true,
    functional: preferences.functional,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
    updatedAt: new Date().toISOString(),
    version: 1,
  };
  if (typeof window !== "undefined") {
    window.localStorage.setItem("ruth_digital_consent", JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("ruthdigital:consent", { detail: value }));
  }
  return value;
}

export function hasConsent(category: "functional" | "analytics" | "marketing"): boolean {
  const stored = readConsent();
  return stored ? stored[category] : false;
}
