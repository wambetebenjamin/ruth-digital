import { NextResponse } from "next/server";
import { getCaseStudy } from "@/lib/queries";

export const runtime = "nodejs";

/** GET /api/case-studies/[slug] */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return NextResponse.json(
      { ok: false, error: "Case study not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({ ok: true, data: study });
}
