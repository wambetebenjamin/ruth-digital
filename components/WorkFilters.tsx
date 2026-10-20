"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CaseStudyCard } from "./Cards";
import { industries, type CaseStudy } from "@/lib/content";

const platforms = ["All", "Instagram", "Facebook", "TikTok", "LinkedIn", "Google"];

export default function WorkFilters({ studies }: { studies: CaseStudy[] }) {
  const [industry, setIndustry] = useState("All");
  const [platform, setPlatform] = useState("All");

  const filtered = useMemo(
    () =>
      studies.filter((study) => {
        const industryMatch = industry === "All" || study.industry === industry;
        const platformMatch = platform === "All" || study.platform.includes(platform);
        return industryMatch && platformMatch;
      }),
    [industry, platform, studies],
  );

  return (
    <>
      <div className="rd-filter-group">
        <div>
          <span className="rd-filter-group__label">Filter by industry</span>
          <div className="rd-filters" style={{ marginTop: 10 }}>
            <button
              type="button"
              className={`rd-filter${industry === "All" ? " is-active" : ""}`}
              onClick={() => setIndustry("All")}
              aria-pressed={industry === "All"}
            >
              All industries
            </button>
            {industries.map((item) => (
              <button
                key={item}
                type="button"
                className={`rd-filter${industry === item ? " is-active" : ""}`}
                onClick={() => setIndustry(item)}
                aria-pressed={industry === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="rd-filter-group__label">Filter by platform</span>
          <div className="rd-filters" style={{ marginTop: 10 }}>
            {platforms.map((item) => (
              <button
                key={item}
                type="button"
                className={`rd-filter${platform === item ? " is-active" : ""}`}
                onClick={() => setPlatform(item)}
                aria-pressed={platform === item}
              >
                {item === "All" ? "All platforms" : item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p aria-live="polite" className="rd-meta" style={{ padding: "18px 0 26px" }}>
        Showing {filtered.length} of {studies.length} case studies
      </p>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={`${industry}-${platform}`}
          className="rd-grid-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {filtered.map((study) => (
            <CaseStudyCard key={study.slug} study={study} ctaLabel="Read More" />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="rd-empty">
          <h3>No case studies match that combination yet</h3>
          <p>
            Try a different industry or platform, or tell us what you are looking for
            and we will send a relevant example directly.
          </p>
        </div>
      )}
    </>
  );
}
