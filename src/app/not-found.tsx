import Link from "next/link";
import { RuneMark } from "@/components/RuneMark";
import { getDictionary } from "@/i18n";

export default function NotFound() {
  const t = getDictionary();

  return (
    <div className="relative isolate mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
      <div aria-hidden className="rune-grid absolute inset-0 -z-10" />
      <RuneMark className="size-20 rotate-180 text-muted" strokeWidth={12} />
      <p className="mt-8 font-mono text-sm text-accent">{t.notFound.code}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {t.notFound.title}
      </h1>
      <p className="mt-3 text-muted">{t.notFound.body}</p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
      >
        {t.notFound.back}
      </Link>
    </div>
  );
}
