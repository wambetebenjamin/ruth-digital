"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BarChart3, Check, Megaphone, Send, Share2, Star } from "lucide-react";
import { plans } from "@/lib/content";

export default function PricingTabs() {
  const [active, setActive] = useState(plans[1].key);
  const plan = plans.find((item) => item.key === active) ?? plans[0];

  return (
    <>
      <div className="rd-center">
        <div className="rd-tabs" role="tablist" aria-label="Pricing packages">
          {plans.map((item) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              id={`tab-${item.key}`}
              aria-selected={active === item.key}
              aria-controls={`panel-${item.key}`}
              className={`rd-tab${active === item.key ? " is-active" : ""}`}
              onClick={() => setActive(item.key)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={plan.key}
          id={`panel-${plan.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${plan.key}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.34, ease: [0.22, 0.61, 0.36, 1] }}
          className="rd-plan"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h2 className="rd-h2" style={{ padding: 0 }}>
                {plan.name}
              </h2>
              {plan.popular && (
                <span className="rd-tag rd-tag--mint">
                  <Star size={13} aria-hidden="true" />
                  Most popular
                </span>
              )}
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, padding: "10px 0 18px" }}>{plan.tagline}</p>
            <div className="rd-plan__price">
              {plan.price} <small>{plan.priceNote}</small>
            </div>

            <div className="rd-plan__specs">
              <div className="rd-plan__spec">
                <Share2 size={17} aria-hidden="true" />
                <span>
                  <strong>Platforms, </strong>
                  {plan.platforms}
                </span>
              </div>
              <div className="rd-plan__spec">
                <Check size={17} aria-hidden="true" />
                <span>
                  <strong>Post frequency, </strong>
                  {plan.posts}
                </span>
              </div>
              <div className="rd-plan__spec">
                <Megaphone size={17} aria-hidden="true" />
                <span>
                  <strong>Ad budget management, </strong>
                  {plan.ads}
                </span>
              </div>
              <div className="rd-plan__spec">
                <BarChart3 size={17} aria-hidden="true" />
                <span>
                  <strong>Reporting, </strong>
                  {plan.reporting}
                </span>
              </div>
            </div>

            <Link
              href={`/contact?package=${plan.key}`}
              className="rd-btn rd-btn--brand"
              style={{ width: "100%" }}
            >
              Get Started
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div>
            <span className="rd-mini-label">What is in {plan.name}</span>
            <ul className="rd-check-list">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="rd-form-note" style={{ paddingTop: 20 }}>
              {`All packages are billed monthly in Kenya shillings. Ad spend is paid directly to Meta and Google from your own account, so you keep ownership of the data.`}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <p className="rd-meta rd-center" style={{ paddingTop: 24 }}>
        <Send size={14} aria-hidden="true" />
        {`Not seeing the right fit? Use the custom package form below.`}
      </p>
    </>
  );
}
