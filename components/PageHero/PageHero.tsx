import Container from "@/components/Container/Container";
import ImagePlaceholder from "@/components/ImagePlaceholder/ImagePlaceholder";
import FadeIn from "@/components/FadeIn/FadeIn";
import styles from "./PageHero.module.scss";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  src?: string;
  imageLabel: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  imageLabel,
  src,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <ImagePlaceholder label={imageLabel} fill src={src} />
      <div className={styles.overlay} />
      <Container className={styles.content}>
        <FadeIn>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </FadeIn>
      </Container>
    </section>
  );
}
