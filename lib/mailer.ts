import nodemailer from "nodemailer";

type MailPayload = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

function getTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? 587);

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

/**
 * Sends a notification to the studio inbox. Returns false when SMTP is not
 * configured so the API route can still return a booking reference and log
 * the enquiry instead of failing the visitor.
 */
export async function sendMail(payload: MailPayload): Promise<boolean> {
  const transport = getTransport();
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;
  const to = process.env.SMTP_TO ?? process.env.SMTP_USER;

  if (!transport || !from || !to) {
    console.info("[ruth-digital] SMTP not configured, enquiry logged only:", payload.subject);
    return false;
  }

  await transport.sendMail({
    from,
    to,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
    replyTo: payload.replyTo,
  });

  return true;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function rowsToHtml(rows: { label: string; value: string }[]): string {
  const cells = rows
    .map(
      (row) =>
        `<tr><td style="padding:8px 14px;border-bottom:1px solid #eceef2;font-weight:700;color:#272f43;width:210px;">${escapeHtml(
          row.label,
        )}</td><td style="padding:8px 14px;border-bottom:1px solid #eceef2;color:#666666;">${escapeHtml(
          row.value,
        )}</td></tr>`,
    )
    .join("");

  return `<table style="border-collapse:collapse;width:100%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${cells}</table>`;
}

export function bookingReference(prefix = "RD"): string {
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate(),
  ).padStart(2, "0")}`;
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${stamp}-${random}`;
}
