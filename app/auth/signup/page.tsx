import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { AccountRequestForm, GoogleAuthButton } from "@/components/AuthForms";

export const metadata: Metadata = {
  title: "Create a client account",
  description: "Create your Ruth Digital client account with Google.",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return (
    <>
      <PageHero
        eyebrow="Client area"
        title="Create your client account"
        text="Client accounts are set up by our team so that your reports and assets stay in the right place. Sign up with Google, or send us a request below."
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Sign up" }]}
      />

      <section className="rd-section">
        <div className="rd-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              maxWidth: 980,
              margin: "0 auto",
            }}
            className="rd-auth-grid"
          >
            <div className="rd-form-card">
              <h2 className="rd-h2" style={{ paddingBottom: 8 }}>
                Sign up with Google
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, paddingBottom: 22 }}>
                Use the Google account you want linked to your reports. We receive only
                your name and email address.
              </p>
              <GoogleAuthButton action="signup" />
              <hr className="rd-divider" style={{ margin: "24px 0" }} />
              <p className="rd-form-note">
                {`Already have an account? `}
                <Link href="/auth/signin" style={{ color: "#0891f8", fontWeight: 700 }}>
                  Sign in instead
                </Link>
                .
              </p>
            </div>

            <div className="rd-form-card">
              <h2 className="rd-h2" style={{ paddingBottom: 8 }}>
                Request access
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, paddingBottom: 22 }}>
                Not a client yet? Send a request and we will set up access once your
                engagement starts.
              </p>
              <AccountRequestForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .rd-auth-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
