import type { App } from "@/content/apps";
import { getDictionary } from "@/i18n";

export function StatusTag({ status }: { status: App["status"] }) {
  const t = getDictionary();
  const live = status === "live";

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
      <span
        aria-hidden
        className={`size-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-accent"}`}
      />
      {live ? t.apps.live : t.apps.comingSoon}
    </span>
  );
}
