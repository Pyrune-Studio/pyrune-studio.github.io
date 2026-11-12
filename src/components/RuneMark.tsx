import { useId } from "react";

// Vector version of the Pyrune glyph, traced on the 512×512 logo grid.
// Keep in sync with public/logo-mark.svg and src/app/icon.svg.
export const RUNE_VIEWBOX = "113 105 300 300";
export const RUNE_PATHS = [
  // Vertical stroke and short diagonal as one path, so the corner is a real
  // miter join instead of two strokes meeting.
  "M185 393V118L269.4 194",
  "M185 272 343 126",
];

// The miter join pokes above the vertical stroke. Clipping at this height
// leaves a flat top that ends exactly where the diagonal's outer edge starts,
// as on the logo, whatever the stroke width.
export function runeClipY(strokeWidth: number) {
  return 118 - 0.2225 * strokeWidth;
}

type RuneMarkProps = {
  className?: string;
  strokeWidth?: number;
  animated?: boolean;
  title?: string;
};

export function RuneMark({
  className,
  strokeWidth = 18,
  animated = false,
  title,
}: RuneMarkProps) {
  const clipId = useId();

  return (
    <svg
      viewBox={RUNE_VIEWBOX}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="miter"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <clipPath id={clipId}>
        <rect x="0" y={runeClipY(strokeWidth)} width="512" height="512" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        {RUNE_PATHS.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            className={animated ? "rune-draw" : undefined}
            style={animated ? { animationDelay: `${i * 0.5}s` } : undefined}
          />
        ))}
      </g>
    </svg>
  );
}
