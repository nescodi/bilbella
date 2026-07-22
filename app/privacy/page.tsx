import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import LegalContent from "@/components/LegalContent/LegalContent";
import { company } from "@/components/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read the ${company.fullName} privacy policy to understand how we handle information submitted through our website.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        imageLabel="Privacy Policy — Document"
      />

      <LegalContent updatedAt="July 22, 2026">
        <p>
          {company.fullName}{" "}
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your
          privacy. This Privacy Policy explains
          what information we collect through this website and how we use
          it.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you use the contact form on this website, we collect the
          information you provide: your name, phone number, service of
          interest, and any message you choose to include. We do not use
          cookies, analytics, or tracking technologies on this website.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information you submit to respond to your enquiry,
          connect with you regarding our security services, and provide any
          services you request from us.
        </p>

        <h2>How We Share Your Information</h2>
        <p>
          Information submitted through our contact form is sent directly to
          us via WhatsApp. We do not store this information on our own
          servers, and we do not sell, rent, or share your information with
          third parties for marketing purposes.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our contact form redirects to WhatsApp to facilitate communication.
          Your use of WhatsApp is subject to WhatsApp&apos;s own privacy
          policy and terms, which we do not control.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          This website is not directed at children, and we do not knowingly
          collect information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes
          will be posted on this page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us
          at{" "}
          <a href={company.emailHref}>{company.email}</a> or{" "}
          <a href={company.phoneHref}>{company.phone}</a>.
        </p>
      </LegalContent>
    </>
  );
}
