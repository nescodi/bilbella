import FadeIn from "@/components/FadeIn/FadeIn";
import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";
import { company } from "@/components/config";
import styles from "./CtaBand.module.scss";

type CtaBandProps = {
  heading?: string;
  text?: string;
};

export default function CtaBand({
  heading = "Ready to secure what matters most?",
  text = "Speak with our team today and get a tailored security plan for your home, business, or event.",
}: CtaBandProps) {
  return (
    <Section tone="dark">
      <FadeIn className={styles.band}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          <Button href="/contact" size="lg">
            Contact Us
          </Button>
          <Button
            href={`https://wa.me/${company.whatsappNumber}`}
            variant="secondary"
            size="lg"
            external
          >
            Chat on WhatsApp
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
