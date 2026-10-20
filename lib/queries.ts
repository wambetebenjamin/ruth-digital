import { blogPosts, caseStudies, type BlogPost, type CaseStudy } from "./content";

export function getCaseStudies(filters?: {
  industry?: string | null;
  platform?: string | null;
}): CaseStudy[] {
  const industry = filters?.industry?.trim().toLowerCase();
  const platform = filters?.platform?.trim().toLowerCase();

  return caseStudies.filter((study) => {
    const industryMatch =
      !industry ||
      industry === "all" ||
      study.industry.toLowerCase() === industry;
    const platformMatch =
      !platform ||
      platform === "all" ||
      study.platform.some((item) => item.toLowerCase() === platform);
    return industryMatch && platformMatch;
  });
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

export function getPosts(filters?: { category?: string | null }): BlogPost[] {
  const category = filters?.category?.trim().toLowerCase();
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  if (!category || category === "all") return sorted;
  return sorted.filter((post) => post.category.toLowerCase() === category);
}

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function latestPosts(count = 3): BlogPost[] {
  return getPosts().slice(0, count);
}

export function relatedPosts(currentSlug: string, count = 2): BlogPost[] {
  const current = getPost(currentSlug);
  if (!current) return getPosts().slice(0, count);
  const sameCategory = getPosts({ category: current.category }).filter(
    (post) => post.slug !== currentSlug,
  );
  const others = getPosts().filter(
    (post) => post.slug !== currentSlug && post.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}
