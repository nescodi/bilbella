type NavLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
};

type Leader = {
  name: string;
  title: string;
  bio: string;
  image?: string;
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

export const leadership: Leader[] = [
  {
    image: "/images/chairman.jpg",
    name: "Ebitimi Stephen Akassa",
    title: "Chairman",
    bio: "Ebitimi Stephen Akassa leads Bilbella Security Network with a commitment to professionalism, transparency, and excellence. His leadership focuses on building client trust, strong partnerships, and delivering reliable protection, surveillance, and risk advisory services that create lasting impact.Ebitimi Stephen Akassa leads Bilbella Security Network with a commitment to professionalism, transparency, and excellence. His leadership focuses on building client trust, strong partnerships, and delivering reliable protection, surveillance, and risk advisory services that create lasting impact.",
  },
  {
    image: "/images/director-operations.jpeg",
    name: "Lt Col Nkana-Ete Udoh Efik (Rtd)",
    title: "Director of Operations",
    bio: "A retired Lieutenant Colonel, Lt Col Udoh Efik brings a wealth of hands-on security experience across every terrain to Bilbella's operations — leading our land and marine security teams with the discipline and field expertise built over a distinguished career.",
  },
];
