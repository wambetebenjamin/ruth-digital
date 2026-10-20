import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ruth Digital collects, uses and protects personal data under the Kenya Data Protection Act 2019.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 October 2026"
      intro="Ruth Digital collects a small amount of personal data in order to reply to enquiries and run client engagements. This policy explains what we collect and the rights you have under the Kenya Data Protection Act 2019."
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `${site.name} is a social media management and digital marketing agency based at ${site.addressLine}. For the purposes of the Kenya Data Protection Act 2019, we are the data controller for the personal data described in this policy.`,
          ],
        },
        {
          heading: "What we collect",
          bullets: [
            "Contact details you give us, such as your name, company, email address and phone or WhatsApp number.",
            "The content of your enquiry, including your website, current ad budget range, main platform and goals.",
            "Client engagement data, such as campaign reports, account handles and content approvals.",
            "Technical data, such as your browser type and the pages you visit, collected in aggregate.",
            "Cookie preferences, stored in your browser under the key ruth_digital_consent.",
          ],
        },
        {
          heading: "Why we use it",
          bullets: [
            "To reply to your enquiry and arrange a strategy call.",
            "To deliver services under a client agreement and produce monthly reports.",
            "To keep records required for accounting and tax purposes in Kenya.",
            "To improve this website and understand which articles are useful.",
            "To send marketing email, only where you have asked us to.",
          ],
        },
        {
          heading: "Legal basis",
          paragraphs: [
            "We rely on your consent for marketing communications and optional cookies, on the performance of a contract for client work, and on our legitimate interest in responding to enquiries and keeping our records accurate.",
          ],
        },
        {
          heading: "Who we share it with",
          paragraphs: [
            "We share personal data only with the processors that make our work possible. These include our email provider, our hosting provider Vercel, Google for reCAPTCHA and analytics, and Meta or Google where you ask us to manage your advertising accounts. We do not sell personal data.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "Enquiries that do not become engagements are kept for twenty four months and then deleted. Client records are kept for the duration of the engagement and for seven years afterwards, as required for financial records in Kenya.",
          ],
        },
        {
          heading: "Your rights",
          bullets: [
            "Ask for a copy of the personal data we hold about you.",
            "Ask us to correct anything that is inaccurate.",
            "Ask us to delete data we no longer need.",
            "Object to direct marketing at any time.",
            "Withdraw consent for optional cookies using the cookie preferences panel.",
            "Complain to the Office of the Data Protection Commissioner in Kenya.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "Data is transmitted over encrypted connections and access is limited to team members who need it. Forms on this site are protected by Google reCAPTCHA v3, and the secret key is stored only on the server.",
          ],
        },
      ]}
    />
  );
}
