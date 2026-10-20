import { NextResponse } from "next/server";
import { getCaseStudies } from "@/lib/queries";
import { industries } from "@/lib/content";

export const runtime = "nodejs";

/**
 * GET /api/case-studies
 * Optional query parameters: industry, platform
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const industry = searchParams.get("industry");
  const platform = searchParams.get("platform");

  if (industry && industry !== "all") {
    const known = industries.some((item) => item.toLowerCase() === industry.toLowerCase());
    if (!known) {
      return NextResponse.json(
        {
          ok: false,
          error: "Unknown industry filter",
          allowedIndustries: industries,
        },
        { status: 400 },
      );
    }
  }

  const studies = getCaseStudies({ industry, platform }).map((study) => ({
    slug: study.slug,
    industry: study.industry,
    platform: study.platform,
    client: study.client,
    location: study.location,
    challenge: study.challenge,
    resultHeadline: study.resultHeadline,
    summary: study.summary,
    image: study.image,
    duration: study.duration,
    services: study.services,
  }));

  return NextResponse.json({
    ok: true,
    count: studies.length,
    filters: { industry: industry ?? "all", platform: platform ?? "all" },
    data: studies,
  });
}
