import { NextResponse } from "next/server";
import { verifyRecaptcha, RECAPTCHA_THRESHOLD } from "@/lib/recaptcha";

export const runtime = "nodejs";

/** POST /api/recaptcha/verify, server side verification of a v3 token. */
export async function POST(request: Request) {
  let payload: { token?: string; action?: string } = {};

  try {
    payload = (await request.json()) as { token?: string; action?: string };
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const action = payload.action ?? "submit";
  const result = await verifyRecaptcha(payload.token, action);

  return NextResponse.json(
    {
      ok: result.success,
      score: result.score,
      threshold: RECAPTCHA_THRESHOLD,
      requiresChallenge: result.requiresChallenge,
      skipped: result.skipped,
      reason: result.reason ?? null,
    },
    { status: result.success ? 200 : 403 },
  );
}
