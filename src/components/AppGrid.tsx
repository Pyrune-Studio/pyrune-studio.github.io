import type { App } from "@/content/apps";
import { getDictionary } from "@/i18n";
import { AppCard } from "./AppCard";
import { RuneMark } from "./RuneMark";

export function AppGrid({ apps }: { apps: App[] }) {
  const t = getDictionary();

  if (apps.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line px-6 py-12 text-center">
        <RuneMark className="size-8 text-accent" strokeWidth={14} />
        <p className="font-medium text-fg">{t.apps.emptyTitle}</p>
        <p className="text-sm text-muted">{t.apps.emptyBody}</p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {apps.map((app) => (
        <li key={app.slug}>
          <AppCard app={app} />
        </li>
      ))}
    </ul>
  );
}
