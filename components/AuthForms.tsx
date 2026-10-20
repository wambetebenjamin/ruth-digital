"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, LogIn, ShieldCheck } from "lucide-react";
import { useRecaptchaV3 } from "@/lib/recaptcha-client";
import RecaptchaV2Challenge from "./RecaptchaV2Challenge";
import { contactSchema } from "@/lib/validation";

declare global {
  interface Window {
    rdSignInWithGoogle?: () => void;
  }
}

type GoogleButtonProps = {
  action: "signin" | "signup";
};

/** Google OAuth button, guarded by a reCAPTCHA v3 check before the redirect. */
export function GoogleAuthButton({ action }: GoogleButtonProps) {
  const { execute } = useRecaptchaV3(action);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [challenge, setChallenge] = useState(false);
  const [v2Token, setV2Token] = useState<string | null>(null);
  const onV2Token = useCallback((token: string | null) => setV2Token(token), []);

  const start = async () => {
    setBusy(true);
    setError("");
    const token = v2Token ?? (await execute());

    try {
      const response = await fetch("/api/recaptcha/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, action }),
      });
      const data = (await response.json()) as { ok?: boolean; requiresChallenge?: boolean };

      if (!response.ok || !data.ok) {
        if (data.requiresChallenge) {
          setChallenge(true);
          setError("Please complete the security check, then try again.");
        } else {
          setError("Verification failed. Please try again.");
        }
        setBusy(false);
        return;
      }

      window.location.href = "/api/auth/signin/google";
    } catch {
      setError("We could not reach the server. Please try again.");
      setBusy(false);
    }
  };

  return (
    <div>
      {error && (
        <div className="rd-alert rd-alert--error" role="alert">
          {error}
        </div>
      )}
      {challenge && <RecaptchaV2Challenge onToken={onV2Token} />}
      <button type="button" className="rd-btn rd-btn--brand" onClick={start} disabled={busy} style={{ width: "100%" }}>
        {busy ? (
          <>
            <Loader2 size={18} className="rd-spin" aria-hidden="true" />
            Connecting to Google
          </>
        ) : (
          <>
            <LogIn size={18} aria-hidden="true" />
            {action === "signin" ? "Continue with Google" : "Sign up with Google"}
          </>
        )}
      </button>
      <p className="rd-form-note" style={{ paddingTop: 12, display: "flex", gap: 8 }}>
        <ShieldCheck size={15} aria-hidden="true" />
        Protected by reCAPTCHA v3. We only receive your name and email address from Google.
      </p>
    </div>
  );
}

type AccessValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

/** Client account request form, used on the sign up page. */
export function AccountRequestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AccessValues>({
    defaultValues: { name: "", email: "", company: "", message: "" },
  });
  const { execute } = useRecaptchaV3("contact");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [challenge, setChallenge] = useState(false);
  const [v2Token, setV2Token] = useState<string | null>(null);
  const onV2Token = useCallback((token: string | null) => setV2Token(token), []);

  const submit = async (values: AccessValues) => {
    setStatus("idle");
    setMessage("");

    const parsed = contactSchema.safeParse({
      name: values.name,
      email: values.email,
      subject: `Client account request, ${values.company}`,
      message: `Company: ${values.company}\n\n${values.message || "Account access requested from the sign up page."}`,
    });

    if (!parsed.success) {
      setStatus("error");
      setMessage(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }

    const token = v2Token ?? (await execute());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, recaptchaToken: token }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        requiresChallenge?: boolean;
      };

      if (data.requiresChallenge) {
        setChallenge(true);
        setStatus("error");
        setMessage("Please complete the security check, then send again.");
        return;
      }

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thank you. We will set up your client account and email your access details.");
      reset();
    } catch {
      setStatus("error");
      setMessage("We could not reach the server. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rd-alert rd-alert--success" role="status">
        <strong style={{ display: "block", paddingBottom: 6 }}>Request received</strong>
        {message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      {status === "error" && message && (
        <div className="rd-alert rd-alert--error" role="alert">
          {message}
        </div>
      )}

      <div className="rd-field">
        <label htmlFor="ar-name">
          Your name <span className="req">*</span>
        </label>
        <input id="ar-name" className="rd-input" autoComplete="name" {...register("name", { required: true })} />
        {errors.name && <span className="rd-error">Please enter your name</span>}
      </div>

      <div className="rd-field">
        <label htmlFor="ar-email">
          Work email <span className="req">*</span>
        </label>
        <input
          id="ar-email"
          type="email"
          className="rd-input"
          autoComplete="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="rd-error">Please enter a valid email address</span>}
      </div>

      <div className="rd-field">
        <label htmlFor="ar-company">
          Company <span className="req">*</span>
        </label>
        <input id="ar-company" className="rd-input" autoComplete="organization" {...register("company", { required: true })} />
        {errors.company && <span className="rd-error">Please enter your company name</span>}
      </div>

      <div className="rd-field">
        <label htmlFor="ar-message">Anything we should know?</label>
        <textarea id="ar-message" className="rd-textarea" {...register("message")} />
      </div>

      {challenge && <RecaptchaV2Challenge onToken={onV2Token} />}

      <button type="submit" className="rd-btn rd-btn--outline" disabled={isSubmitting} style={{ width: "100%" }}>
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="rd-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          "Request client access"
        )}
      </button>
    </form>
  );
}
