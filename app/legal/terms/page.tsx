import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply to Ruth Digital engagements, website use and proposals.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="1 October 2026"
      intro="These terms apply to your use of this website and set out the basis on which Ruth Digital provides services. A signed proposal or statement of work takes precedence where it differs from this page."
      sections={[
        {
          heading: "Using this website",
          paragraphs: [
            "The content on this site is provided for general information. You may read, share and reference it with attribution. You may not copy it wholesale, resell it, or use our brand name and marks without written permission.",
          ],
        },
        {
          heading: "Proposals and engagements",
          bullets: [
            "Work begins once a written proposal is accepted and the first invoice is settled.",
            "Engagements run monthly with a minimum initial term of three months unless the proposal says otherwise.",
            "Fees are quoted in Kenya shillings and are exclusive of VAT where VAT applies.",
            "Advertising spend is paid by the client directly to Meta, Google or another platform unless we agree otherwise in writing.",
          ],
        },
        {
          heading: "Client responsibilities",
          bullets: [
            "Provide timely access to accounts, brand assets and product information.",
            "Nominate one person to approve content and respond within two working days.",
            "Ensure that any claims, prices and offers you ask us to publish are accurate and lawful.",
            "Hold the rights to any imagery, footage or music you supply to us.",
          ],
        },
        {
          heading: "Our responsibilities",
          paragraphs: [
            "We will deliver the services in the agreed scope with reasonable skill and care, keep you informed about anything that affects delivery, and report honestly on performance, including months that underperform.",
          ],
        },
        {
          heading: "Results and expectations",
          paragraphs: [
            "Marketing performance depends on factors outside our control, including platform policy changes, seasonality, pricing and product quality. We commit to the process, the reporting and the standards described in your proposal. We cannot guarantee a specific number of followers, sales or return on ad spend.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "On full payment, you own the final creative assets we produce for your brand. We keep ownership of our templates, working files and internal tools, and we may show non confidential elements of the work in our portfolio unless you ask us not to.",
          ],
        },
        {
          heading: "Pausing and ending an engagement",
          bullets: [
            "Either party may end the engagement with thirty days written notice after the initial term.",
            "Fees for work already delivered remain payable.",
            "On request we will hand over account access, creative files and documentation within ten working days.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "To the extent permitted by Kenyan law, our total liability for any claim connected with an engagement is limited to the fees paid in the three months before the claim. We are not liable for indirect or consequential loss.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            `These terms are governed by the laws of Kenya. Any dispute will first be discussed in good faith between the parties, and if unresolved, referred to the courts of Kenya. Contact ${site.email} with any questions about these terms.`,
          ],
        },
      ]}
    />
  );
}
