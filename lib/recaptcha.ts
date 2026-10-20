/**
 * Server side reCAPTCHA v3 verification.
 * The secret key is read from the environment on the server only.
 * A score below 0.5 is treated as suspicious and the caller asks the client
 * to complete a reCAPTCHA v2 challenge before the form is accepted.
 */

export const RECAPTCHA_THRESHOLD = 0.5;

export type RecaptchaResult = {
  success: boolean;
  score: number | null;
  requiresChallenge: boolean;
  skipped: boolean;
  reason?: string;
};

export async function verifyRecaptcha(
  token: string | undefined,
  action: string,
  remoteIp?: string,
): Promise<RecaptchaResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    // Local development or preview without keys: do not block form submissions,
    // but make the skip explicit so it is visible in logs.
    return {
      success: true,
      score: null,
      requiresChallenge: false,
      skipped: true,
      reason: "RECAPTCHA_SECRET_KEY is not configured",
    };
  }

  if (!token) {
    return {
      success: false,
      score: null,
      requiresChallenge: true,
      skipped: false,
      reason: "Missing reCAPTCHA token",
    };
  }

  try {
    const body = new URLSearchParams({
      secret,
      response: token,
    });
    if (remoteIp) body.set("remoteip", remoteIp);

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      cache: "no-store",
    });

    const data = (await response.json()) as {
      success: boolean;
      score?: number;
      action?: string;
      "error-codes"?: string[];
    };

    if (!data.success) {
      return {
        success: false,
        score: data.score ?? null,
        requiresChallenge: true,
        skipped: false,
        reason: (data["error-codes"] ?? []).join(", ") || "Verification failed",
      };
    }

    const score = typeof data.score === "number" ? data.score : null;

    if (score !== null && score < RECAPTCHA_THRESHOLD) {
      return {
        success: false,
        score,
        requiresChallenge: true,
        skipped: false,
        reason: "Score below threshold",
      };
    }

    if (data.action && data.action !== action) {
      return {
        success: false,
        score,
        requiresChallenge: true,
        skipped: false,
        reason: "Action mismatch",
      };
    }

    return { success: true, score, requiresChallenge: false, skipped: false };
  } catch {
    return {
      success: false,
      score: null,
      requiresChallenge: true,
      skipped: false,
      reason: "Verification service unavailable",
    };
  }
}
