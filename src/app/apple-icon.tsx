import { ImageResponse } from "next/og";
import { RUNE_PATHS, RUNE_VIEWBOX, runeClipY } from "@/components/RuneMark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS applies its own rounded mask, so the background is a full square.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2535a0, #172169)",
        }}
      >
        <svg width="140" height="140" viewBox={RUNE_VIEWBOX} fill="none" stroke="#fff" strokeWidth="20">
          <clipPath id="c">
            <rect y={runeClipY(20)} width="512" height="512" />
          </clipPath>
          <g clipPath="url(#c)">
            {RUNE_PATHS.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
