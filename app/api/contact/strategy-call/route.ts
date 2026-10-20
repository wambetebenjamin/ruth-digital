import { NextResponse } from "next/server";
import { strategyCallSchema } from "@/lib/validation";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { bookingReference, escapeHtml, rowsToHtml, sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

/** POST /api/contact/strategy-call */
export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = strategyCallSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the form and try again.",
        issues: parsed.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 422 },
    );
  }

  const values = parsed.data;

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    undefined;

  const verification = await verifyRecaptcha(values.recaptchaToken, "strategy_call", ip);

  if (!verification.success) {
    return NextResponse.json(
      {
        ok: false,
        requiresChallenge: verification.requiresChallenge,
        error: verification.requiresChallenge
          ? "We need a quick security check before sending. Please complete the check below."
          : "We could not verify this request. Please try again or message us on WhatsApp.",
      },
      { status: 403 },
    );
  }

  const reference = bookingReference("RD");
  const submittedAt = new Date().toLocaleString("en-KE", {
    timeZone: "Africa/Nairobi",
    dateStyle: "full",
    timeStyle: "short",
  });

  const rows = [
    { label: "Booking reference", value: reference },
    { label: "Received", value: `${submittedAt} EAT` },
    { label: "Name", value: values.name },
    { label: "Company", value: values.company },
    { label: "Email", value: values.email },
    { label: "Phone or WhatsApp", value: values.phone },
    { label: "Website or handle", value: values.website || "Not provided" },
    { label: "Monthly ad budget", value: values.adBudget },
    { label: "Main platform", value: values.platform },
    { label: "Preferred call time", value: values.callTime },
    { label: "Goal", value: values.goal },
    { label: "reCAPTCHA score", value: verification.score === null ? "not scored" : String(verification.score) },
  ];

  const emailed = await sendMail({
    subject: `Strategy call request ${reference} from ${values.company}`,
    replyTo: values.email,
    text: rows.map((row) => `${row.label}: ${row.value}`).join("\n"),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#272f43;">
        <h2 style="color:#0891f8;margin:0 0 6px;">New strategy call request</h2>
        <p style="color:#666666;font-size:14px;margin:0 0 18px;">
          Submitted from the Ruth Digital website.
        </p>
        ${rowsToHtml(rows)}
        <p style="color:#666666;font-size:12px;margin-top:20px;">
          Reply directly to this email to reach ${escapeHtml(values.name)}.
        </p>
      </div>
    `,
  });

  return NextResponse.json(
    {
      ok: true,
      reference,
      notified: emailed,
      message: "Strategy call request received.",
    },
    { status: 201 },
  );
}
