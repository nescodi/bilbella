import Image from "next/image";
import Link from "next/link";
import { company } from "@/components/config";
import styles from "./Logo.module.scss";

type LogoProps = {
  showSubtext?: boolean;
  linked?: boolean;
};

export default function Logo({ showSubtext = true, linked = true }: LogoProps) {
  const content = (
    <span className={styles.logo}>
      <Image
        src="/logo.png"
        alt={company.fullName}
        width={865}
        height={1159}
        className={styles.mark}
        priority
      />
      <span className={styles.text}>
        <span className={styles.wordmark}>{company.name}</span>
        {showSubtext && (
          <span className={styles.subtext}>{company.subtitle}</span>
        )}
      </span>
    </span>
  );

  if (!linked) {
    return content;
  }

  return (
    <Link href="/" className={styles.link} aria-label={company.fullName}>
      {content}
    </Link>
  );
}
