import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import PricingTabs from "@/components/PricingTabs";
import CustomPackageForm from "@/components/CustomPackageForm";
import CtaBand from "@/components/CtaBand";
import { plans } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Monthly social media and digital marketing packages for Kenyan brands. Starter from KES 45,000, Growth from KES 95,000 and Premium from KES 185,000.",
};

const included = [
  "A written scope before work starts",
  "Fixed monthly fee, invoiced in Kenya shillings",
  "No lock in beyond the first three months",
  "You own every account, asset and pixel",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward packages, no hidden line items"
        text="Three monthly packages for social media management and growth. Choose one, or ask us to build a custom scope around what you actually need."
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Pricing" }]}
      />

      <section className="rd-section">
        <div className="rd-container">
          <PricingTabs />

          <div className="rd-grid-4" style={{ marginTop: 54 }}>
            {included.map((item) => (
              <div
                key={item}
                style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14.5, lineHeight: 1.6 }}
              >
                <Check size={17} style={{ color: "#0891f8", flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--silver">
        <div className="rd-container">
          <div className="rd-titlepage">
            <span className="rd-eyebrow">Custom package</span>
            <h2 className="rd-h2">Need something that is not on the list?</h2>
            <p>
              A single launch campaign, a training session for your in house team, or a
              mix of services across two brands. Tell us what you need and we will price it.
            </p>
          </div>

          <div className="rd-form-card" style={{ maxWidth: 780, margin: "0 auto" }}>
            <CustomPackageForm />
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--tight">
        <div className="rd-container">
          <div className="rd-titlepage" style={{ paddingBottom: 36 }}>
            <span className="rd-eyebrow">Compare at a glance</span>
            <h2 className="rd-h2">What changes between packages</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#8a8f99",
                      borderBottom: "2px solid #e6e1e1",
                    }}
                  >
                    Package
                  </th>
                  {["Monthly fee", "Platforms", "Posting", "Ad budget managed", "Reporting"].map((heading) => (
                    <th
                      key={heading}
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        fontSize: 13,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#8a8f99",
                        borderBottom: "2px solid #e6e1e1",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.key}>
                    <td style={{ padding: "16px", borderBottom: "1px solid #eceef2", fontWeight: 700, color: "#272f43" }}>
                      {plan.name}
                    </td>
                    <td style={{ padding: "16px", borderBottom: "1px solid #eceef2" }}>{plan.price}</td>
                    <td style={{ padding: "16px", borderBottom: "1px solid #eceef2" }}>{plan.platforms}</td>
                    <td style={{ padding: "16px", borderBottom: "1px solid #eceef2" }}>{plan.posts}</td>
                    <td style={{ padding: "16px", borderBottom: "1px solid #eceef2" }}>{plan.ads}</td>
                    <td style={{ padding: "16px", borderBottom: "1px solid #eceef2" }}>{plan.reporting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Free 30 minute strategy call"
        title="Still comparing? Let us recommend the right package."
      />
    </>
  );
}
