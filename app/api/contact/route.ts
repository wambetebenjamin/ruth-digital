import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { bookingReference, escapeHtml, rowsToHtml, sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

/** POST /api/contact, general enquiry with reCAPTCHA verification and nodemailer. */
export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);

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

  const verification = await verifyRecaptcha(values.recaptchaToken, "contact", ip);

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

  const reference = bookingReference("RDMSG");

  const rows = [
    { label: "Reference", value: reference },
    { label: "Name", value: values.name },
    { label: "Email", value: values.email },
    { label: "Phone", value: values.phone || "Not provided" },
    { label: "Subject", value: values.subject },
    { label: "Message", value: values.message },
  ];

  const emailed = await sendMail({
    subject: `Website enquiry ${reference}: ${values.subject}`,
    replyTo: values.email,
    text: rows.map((row) => `${row.label}: ${row.value}`).join("\n"),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#272f43;">
        <h2 style="color:#0891f8;margin:0 0 6px;">New website enquiry</h2>
        ${rowsToHtml(rows)}
      </div>
    `,
  });

  return NextResponse.json(
    {
      ok: true,
      reference,
      notified: emailed,
      message: `Thank you ${escapeHtml(values.name)}, we have your message.`,
    },
    { status: 201 },
  );
}
