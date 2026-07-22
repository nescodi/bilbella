import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Logo from "@/components/Logo/Logo";
import { company, legalLinks, navLinks, socialLinks } from "@/components/config";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>{company.tagline}</p>
        </div>

        <nav className={styles.column}>
          <span className={styles.heading}>Quick Links</span>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.column}>
          <span className={styles.heading}>Contact</span>
          <span className={styles.contactItem}>
            <FiMapPin />
            {company.address}
          </span>
          <a href={company.phoneHref} className={styles.contactItem}>
            <FiPhone />
            {company.phone}
          </a>
          <a href={company.emailHref} className={styles.contactItem}>
            <FiMail />
            {company.email}
          </a>
        </div>

        {socialLinks.length > 0 && (
          <div className={styles.socials}>
            {socialLinks.map((social) => (
              <a key={social.href} href={social.href} className={styles.socialLink}>
                {social.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className={styles.bottomBar}>
        <span>
          © {year} {company.fullName}. All rights reserved.
        </span>
        {company.rcNumber && <span>RC No: {company.rcNumber}</span>}
        {legalLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.legalLink}>
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
