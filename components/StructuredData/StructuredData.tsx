import { company, socialLinks } from "@/components/config";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.fullName,
    alternateName: company.name,
    image: `${company.siteUrl}/logo.png`,
    logo: `${company.siteUrl}/logo.png`,
    url: company.siteUrl,
    telephone: company.phoneHref.replace("tel:", ""),
    email: company.email,
    description: `${company.fullName} — ${company.tagline}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.addressLocality,
      addressRegion: company.addressRegion,
      addressCountry: company.addressCountry,
    },
    ...(socialLinks.length > 0 && {
      sameAs: socialLinks.map((social) => social.href),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
