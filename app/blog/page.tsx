import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogFilters from "@/components/BlogFilters";
import CtaBand from "@/components/CtaBand";
import { getPosts } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Marketing blog",
  description:
    "Practical marketing writing for Kenyan brands, covering social media, SEO, paid ads, strategy and the local market.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <PageHero
        eyebrow="The blog"
        title="Marketing notes for people running real Kenyan businesses"
        text="No theory for its own sake. These are the things we test on client accounts, written up so you can use them yourself."
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Blog" }]}
      />

      <section className="rd-section">
        <div className="rd-container">
          <BlogFilters posts={posts} />
        </div>
      </section>

      <CtaBand
        eyebrow="Rather we did it for you?"
        title="Book a free strategy call and skip the trial and error."
      />
    </>
  );
}
