import Link from "next/link";
import { company } from "@/content/company";
import { getDictionary } from "@/i18n";
import { RuneMark } from "./RuneMark";

export function Header() {
  const t = getDictionary();

  return (
    <header className="border-b border-line">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        {t.nav.skipToContent}
      </a>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <RuneMark className="size-6 text-fg" strokeWidth={22} />
          <span className="text-sm font-semibold tracking-tight">
            {company.tradingName}
          </span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm text-muted">
          <Link href="/apps" className="transition-colors hover:text-fg">
            {t.nav.apps}
          </Link>
          <Link href="/contact" className="transition-colors hover:text-fg">
            {t.nav.contact}
          </Link>
        </nav>
      </div>
    </header>
  );
}
