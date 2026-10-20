import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock, MapPin, Quote } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { caseStudies } from "@/lib/content";
import { getCaseStudy } from "@/lib/queries";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study not found" };

  return {
    title: study.resultHeadline,
    description: study.summary,
    openGraph: {
      title: study.resultHeadline,
      description: study.summary,
      images: [{ url: study.image, alt: study.imageAlt }],
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2);

  return (
    <>
      <section className="rd-page-hero">
        <div className="rd-container">
          <nav aria-label="Breadcrumb" className="rd-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/work">Work</Link>
            <span aria-hidden="true">/</span>
            <span>{study.industry}</span>
          </nav>
          <span className="rd-eyebrow">{study.industry}</span>
          <h1 className="rd-page-hero__title">{study.resultHeadline}</h1>
          <p className="rd-page-hero__text">{study.summary}</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 22px",
              paddingTop: 24,
              color: "#ffffff",
              fontSize: 14,
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <MapPin size={15} aria-hidden="true" />
              {study.client}, {study.location}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <Clock size={15} aria-hidden="true" />
              {study.duration} engagement
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              {study.platform.join(" and ")}
            </span>
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-container">
          <div className="rd-split" style={{ alignItems: "start" }}>
            <div>
              <span className="rd-eyebrow">The challenge</span>
              <h2 className="rd-h2" style={{ padding: "8px 0 16px" }}>
                What was not working
              </h2>
              <p className="rd-lead">{study.challenge}</p>

              <span className="rd-mini-label" style={{ paddingTop: 30 }}>
                The approach
              </span>
              <ul className="rd-check-list" style={{ marginBottom: 30 }}>
                {study.approach.map((item) => (
                  <li key={item}>
                    <Check size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <span className="rd-mini-label">The execution</span>
              <ul className="rd-check-list">
                {study.execution.map((item) => (
                  <li key={item}>
                    <Check size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rd-split__media" style={{ aspectRatio: "4 / 4.4" }}>
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--silver">
        <div className="rd-container">
          <div className="rd-titlepage">
            <span className="rd-eyebrow">The results</span>
            <h2 className="rd-h2">{study.resultHeadline}</h2>
            <p>Measured over the course of the engagement.</p>
          </div>
          <div className="rd-stats">
            {study.metrics.map((metric) => (
              <div className="rd-stat" key={metric.label}>
                <div className="rd-stat__value">{metric.value}</div>
                <div className="rd-stat__label">{metric.label}</div>
                <p className="rd-stat__note">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--tight">
        <div className="rd-container">
          <figure
            style={{
              maxWidth: 820,
              margin: "0 auto",
              background: "#ffffff",
              border: "1px solid #e6e1e1",
              borderRadius: 22,
              padding: "40px 36px",
              textAlign: "center",
            }}
          >
            <Quote size={30} style={{ color: "#0891f8", opacity: 0.6 }} aria-hidden="true" />
            <blockquote style={{ margin: "16px 0 20px" }}>
              <p
                style={{
                  fontFamily: "'Baloo Chettan', cursive",
                  fontSize: 23,
                  lineHeight: 1.5,
                  color: "#272f43",
                }}
              >
                {`"${study.quote.text}"`}
              </p>
            </blockquote>
            <figcaption style={{ fontSize: 14, color: "#666666" }}>
              <strong style={{ color: "#272f43" }}>{study.quote.author}</strong>, {study.quote.role}
            </figcaption>
          </figure>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
              marginTop: 40,
            }}
          >
            <Link href="/work" className="rd-link-arrow">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to all case studies
            </Link>
            <div className="rd-meta">
              Services used, {study.services.join(", ")}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="rd-section rd-section--tight rd-section--silver">
          <div className="rd-container">
            <div className="rd-titlepage" style={{ paddingBottom: 34 }}>
              <span className="rd-eyebrow">More work</span>
              <h2 className="rd-h2">Other projects you might like</h2>
            </div>
            <div className="rd-grid-2">
              {related.map((item) => (
                <article className="rd-card" key={item.slug} style={{ flexDirection: "row" }}>
                  <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    <span className="rd-tag">{item.industry}</span>
                    <h3 className="rd-h3">{item.resultHeadline}</h3>
                    <Link href={`/work/${item.slug}`} className="rd-link-arrow" style={{ marginTop: "auto" }}>
                      Read Case Study
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        eyebrow="Book a call"
        title="Let us build the same kind of result for your brand."
      />
    </>
  );
}
