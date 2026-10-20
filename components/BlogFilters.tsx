"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PostCard } from "./Cards";
import { blogCategories, type BlogPost } from "@/lib/content";

export default function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () => (category === "All" ? posts : posts.filter((post) => post.category === category)),
    [category, posts],
  );

  return (
    <>
      <div className="rd-filter-group">
        <span className="rd-filter-group__label">Filter by category</span>
        <div className="rd-filters">
          <button
            type="button"
            className={`rd-filter${category === "All" ? " is-active" : ""}`}
            onClick={() => setCategory("All")}
            aria-pressed={category === "All"}
          >
            All articles
          </button>
          {blogCategories.map((item) => (
            <button
              key={item}
              type="button"
              className={`rd-filter${category === item ? " is-active" : ""}`}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="rd-meta" style={{ padding: "18px 0 26px" }}>
        Showing {filtered.length} of {posts.length} articles
      </p>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={category}
          className="rd-grid-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="rd-empty">
          <h3>Nothing published in this category yet</h3>
          <p>Try another category, or subscribe through the strategy call form and we will send new articles by email.</p>
        </div>
      )}
    </>
  );
}
