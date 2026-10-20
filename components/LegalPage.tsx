import PageHero from "./PageHero";
import { site } from "@/lib/site";

type Section = { heading: string; paragraphs?: string[]; bullets?: string[] };

export default function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        text={intro}
        breadcrumb={[
          { href: "/", label: "Home" },
          { label: title },
        ]}
      />

      <section className="rd-section">
        <div className="rd-container">
          <div className="rd-prose">
            <p className="rd-meta" style={{ paddingBottom: 24 }}>
              Last updated {updated}
            </p>

            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="rd-h2" style={{ fontSize: 26, padding: "10px 0 14px" }}>
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <h2 className="rd-h2" style={{ fontSize: 26, padding: "10px 0 14px" }}>
              Contact us about this policy
            </h2>
            <p>
              {`Questions about this policy can go to ${site.email} or WhatsApp ${site.phoneDisplay}. Our office is at ${site.addressLine}.`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
