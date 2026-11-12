import type { Metadata } from "next";
import { AppGrid } from "@/components/AppGrid";
import { apps } from "@/content/apps";
import { getDictionary } from "@/i18n";

const t = getDictionary();

export const metadata: Metadata = {
  title: t.apps.title,
  description: t.apps.intro,
  alternates: { canonical: "/apps" },
};

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {t.apps.title}
      </h1>
      <p className="mt-3 text-muted">{t.apps.intro}</p>
      <div className="mt-10">
        <AppGrid apps={apps} />
      </div>
    </div>
  );
}
