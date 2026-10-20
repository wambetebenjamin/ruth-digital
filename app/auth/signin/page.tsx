import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { GoogleAuthButton } from "@/components/AuthForms";

export const metadata: Metadata = {
  title: "Client sign in",
  description: "Sign in to your Ruth Digital client account with Google.",
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return (
    <>
      <PageHero
        eyebrow="Client area"
        title="Sign in to your Ruth Digital account"
        text="Access your monthly reports, content calendars and campaign dashboards."
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Sign in" }]}
      />

      <section className="rd-section">
        <div className="rd-container">
          <div className="rd-form-card" style={{ maxWidth: 520, margin: "0 auto" }}>
            <h2 className="rd-h2" style={{ paddingBottom: 8 }}>
              Welcome back
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, paddingBottom: 22 }}>
              {`Sign in with the Google account your reports are sent to. If that email has changed, message us on WhatsApp and we will update it.`}
            </p>

            <GoogleAuthButton action="signin" />

            <hr className="rd-divider" style={{ margin: "26px 0" }} />

            <p className="rd-form-note">
              {`Do not have an account yet? `}
              <Link href="/auth/signup" style={{ color: "#0891f8", fontWeight: 700 }}>
                Request client access
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
