import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import LegalContent from "@/components/LegalContent/LegalContent";
import { company } from "@/components/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read the terms of service governing your use of the ${company.fullName} website.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        imageLabel="Terms of Service — Document"
      />

      <LegalContent updatedAt="July 22, 2026">
        <p>
          These Terms of Service govern your use of this website, operated
          by {company.fullName}{" "}
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By using this
          website, you agree to these terms.
        </p>

        <h2>Use of This Website</h2>
        <p>
          This website is provided for informational purposes, to describe
          the security services offered by {company.fullName} and to allow
          you to contact us. You agree to use this website only for lawful
          purposes.
        </p>

        <h2>No Guarantee of Service Availability</h2>
        <p>
          Nothing on this website constitutes a binding contract for
          security services. Engaging {company.name} for any service is
          subject to a separate agreement between you and {company.name},
          following direct communication with our team.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          The {company.fullName} name, logo, and all content on this
          website are the property of {company.fullName} and may not be
          used, copied, or reproduced without our permission.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website may direct you to third-party services, such as
          WhatsApp, to facilitate communication. We are not responsible for
          the content, policies, or practices of any third-party service.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          This website and its content are provided &quot;as is&quot;
          without warranties of any kind. To the fullest extent permitted by
          law, {company.fullName} shall not be liable for any damages
          arising from your use of this website.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the Federal Republic of
          Nigeria.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Any
          changes will be posted on this page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about these Terms of Service, please contact
          us at <a href={company.emailHref}>{company.email}</a> or{" "}
          <a href={company.phoneHref}>{company.phone}</a>.
        </p>
      </LegalContent>
    </>
  );
}
