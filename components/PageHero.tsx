import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { href?: string; label: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  breadcrumb?: Crumb[];
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, text, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="rd-page-hero">
      <div className="rd-container">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="rd-breadcrumb">
            {breadcrumb.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
                {index < breadcrumb.length - 1 && <ChevronRight size={13} aria-hidden="true" />}
              </span>
            ))}
          </nav>
        )}
        <span className="rd-eyebrow">{eyebrow}</span>
        <h1 className="rd-page-hero__title">{title}</h1>
        {text && <p className="rd-page-hero__text">{text}</p>}
        {children}
      </div>
    </section>
  );
}
