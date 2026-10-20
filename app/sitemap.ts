import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { blogPosts, caseStudies, services } from "@/lib/content";
import { legalLinks } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/work", priority: 0.9 },
    { path: "/pricing", priority: 0.9 },
    { path: "/blog", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
  ].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services#${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workRoutes = caseStudies.map((study) => ({
    url: `${siteUrl}/work/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const legalRoutes = legalLinks.map((link) => ({
    url: `${siteUrl}${link.href}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...postRoutes, ...legalRoutes];
}
