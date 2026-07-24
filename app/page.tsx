import {
  FiAward,
  FiCheck,
  FiChevronDown,
  FiClipboard,
  FiClock,
  FiMessageCircle,
  FiRefreshCw,
  FiShield,
  FiVideo,
} from "react-icons/fi";
import { FaAnchor } from "react-icons/fa";
import Button from "@/components/Button/Button";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import ImagePlaceholder from "@/components/ImagePlaceholder/ImagePlaceholder";
import FadeIn from "@/components/FadeIn/FadeIn";
import CtaBand from "@/components/CtaBand/CtaBand";
import { company } from "@/components/config";
import styles from "./page.module.scss";

const services = [
  {
    title: "Protection",
    slug: "protection",
    icon: FiShield,
    image: "/images/event.png",
    description:
      "Trained personnel delivering close protection, event security, and armed or unarmed guarding tailored to your risk profile.",
  },
  {
    title: "Marine Security",
    slug: "marine-security",
    image: "/images/marine.png",
    icon: FaAnchor,
    description:
      "Vessel escorts, waterway patrol, and maritime risk advisory — extending our protection onto the water.",
  },
  {
    title: "Surveillance",
    slug: "surveillance",
    icon: FiVideo,
    image: "/images/cctv.png",
    description:
      "Round-the-clock CCTV monitoring and patrol surveillance to keep your people, property, and assets watched over.",
  },
  {
    title: "Risk Advisory",
    slug: "risk-advisory",
    image: "/images/accessment.png",
    icon: FiClipboard,
    description:
      "In-depth risk assessments and security consulting that catch vulnerabilities before they become incidents.",
  },
];

const badges = [
  { icon: FiClock, label: "24/7 Rapid Response" },
  { icon: FiShield, label: "Trained & Vetted Personnel" },
  { icon: FiAward, label: "Licensed Security Provider" },
  { icon: FiRefreshCw, label: "Rapid Local Deployment" },
];

const strengths = [
  "Licensed & Vetted Personnel",
  "24/7 Monitoring & Rapid Response",
  "Tailored, Risk-Based Approach",
  "Confidential & Professional Service",
];

const process = [
  {
    number: "01",
    title: "Consultation",
    icon: FiMessageCircle,
    description:
      "We start by listening — a no-pressure conversation to understand your risk profile and what protection means for you.",
  },
  {
    number: "02",
    title: "Risk Assessment",
    icon: FiClipboard,
    description:
      "Our team assesses vulnerabilities and designs a security plan tailored to your specific situation.",
  },
  {
    number: "03",
    title: "Deployment",
    icon: FiShield,
    description:
      "Trained personnel, surveillance systems, and protocols are deployed exactly where you need them.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    icon: FiRefreshCw,
    description:
      "Security isn't a one-time job. We monitor, review, and adjust as your needs evolve.",
  },
];

const gallery = [
  {
    title: "Patrol Operations",
    image: "/images/patrol.jpg",
  },
  {
    title: "Surveillance Center",
    image: "/images/scan.jpg",
  },
  {
    title: "Event Security Detail",
    image: "/images/group.png",
  },
  {
    title: "Client Consultation",
    image: "/images/inspection.png",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <ImagePlaceholder
          label="Hero — Security Personnel on Duty"
          src="/images/bold.png"
          fill
        />
        <div className={styles.heroOverlay} />
        <Container className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroEyebrow}>{company.fullName}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className={styles.heroHeading}>
              Grand Protection. Absolute Peace of Mind.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className={styles.heroTagline}>{company.tagline}</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className={styles.heroSupport}>
              Trained personnel, modern surveillance, and clear-eyed risk
              advisory — on land and at sea — brought together under one
              dependable name, so protecting what matters to you is never left
              to chance.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className={styles.heroActions}>
              <Button href="/contact" size="lg">
                Get Protected
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Our Services
              </Button>
            </div>
          </FadeIn>
        </Container>
        <a href="#trust" className={styles.scrollCue} aria-label="Scroll down">
          <FiChevronDown />
        </a>
      </section>

      <Section id="trust" tone="alt">
        <div className={styles.badgeGrid}>
          {badges.map(({ icon: Icon, label }, i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>
                  <Icon />
                </span>
                <span>{label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <div className={styles.introGrid}>
          <FadeIn direction="left">
            <ImagePlaceholder
              label="Team Briefing — Field Operations"
              ratio="4 / 5"
              src="/images/briefing.png"
            />
          </FadeIn>
          <FadeIn direction="right">
            <p className={styles.sectionEyebrow}>Why Choose Us</p>
            <h2 className={styles.introHeading}>
              A Security Partner You Can Rely On
            </h2>
            <p className={styles.introText}>
              {company.fullName} brings together trained personnel, modern
              surveillance, and sound risk advisory under one roof. We treat
              every engagement as a partnership — taking the time to understand
              your risk before recommending a plan.
            </p>
            <ul className={styles.strengthList}>
              {strengths.map((strength) => (
                <li key={strength} className={styles.strengthItem}>
                  <FiCheck className={styles.strengthIcon} />
                  {strength}
                </li>
              ))}
            </ul>
            <Button href="/about" variant="ghost">
              Learn More About Us →
            </Button>
          </FadeIn>
        </div>
      </Section>

      <Section tone="alt">
        <FadeIn>
          <p className={styles.sectionEyebrow}>What We Do</p>
          <h2 className={styles.sectionHeading}>Our Services</h2>
        </FadeIn>

        <div className={styles.serviceGrid}>
          {services.map(
            ({ title, slug, icon: Icon, description, image }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className={styles.serviceCard}>
                  <ImagePlaceholder
                    label={`${title} — Placeholder Image`}
                    ratio="4 / 3"
                    src={image}
                  />
                  <span className={styles.serviceIconBadge}>
                    <Icon />
                  </span>
                  <h3 className={styles.serviceTitle}>{title}</h3>
                  <p className={styles.serviceDescription}>{description}</p>
                  <Button href={`/services#${slug}`} variant="ghost">
                    Learn More →
                  </Button>
                </div>
              </FadeIn>
            ),
          )}
        </div>
      </Section>

      <Section tone="light">
        <FadeIn>
          <p className={styles.sectionEyebrow}>How We Work</p>
          <h2 className={styles.sectionHeading}>
            A Clear Process, From First Call to Ongoing Care
          </h2>
        </FadeIn>

        <div className={styles.processGrid}>
          {process.map(({ number, title, icon: Icon, description }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <div className={styles.processCard}>
                <span className={styles.processNumber}>{number}</span>
                <Icon className={styles.processIcon} />
                <h3 className={styles.processTitle}>{title}</h3>
                <p className={styles.processDescription}>{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <FadeIn>
          <p className={styles.sectionEyebrow}>Our Operations</p>
          <h2 className={styles.sectionHeading}>{company.name} in Action</h2>
        </FadeIn>

        <div className={styles.galleryGrid}>
          {gallery.map((label, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <ImagePlaceholder
                label={label.title}
                ratio="1 / 1"
                src={label.image}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <FadeIn className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            Real security isn&apos;t just a presence — it&apos;s a promise kept,
            every single day.
          </p>
          <p className={styles.quoteAttribution}>
            — The {company.fullName} Team
          </p>
        </FadeIn>
      </Section>

      <CtaBand />
    </>
  );
}
