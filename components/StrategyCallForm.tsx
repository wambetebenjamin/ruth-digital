"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Send } from "lucide-react";
import {
  adBudgetOptions,
  callTimeOptions,
  platformOptions,
  strategyCallSchema,
} from "@/lib/validation";
import { useRecaptchaV3 } from "@/lib/recaptcha-client";
import RecaptchaV2Challenge from "./RecaptchaV2Challenge";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  adBudget: string;
  platform: string;
  goal: string;
  callTime: string;
  consent: boolean;
};

const defaults: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  adBudget: "",
  platform: "",
  goal: "",
  callTime: "",
  consent: false,
};

export default function StrategyCallForm({ compact = false }: { compact?: boolean }) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: defaults });

  const { execute } = useRecaptchaV3("strategy_call");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [reference, setReference] = useState("");
  const [challengeRequired, setChallengeRequired] = useState(false);
  const [v2Token, setV2Token] = useState<string | null>(null);

  const onV2Token = useCallback((token: string | null) => setV2Token(token), []);

  const submit = async (values: FormValues) => {
    setStatus("idle");
    setMessage("");

    const parsed = strategyCallSchema.safeParse({
      ...values,
      recaptchaToken: v2Token ?? undefined,
    });

    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (typeof field === "string" && field in defaults) {
          setError(field as keyof FormValues, { type: "manual", message: issue.message });
        }
      });
      setStatus("error");
      setMessage("Please check the highlighted fields and try again.");
      return;
    }

    const token = v2Token ?? (await execute());

    try {
      const response = await fetch("/api/contact/strategy-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, recaptchaToken: token }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        reference?: string;
        error?: string;
        requiresChallenge?: boolean;
      };

      if (data.requiresChallenge) {
        setChallengeRequired(true);
        setStatus("error");
        setMessage(
          "Please complete the security check below, then send the request again.",
        );
        return;
      }

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again or WhatsApp us.");
        return;
      }

      setStatus("success");
      setReference(data.reference ?? "");
      setMessage(
        "Thank you. Your call request is in and we will confirm a time by email within one working day.",
      );
      reset(defaults);
      setChallengeRequired(false);
      setV2Token(null);
    } catch {
      setStatus("error");
      setMessage(
        "We could not reach the server. Please try again, or message us on WhatsApp.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rd-alert rd-alert--success" role="status">
        <strong style={{ display: "block", paddingBottom: 6 }}>Request received</strong>
        {message}
        {reference && (
          <span style={{ display: "block", paddingTop: 8, fontWeight: 700 }}>
            Booking reference: {reference}
          </span>
        )}
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

      <div className="rd-form-grid">
        <div className="rd-field">
          <label htmlFor="sc-name">
            Your name <span className="req">*</span>
          </label>
          <input
            id="sc-name"
            className="rd-input"
            placeholder="Full name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register("name", { required: "Please enter your full name" })}
          />
          {errors.name && <span className="rd-error">{errors.name.message}</span>}
        </div>

        <div className="rd-field">
          <label htmlFor="sc-company">
            Company <span className="req">*</span>
          </label>
          <input
            id="sc-company"
            className="rd-input"
            placeholder="Business or brand name"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            {...register("company", { required: "Please enter your company name" })}
          />
          {errors.company && <span className="rd-error">{errors.company.message}</span>}
        </div>

        <div className="rd-field">
          <label htmlFor="sc-email">
            Email <span className="req">*</span>
          </label>
          <input
            id="sc-email"
            type="email"
            className="rd-input"
            placeholder="you@company.co.ke"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email", { required: "Please enter a valid email address" })}
          />
          {errors.email && <span className="rd-error">{errors.email.message}</span>}
        </div>

        <div className="rd-field">
          <label htmlFor="sc-phone">
            Phone or WhatsApp <span className="req">*</span>
          </label>
          <input
            id="sc-phone"
            className="rd-input"
            placeholder="+254 7XX XXX XXX"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone", { required: "Please enter a valid phone number" })}
          />
          {errors.phone && <span className="rd-error">{errors.phone.message}</span>}
        </div>

        {!compact && (
          <div className="rd-field">
            <label htmlFor="sc-website">Website or social handle</label>
            <input
              id="sc-website"
              className="rd-input"
              placeholder="yourbrand.co.ke or @yourbrand"
              {...register("website")}
            />
          </div>
        )}

        <div className="rd-field">
          <label htmlFor="sc-budget">
            Current monthly ad budget <span className="req">*</span>
          </label>
          <select
            id="sc-budget"
            className="rd-select"
            aria-invalid={Boolean(errors.adBudget)}
            {...register("adBudget", { required: "Please choose a budget band" })}
          >
            <option value="">Select a range</option>
            {adBudgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.adBudget && <span className="rd-error">{errors.adBudget.message}</span>}
        </div>

        <div className="rd-field">
          <label htmlFor="sc-platform">
            Main platform <span className="req">*</span>
          </label>
          <select
            id="sc-platform"
            className="rd-select"
            aria-invalid={Boolean(errors.platform)}
            {...register("platform", { required: "Please choose a platform" })}
          >
            <option value="">Select a platform</option>
            {platformOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.platform && <span className="rd-error">{errors.platform.message}</span>}
        </div>

        <div className="rd-field">
          <label htmlFor="sc-time">
            Preferred call time <span className="req">*</span>
          </label>
          <select
            id="sc-time"
            className="rd-select"
            aria-invalid={Boolean(errors.callTime)}
            {...register("callTime", { required: "Please choose a call time" })}
          >
            <option value="">Select a time</option>
            {callTimeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.callTime && <span className="rd-error">{errors.callTime.message}</span>}
        </div>

        <div className="rd-field rd-form-grid--full">
          <label htmlFor="sc-goal">
            What do you want the call to solve? <span className="req">*</span>
          </label>
          <textarea
            id="sc-goal"
            className="rd-textarea"
            placeholder="Tell us what is not working, what you have tried and what growth would look like for you."
            aria-invalid={Boolean(errors.goal)}
            {...register("goal", { required: "Please tell us a little more" })}
          />
          {errors.goal && <span className="rd-error">{errors.goal.message}</span>}
        </div>
      </div>

      <div className="rd-field" style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
        <input
          id="sc-consent"
          type="checkbox"
          style={{ marginTop: 4, width: 18, height: 18, accentColor: "#0891f8" }}
          aria-invalid={Boolean(errors.consent)}
          {...register("consent", { required: true })}
        />
        <label
          htmlFor="sc-consent"
          style={{ textTransform: "none", letterSpacing: 0, fontSize: 13, fontWeight: 400, color: "#666666", lineHeight: 1.6 }}
        >
          I agree to the{" "}
          <Link href="/legal/privacy-policy" style={{ color: "#0891f8", textDecoration: "underline" }}>
            privacy policy
          </Link>{" "}
          and to being contacted about this request.
        </label>
      </div>
      {errors.consent && <span className="rd-error">Please accept the privacy policy to continue</span>}

      {challengeRequired && <RecaptchaV2Challenge onToken={onV2Token} />}

      <button type="submit" className="rd-btn rd-btn--brand" disabled={isSubmitting} style={{ width: "100%" }}>
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="rd-spin" aria-hidden="true" />
            Sending request
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Request my strategy call
          </>
        )}
      </button>

      <p className="rd-form-note" style={{ paddingTop: 12 }}>
        {`Protected by reCAPTCHA v3. We reply within one working day, Monday to Friday.`}
      </p>
    </form>
  );
}
