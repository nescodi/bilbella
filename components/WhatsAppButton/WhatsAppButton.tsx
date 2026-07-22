"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/components/config";
import styles from "./WhatsAppButton.module.scss";

const MESSAGE = `Hello ${company.name}, I'd like to enquire about your security services.`;

export default function WhatsAppButton() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  const href = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label={`Chat with ${company.name} on WhatsApp`}
    >
      <FaWhatsapp />
    </a>
  );
}
