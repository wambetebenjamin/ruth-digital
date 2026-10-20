import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { blogPosts } from "@/lib/content";
import { getPost, relatedPosts } from "@/lib/queries";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = relatedPosts(slug, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Ruth Digital" },
    description: post.excerpt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="rd-page-hero">
        <div className="rd-container">
          <nav aria-label="Breadcrumb" className="rd-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span>{post.category}</span>
          </nav>
          <span className="rd-eyebrow">{post.category}</span>
          <h1 className="rd-page-hero__title">{post.title}</h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 22px",
              color: "#ffffff",
              fontSize: 14,
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <User size={15} aria-hidden="true" />
              {post.author}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <CalendarDays size={15} aria-hidden="true" />
              <time dateTime={post.date}>{post.displayDate}</time>
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <Clock size={15} aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      <article className="rd-section">
        <div className="rd-container">
          <div className="rd-prose">
            <div
              style={{
                position: "relative",
                aspectRatio: "16 / 9",
                borderRadius: 20,
                overflow: "hidden",
                marginBottom: 36,
                background: "#f9f9f9",
              }}
            >
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 991px) 100vw, 740px"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="rd-body-copy">
              {post.body.map((block, index) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={index} className="rd-h2" style={{ fontSize: 27, padding: "14px 0 14px" }}>
                      {block.content as string}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3 key={index} className="rd-h3" style={{ padding: "10px 0 12px" }}>
                      {block.content as string}
                    </h3>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={index}>
                      {(block.content as string[]).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={index}>{block.content as string}</p>;
              })}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                marginTop: 40,
                paddingTop: 26,
                borderTop: "1px solid #e6e1e1",
              }}
            >
              <Link href="/blog" className="rd-link-arrow">
                <ArrowLeft size={16} aria-hidden="true" />
                Back to the blog
              </Link>
              <span className="rd-meta">
                Written by {post.author}, {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="rd-section rd-section--tight rd-section--silver">
          <div className="rd-container">
            <div className="rd-titlepage" style={{ paddingBottom: 30 }}>
              <span className="rd-eyebrow">Keep reading</span>
              <h2 className="rd-h2">Related articles</h2>
            </div>
            <div className="rd-grid-2">
              {related.map((item) => (
                <article
                  key={item.slug}
                  className="rd-card"
                  style={{ padding: 28, gap: 10 }}
                >
                  <span className="rd-tag">{item.category}</span>
                  <h3 className="rd-h3">{item.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.7 }}>{item.excerpt}</p>
                  <div style={{ marginTop: "auto", paddingTop: 12 }}>
                    <Link href={`/blog/${item.slug}`} className="rd-link-arrow">
                      Read More
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
        eyebrow="Free 30 minute strategy call"
        title="Want this applied to your own accounts?"
      />
    </>
  );
}
