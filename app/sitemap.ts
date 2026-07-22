import type { MetadataRoute } from "next";
import { company, navLinks, legalLinks } from "@/components/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...navLinks, ...legalLinks].map((link) => ({
    url: `${company.siteUrl}${link.href}`,
    lastModified,
    changeFrequency: link.href === "/" ? "monthly" : "yearly",
    priority: link.href === "/" ? 1 : 0.6,
  }));
}
