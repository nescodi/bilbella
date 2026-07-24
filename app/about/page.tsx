import type { Metadata } from "next";
import {
  FiBookOpen,
  FiCheckCircle,
  FiCpu,
  FiEye,
  FiEyeOff,
  FiLock,
  FiUsers,
} from "react-icons/fi";
import PageHero from "@/components/PageHero/PageHero";
import Section from "@/components/Section/Section";
import ImagePlaceholder from "@/components/ImagePlaceholder/ImagePlaceholder";
import FadeIn from "@/components/FadeIn/FadeIn";
import CtaBand from "@/components/CtaBand/CtaBand";
import { company, leadership } from "@/components/config";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.fullName} — a trusted security partner in ${company.addressLocality}, ${company.addressRegion}, providing licensed protection, surveillance, risk advisory, and marine security services.`,
};

const values = [
  {
    title: "Integrity",
    icon: FiCheckCircle,
    description:
      "We do what we say we'll do, every time. Trust is the foundation of every engagement.",
  },
  {
    title: "Vigilance",
    icon: FiEye,
    description:
      "Threats don't keep office hours, and neither do we. Our teams stay alert around the clock.",
  },
  {
    title: "Professionalism",
    icon: FiUsers,
    description:
      "Every member of our team is trained, vetted, and held to a high standard of conduct.",
  },
  {
    title: "Discretion",
    icon: FiLock,
    description:
      "Security is personal. We handle every client relationship with confidentiality and respect.",
  },
];

const whyChoose = [
  {
    title: "Rapid Response",
    icon: FiBookOpen,
    description:
      "Our teams are positioned and ready to respond quickly when it matters most.",
  },
  {
    title: "Continuous Training",
    icon: FiBookOpen,
    description:
      "Ongoing training keeps our personnel sharp, current, and ready for real-world situations.",
  },
  {
    title: "Modern Technology",
    icon: FiCpu,
    description:
      "We pair experienced personnel with modern surveillance tools for layered protection.",
  },
  {
    title: "Confidential Service",
    icon: FiEyeOff,
    description:
      "Your security needs stay between us — always handled with discretion.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`About ${company.name}`}
        subtitle={company.tagline}
        imageLabel="About — Security Team Portrait"
        src="/images/group.png"
      />

      <Section tone="light">
        <div className={styles.storyGrid}>
          <FadeIn>
            <p className={styles.eyebrow}>Our Story</p>
            <h2 className={styles.storyHeading}>Protection built on trust</h2>
            <p className={styles.storyParagraph}>
              {company.fullName} was built on a simple belief: real peace of
              mind comes from protection you can trust. We provide dependable,
              professional security services for homes, businesses, and events —
              combining trained personnel, modern surveillance, and sound risk
              advisory to keep the people and property you care about safe.
            </p>
            <p className={styles.storyParagraph}>
              From close protection to round-the-clock monitoring, every
              engagement is built around your specific risk profile. We
              don&apos;t believe in one-size-fits-all security — we believe in
              understanding what matters to you, and building a plan around it.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ImagePlaceholder
              label="Our Story — Team in the Field"
              ratio="4 / 5"
              src="/images/bold.png"
            />
          </FadeIn>
        </div>
      </Section>

      <Section tone="alt">
        <FadeIn>
          <p className={styles.eyebrow}>What Drives Us</p>
          <h2 className={styles.sectionHeading}>Our Values</h2>
        </FadeIn>

        <div className={styles.valuesGrid}>
          {values.map(({ title, icon: Icon, description }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <div className={styles.valueCard}>
                <Icon className={styles.valueIcon} />
                <h3 className={styles.valueTitle}>{title}</h3>
                <p className={styles.valueDescription}>{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <FadeIn>
          <p className={styles.eyebrow}>Why Choose Us</p>
          <h2 className={styles.sectionHeading}>
            What Sets {company.name} Apart
          </h2>
        </FadeIn>

        <div className={styles.whyGrid}>
          {whyChoose.map(({ title, icon: Icon, description }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <div className={styles.valueCard}>
                <Icon className={styles.valueIcon} />
                <h3 className={styles.valueTitle}>{title}</h3>
                <p className={styles.valueDescription}>{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <FadeIn>
          <p className={styles.eyebrow}>Our Leadership</p>
          <h2 className={styles.sectionHeading}>
            Meet the Team Behind {company.name}
          </h2>
        </FadeIn>

        <div className={styles.leadershipGrid}>
          {leadership.map(({ name, title, bio, image }, i) => (
            <FadeIn key={name} delay={i * 0.1}>
              <div className={styles.leaderCard}>
                <ImagePlaceholder
                  label={`${name} — Portrait`}
                  ratio="1 / 1"
                  className={styles.leaderPortrait}
                  src={image}
                />
                <div>
                  <h3 className={styles.leaderName}>{name}</h3>
                  <p className={styles.leaderTitle}>{title}</p>
                  <p className={styles.leaderBio}>{bio}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
