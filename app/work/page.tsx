import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WorkFilters from "@/components/WorkFilters";
import CtaBand from "@/components/CtaBand";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Real results for Kenyan brands across hospitality, retail, real estate, health, education, fashion and NGO work. Filter by industry and platform.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Case studies with numbers attached"
        text="Client names stay private, the results do not. Every project below is a real engagement run by our Nairobi team."
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Work" }]}
      />

      <section className="rd-section">
        <div className="rd-container">
          <WorkFilters studies={caseStudies} />
        </div>
      </section>

      <CtaBand
        eyebrow="Your brand could be next"
        title="Want a result like these on your own dashboard?"
      />
    </>
  );
}
