import { AppGrid } from "@/components/AppGrid";
import { RuneMark } from "@/components/RuneMark";
import { apps } from "@/content/apps";
import { getDictionary } from "@/i18n";

export default function Home() {
  const t = getDictionary();

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="rune-grid absolute inset-0 -z-10" />

        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-24 pt-20 text-center sm:px-6 sm:pb-32 sm:pt-28">
          <div className="relative">
            <div
              aria-hidden
              className="rune-halo absolute left-1/2 top-1/2 -z-10 size-[22rem] -translate-x-1/2 -translate-y-1/2"
            />
            {/* Hairline extending the glyph's long stroke across the hero. */}
            <div
              aria-hidden
              className="absolute left-[50.3%] top-[31.5%] -z-10 h-px w-[300vmax] -translate-x-1/2 -rotate-[42.7deg] bg-line"
            />
            <RuneMark
              animated
              strokeWidth={9}
              className="size-40 text-fg sm:size-52"
            />
          </div>
          <h1
            className="fade-in mt-10 text-5xl font-semibold tracking-tighter sm:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            {t.hero.tagline}
          </h1>
          <p
            className="fade-in mt-5 max-w-md text-lg text-muted"
            style={{ animationDelay: "0.3s" }}
          >
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      <section
        aria-labelledby="apps-heading"
        className="mx-auto max-w-5xl px-4 pb-24 sm:px-6"
      >
        <div className="mb-6 flex items-baseline justify-between border-b border-line pb-3">
          <h2 id="apps-heading" className="font-mono text-xs uppercase tracking-wider text-muted">
            {t.apps.title}
          </h2>
          <span className="font-mono text-xs text-muted">
            {String(apps.length).padStart(2, "0")}
          </span>
        </div>
        <AppGrid apps={apps} />
      </section>
    </>
  );
}
