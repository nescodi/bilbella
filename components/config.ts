type NavLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
};

export const company = {
  name: "Bilbella",
  subtitle: "Security Network",
  fullName: "Bilbella Security Network",
  siteUrl: "https://bilbellasecurity.com.ng",
  tagline: "Protection · Surveillance · Risk Advisory",
  taglinePillars: ["Protection", "Surveillance", "Risk Advisory"],
  address: "Obiogbolo Dimrose by Timaya Street, House 13, Yenagoa",
  addressLocality: "Yenagoa",
  addressRegion: "Bayelsa State",
  addressCountry: "NG",
  phone: "0915 111 1146",
  phoneHref: "tel:+2349151111146",
  whatsappNumber: "2349151111146",
  email: "admin@bilbellasecurity.com.ng",
  emailHref: "mailto:admin@bilbellasecurity.com.ng",
  rcNumber: "",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const socialLinks: SocialLink[] = [];
