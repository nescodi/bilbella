import type { Metadata } from "next";
import { FiCheck, FiClipboard, FiShield, FiVideo } from "react-icons/fi";
import { FaAnchor } from "react-icons/fa";
import PageHero from "@/components/PageHero/PageHero";
import Section from "@/components/Section/Section";
import ImagePlaceholder from "@/components/ImagePlaceholder/ImagePlaceholder";
import FadeIn from "@/components/FadeIn/FadeIn";
import CtaBand from "@/components/CtaBand/CtaBand";
import { company } from "@/components/config";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore ${company.fullName}'s protection, surveillance, risk advisory, and marine security services — tailored security solutions for homes, businesses, waterways, and events.`,
};

const services = [
  {
    slug: "protection",
    title: "Protection",
    icon: FiShield,
    tone: "light" as const,
    description:
      "Trained, disciplined personnel providing a visible and reassuring layer of protection — for individuals, homes, businesses, and events.",
    features: [
      "Executive & Close Protection",
      "Event Security",
      "Armed & Unarmed Guarding",
      "Residential Security",
    ],
    imageLabel: "Protection — Personnel on Site",
    image: "/images/group.png",
  },
  {
    slug: "marine-security",
    title: "Marine Security",
    icon: FaAnchor,
    tone: "alt" as const,
    description:
      "Bilbella's protection, surveillance, and risk advisory expertise extends onto the water — safeguarding vessels, waterfront facilities, and offshore operations across our riverine and coastal terrain.",
    features: [
      "Assets Protection",
      "Armed & Unarmed Vessel Escorts",
      "Waterway Patrol & Surveillance",
      "Stowaway & Cargo Searches",
      "Maritime Risk & Route Advisory",
    ],
    imageLabel: "Marine Security — Vessel Escort",
    image: "/images/marine.png",
  },
  {
    slug: "surveillance",
    title: "Surveillance",
    icon: FiVideo,
    tone: "alt" as const,
    description:
      "Round-the-clock monitoring and modern surveillance technology that keeps watch over what matters, day and night.",
    features: [
      "24/7 CCTV Monitoring",
      "Mobile Patrol Surveillance",
      "Access Control Management",
      "Alarm Response",
    ],
    imageLabel: "Surveillance — Monitoring Station",
    image: "/images/cctv.png",
  },
  {
    slug: "risk-advisory",
    title: "Risk Advisory",
    icon: FiClipboard,
    tone: "light" as const,
    description:
      "Clear-eyed risk assessments and security consulting that identify vulnerabilities before they become incidents.",
    features: [
      "Security Risk Assessments",
      "Vulnerability Audits",
      "Security Consulting & Planning",
      "Crisis & Incident Management Planning",
    ],
    imageLabel: "Risk Advisory — Consultation",
    image: "/images/inspection.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Security Solutions"
        subtitle={company.tagline}
        imageLabel="Services — Security Operations"
        src="/images/scan.jpg"
      />

      {services.map(
        (
          {
            slug,
            title,
            icon: Icon,
            tone,
            description,
            features,
            imageLabel,
            image: src,
          },
          i,
        ) => {
          const image = (
            <FadeIn delay={0.1}>
              <ImagePlaceholder label={imageLabel} ratio="4 / 5" src={src} />
            </FadeIn>
          );

          const text = (
            <FadeIn>
              <Icon className={styles.icon} />
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
              <ul className={styles.featureList}>
                {features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <FiCheck className={styles.featureIcon} />
                    {feature}
                  </li>
                ))}
              </ul>
            </FadeIn>
          );

          return (
            <Section key={slug} id={slug} tone={tone}>
              <div className={styles.serviceGrid}>
                {i % 2 === 1 ? (
                  <>
                    {image}
                    {text}
                  </>
                ) : (
                  <>
                    {text}
                    {image}
                  </>
                )}
              </div>
            </Section>
          );
        },
      )}

      <CtaBand
        heading="Not sure which service you need?"
        text="Tell us about your situation and we'll recommend the right mix of protection, surveillance, and advisory for you."
      />
    </>
  );
}
