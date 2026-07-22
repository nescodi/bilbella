import type { ReactNode } from "react";
import Image from "next/image";
import { FiImage } from "react-icons/fi";
import styles from "./ImagePlaceholder.module.scss";

type ImagePlaceholderProps = {
  label: string;
  ratio?: string;
  icon?: ReactNode;
  fill?: boolean;
  src?: string;
  className?: string;
};

export default function ImagePlaceholder({
  label,
  ratio = "16 / 9",
  icon,
  fill = false,
  src,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${styles.placeholder} ${fill ? styles.fill : ""} ${className}`}
      style={fill ? undefined : { aspectRatio: ratio }}
      aria-hidden={fill && !src ? true : undefined}
    >
      <div className={`${styles.bg} ${fill ? styles.kenBurns : ""}`}>
        <Image
          src={src ?? "/logo.png"}
          alt={src ? label : ""}
          aria-hidden={src ? undefined : true}
          fill
          className={`${styles.watermark} ${src ? styles.image : ""}`}
        />
      </div>
      {!fill && !src && (
        <div className={styles.content}>
          {icon ?? <FiImage aria-hidden />}
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
