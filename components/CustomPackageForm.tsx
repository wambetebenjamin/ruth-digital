"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Send } from "lucide-react";
import { customPackageSchema } from "@/lib/validation";
import { useRecaptchaV3 } from "@/lib/recaptcha-client";
import RecaptchaV2Challenge from "./RecaptchaV2Challenge";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  needs: string;
};

const defaults: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  needs: "",
};

const budgetBands = [
  "KES 30,000 to 60,000",
  "KES 60,000 to 120,000",
  "KES 120,000 to 200,000",
  "Above KES 200,000",
  "Not sure yet",
];

export default function CustomPackageForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: defaults });

  const { execute } = useRecaptchaV3("custom_package");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [challengeRequired, setChallengeRequired] = useState(false);
  const [v2Token, setV2Token] = useState<string | null>(null);

  const onV2Token = useCallback((token: string | null) => setV2Token(token), []);

  const submit = async (values: FormValues) => {
    setStatus("idle");
    setMessage("");

    const parsed = customPackageSchema.safeParse(values);
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || "",
          subject: `Custom package enquiry, ${parsed.data.company}, budget ${parsed.data.budget}`,
          message: `Company: ${parsed.data.company}\nBudget band: ${parsed.data.budget}\n\nNeeds:\n${parsed.data.needs}`,
          recaptchaToken: token,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        requiresChallenge?: boolean;
      };

      if (data.requiresChallenge) {
        setChallengeRequired(true);
        setStatus("error");
        setMessage("Please complete the security check below, then send again.");
        return;
      }

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again or WhatsApp us.");
        return;
      }

      setStatus("success");
      setMessage("Thank you. We will come back to you with a custom scope within two working days.");
      reset(defaults);
      setChallengeRequired(false);
      setV2Token(null);
    } catch {
      setStatus("error");
      setMessage("We could not reach the server. Please try again or WhatsApp us.");
    }
  };

  if (status === "success") {
    return (
      <div className="rd-alert rd-alert--success" role="status">
        <strong style={{ display: "block", paddingBottom: 6 }}>Enquiry received</strong>
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

      <div className="rd-form-grid">
        <div className="rd-field">
          <label htmlFor="cp-name">
            Your name <span className="req">*</span>
          </label>
          <input
            id="cp-name"
            className="rd-input"
            placeholder="Full name"
            autoComplete="name"
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && <span className="rd-error">{errors.name.message}</span>}
        </div>

        <div className="rd-field">
          <label htmlFor="cp-company">
            Company <span className="req">*</span>
          </label>
          <input
            id="cp-company"
            className="rd-input"
            placeholder="Business name"
            autoComplete="organization"
            {...register("company", { required: "Please enter your company name" })}
          />
          {errors.company && <span className="rd-error">{errors.company.message}</span>}
        </div>

        <div className="rd-field">
          <label htmlFor="cp-email">
            Email <span className="req">*</span>
          </label>
          <input
            id="cp-email"
            type="email"
            className="rd-input"
            placeholder="you@company.co.ke"
            autoComplete="email"
            {...register("email", { required: "Please enter a valid email address" })}
          />
          {errors.email && <span className="rd-error">{errors.email.message}</span>}
        </div>

        <div className="rd-field">
          <label htmlFor="cp-phone">Phone or WhatsApp</label>
          <input
            id="cp-phone"
            className="rd-input"
            placeholder="+254 7XX XXX XXX"
            autoComplete="tel"
            {...register("phone")}
          />
        </div>

        <div className="rd-field rd-form-grid--full">
          <label htmlFor="cp-budget">
            Monthly budget band <span className="req">*</span>
          </label>
          <select
            id="cp-budget"
            className="rd-select"
            {...register("budget", { required: "Please choose a budget band" })}
          >
            <option value="">Select a range</option>
            {budgetBands.map((band) => (
              <option key={band} value={band}>
                {band}
              </option>
            ))}
          </select>
          {errors.budget && <span className="rd-error">{errors.budget.message}</span>}
        </div>

        <div className="rd-field rd-form-grid--full">
          <label htmlFor="cp-needs">
            What do you need? <span className="req">*</span>
          </label>
          <textarea
            id="cp-needs"
            className="rd-textarea"
            placeholder="Describe the channels, deliverables and timing you have in mind."
            {...register("needs", { required: "Please describe what you need" })}
          />
          {errors.needs && <span className="rd-error">{errors.needs.message}</span>}
        </div>
      </div>

      {challengeRequired && <RecaptchaV2Challenge onToken={onV2Token} />}

      <button type="submit" className="rd-btn rd-btn--brand" disabled={isSubmitting} style={{ width: "100%" }}>
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="rd-spin" aria-hidden="true" />
            Sending enquiry
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Send custom enquiry
          </>
        )}
      </button>
    </form>
  );
}
