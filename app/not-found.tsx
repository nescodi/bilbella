import { FiAlertTriangle } from "react-icons/fi";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <FiAlertTriangle className={styles.icon} aria-hidden />
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>Page Not Found</h1>
        <p className={styles.text}>
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>
        <div className={styles.actions}>
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
