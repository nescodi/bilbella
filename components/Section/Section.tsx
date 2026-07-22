import type { ReactNode } from "react";
import Container from "@/components/Container/Container";
import styles from "./Section.module.scss";

type SectionTone = "light" | "dark" | "alt";

type SectionProps = {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  id?: string;
};

export default function Section({
  children,
  tone = "light",
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
