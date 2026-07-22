import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { company } from "@/components/config";
import { brandColors } from "@/components/brandColors";

export const dynamic = "force-static";
export const alt = company.fullName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${brandColors.navy} 0%, ${brandColors.navyLight} 100%)`,
          color: brandColors.white,
        }}
      >
        <img src={logoSrc} width={140} height={188} alt="" />
        <div
          style={{
            marginTop: 32,
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {company.name}
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: brandColors.gold,
          }}
        >
          {company.subtitle}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: brandColors.taupe,
          }}
        >
          {company.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
