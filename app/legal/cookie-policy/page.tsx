import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "The cookies Ruth Digital uses, what each category does, and how to change your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="1 October 2026"
      intro="This site uses a small number of cookies and similar storage. You choose which optional categories run, and your choice is remembered in your browser under the key ruth_digital_consent."
      sections={[
        {
          heading: "What a cookie is",
          paragraphs: [
            "A cookie is a small file stored by your browser when you visit a site. Some are essential for the site to work. Others help us understand how the site is used or measure our marketing. Similar technologies, such as local storage, are covered by this policy too.",
          ],
        },
        {
          heading: "Necessary cookies",
          paragraphs: [
            "These are always on because the site cannot work without them. They cover security checks such as reCAPTCHA, page routing, form protection and remembering your cookie choice. They do not build a profile of you.",
          ],
        },
        {
          heading: "Functional cookies",
          paragraphs: [
            "If you allow them, these remember preferences such as whether you muted the site voice tour, so the experience is consistent on your next visit.",
          ],
        },
        {
          heading: "Analytics cookies",
          paragraphs: [
            "We use Vercel Analytics to see which pages and articles are read. This data is aggregated and used to decide what to write more of. No advertising profile is built from it.",
          ],
        },
        {
          heading: "Marketing cookies",
          paragraphs: [
            "Where you allow them, we measure campaign performance so that we do not keep paying for advertising that does not work. Advertising platforms such as Meta and Google may set their own cookies if you arrive from one of our campaigns.",
          ],
        },
        {
          heading: "Changing your choice",
          bullets: [
            "Open the cookie banner or clear the key ruth_digital_consent from your browser storage to see the banner again.",
            "Use your browser settings to block or delete cookies at any time.",
            "Blocking necessary cookies may stop forms and sign in from working.",
          ],
        },
        {
          heading: "Third parties",
          paragraphs: [
            `Google reCAPTCHA, Vercel Analytics and, where you sign in, Google OAuth each process limited technical data. Their own privacy notices apply in addition to ours. Questions can go to ${site.email}.`,
          ],
        },
      ]}
    />
  );
}
