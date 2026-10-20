import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  Mail,
  Search,
  Share2,
  Target,
  Users,
  BarChart3,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Motion";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, content creation, Meta and Google ads, email marketing, SEO and influencer outreach for Kenyan brands. Pricing from KES 30,000 per month.",
};

const iconMap = {
  share: Share2,
  camera: Camera,
  target: Target,
  mail: Mail,
  search: Search,
  users: Users,
} as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your brand needs online, under one roof"
        text="Six services that work together. Start with one, or hand us the whole channel and get a team that plans, produces, publishes and reports."
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Services" }]}
      />

      <section className="rd-section rd-section--tight">
        <div className="rd-container">
          <div className="rd-industries" style={{ justifyContent: "flex-start" }}>
            {services.map((service) => (
              <a key={service.slug} href={`#${service.slug}`} className="rd-industry">
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="rd-container">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] ?? BarChart3;
          return (
            <Reveal key={service.slug} delay={index === 0 ? 0 : 0.05}>
              <section className="rd-service" id={service.slug} aria-labelledby={`${service.slug}-title`}>
                <div className="rd-service__head">
                  <div>
                    <div className="rd-icon-box" aria-hidden="true">
                      <Icon size={24} />
                    </div>
                    <h2 className="rd-h2" id={`${service.slug}-title`} style={{ padding: "18px 0 12px" }}>
                      {service.title}
                    </h2>
                    <p className="rd-lead" style={{ paddingBottom: 16 }}>
                      {service.summary}
                    </p>
                    <p style={{ fontSize: 15.5, lineHeight: 1.8, paddingBottom: 26 }}>
                      {service.intro}
                    </p>

                    <div className="rd-grid-2">
                      <div>
                        <span className="rd-mini-label">What is included</span>
                        <ul className="rd-check-list">
                          {service.includes.map((item) => (
                            <li key={item}>
                              <Check size={17} aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="rd-mini-label">Who it is for</span>
                        <ul className="rd-check-list" style={{ marginBottom: 26 }}>
                          {service.audience.map((item) => (
                            <li key={item}>
                              <Check size={17} aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <span className="rd-mini-label">How it works</span>
                        <ol style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                          {service.process.map((step, stepIndex) => (
                            <li key={step.title} style={{ display: "flex", gap: 12 }}>
                              <span
                                aria-hidden="true"
                                style={{
                                  flexShrink: 0,
                                  width: 26,
                                  height: 26,
                                  borderRadius: 8,
                                  background: "rgba(8,145,248,0.12)",
                                  color: "#0891f8",
                                  fontSize: 13,
                                  fontWeight: 700,
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {stepIndex + 1}
                              </span>
                              <span>
                                <strong style={{ color: "#272f43", fontSize: 14.5 }}>
                                  {step.title}
                                </strong>
                                <span
                                  style={{
                                    display: "block",
                                    fontSize: 14,
                                    lineHeight: 1.65,
                                    color: "#666666",
                                  }}
                                >
                                  {step.detail}
                                </span>
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>

                  <aside className="rd-service__aside">
                    <span className="rd-mini-label">Pricing starts from</span>
                    <div className="rd-service__price">
                      {service.priceFrom}
                      <span>{service.priceNote}</span>
                    </div>
                    <hr className="rd-divider" style={{ margin: "22px 0" }} />
                    <p style={{ fontSize: 14, lineHeight: 1.7, paddingBottom: 20 }}>
                      {`Every engagement is scoped after the first call. You get a written scope, a fixed monthly fee and no surprise invoices.`}
                    </p>
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="rd-btn rd-btn--brand"
                      style={{ width: "100%" }}
                    >
                      Get Started
                      <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                  </aside>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>

      <section className="rd-section rd-section--silver rd-section--tight">
        <div className="rd-container">
          <div className="rd-titlepage" style={{ paddingBottom: 30 }}>
            <span className="rd-eyebrow">Not sure where to start?</span>
            <h2 className="rd-h2">We will tell you what to fix first</h2>
            <p>
              Most businesses do not need everything at once. Book a call and we will
              recommend the smallest set of work that moves your numbers.
            </p>
          </div>
          <div className="rd-center">
            <Link href="/pricing" className="rd-btn rd-btn--brand">
              Compare packages
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
