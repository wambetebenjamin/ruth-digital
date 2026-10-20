import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { BlogPost, CaseStudy } from "@/lib/content";
import { HoverLift } from "./Motion";

export function CaseStudyCard({
  study,
  priority = false,
  ctaLabel = "Read Case Study",
}: {
  study: CaseStudy;
  priority?: boolean;
  ctaLabel?: string;
}) {
  return (
    <HoverLift className="rd-card-wrap">
      <article className="rd-card">
        <div className="rd-card__media">
          <Image
            src={study.image}
            alt={study.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 33vw"
            priority={priority}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="rd-card__body">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <span className="rd-tag">{study.industry}</span>
            <span className="rd-tag rd-tag--ink">{study.platform.join(" and ")}</span>
          </div>
          <h3 className="rd-h3">{study.resultHeadline}</h3>
          <p style={{ fontSize: 14.5, lineHeight: 1.7 }}>{study.challenge}</p>
          <div className="rd-card__footer">
            <Link
              href={`/work/${study.slug}`}
              className="rd-btn rd-btn--sm rd-btn--brand"
              style={{ width: "100%" }}
            >
              {ctaLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </HoverLift>
  );
}

export function PostCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <article className="rd-card">
      <div className="rd-card__media">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 33vw"
          priority={priority}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="rd-card__body">
        <div className="rd-meta">
          <span className="rd-tag">{post.category}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <CalendarDays size={14} aria-hidden="true" />
            <time dateTime={post.date}>{post.displayDate}</time>
          </span>
        </div>
        <h3 className="rd-article-card__title">{post.title}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.7 }}>{post.excerpt}</p>
        <div className="rd-meta" style={{ marginTop: 4 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Clock size={14} aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
        <div className="rd-card__footer">
          <Link href={`/blog/${post.slug}`} className="rd-link-arrow">
            Read More
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
