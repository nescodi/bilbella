import type { ReactNode } from "react";
import Section from "@/components/Section/Section";
import FadeIn from "@/components/FadeIn/FadeIn";
import styles from "./LegalContent.module.scss";

type LegalContentProps = {
  children: ReactNode;
  updatedAt: string;
};

export default function LegalContent({ children, updatedAt }: LegalContentProps) {
  return (
    <Section tone="light">
      <FadeIn>
        <div className={styles.content}>
          <p className={styles.updated}>Last updated: {updatedAt}</p>
          {children}
        </div>
      </FadeIn>
    </Section>
  );
}
