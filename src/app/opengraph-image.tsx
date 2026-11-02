import { ImageResponse } from "next/og";
import { RUNE_PATHS, RUNE_VIEWBOX, runeClipY } from "@/components/RuneMark";
import { company } from "@/content/company";
import { getDictionary } from "@/i18n";

export const alt = `${company.tradingName}, independent app studio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const t = getDictionary();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 72,
          padding: "0 96px",
          color: "#e8eaf6",
          background:
            "radial-gradient(circle at 22% 50%, #1e2b84 0%, #0a0d1f 55%)",
        }}
      >
        <svg
          width="300"
          height="300"
          viewBox={RUNE_VIEWBOX}
          fill="none"
          stroke="#e8eaf6"
          strokeWidth="12"
        >
          <clipPath id="c">
            <rect y={runeClipY(12)} width="512" height="512" />
          </clipPath>
          <g clipPath="url(#c)">
            {RUNE_PATHS.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 30, color: "#9aa2c6", letterSpacing: 4 }}>
            {company.tradingName.toUpperCase()}
          </div>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -3 }}>
            {t.hero.tagline}
          </div>
          <div style={{ fontSize: 30, color: "#9aa2c6", maxWidth: 620 }}>
            {t.hero.subtitle}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
