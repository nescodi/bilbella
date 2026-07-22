import type { Metadata } from "next";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import PageHero from "@/components/PageHero/PageHero";
import Section from "@/components/Section/Section";
import FadeIn from "@/components/FadeIn/FadeIn";
import { company } from "@/components/config";
import ContactForm from "./ContactForm";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${company.fullName} for a tailored security consultation. Reach us by phone, email, or WhatsApp.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Tell us what you need protected and we'll take it from there."
        imageLabel={`Contact — ${company.name} Office`}
        src="/images/contact.png"
      />

      <Section tone="light">
        <div className={styles.grid}>
          <FadeIn>
            <div className={styles.details}>
              <h2 className={styles.detailsHeading}>Reach Us Directly</h2>
              <a href={company.phoneHref} className={styles.detailItem}>
                <FiPhone />
                {company.phone}
              </a>
              <a href={company.emailHref} className={styles.detailItem}>
                <FiMail />
                {company.email}
              </a>
              <span className={styles.detailItem}>
                <FiMapPin />
                {company.address}
              </span>

              <iframe
                className={styles.map}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  company.address,
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${company.fullName} location map`}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
