import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps",
};

const apps = [
  {
    slug: "placeholder",
    name: "Placeholder",
    tagline: "",
    status: "In development",
  },
];

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
        Our apps
      </h1>
      <p className="mt-3 text-zinc-400">
        Small, focused apps — no bloat, no dark patterns.
      </p>
      <ul className="mt-10 flex flex-col gap-4">
        {apps.map((app) => (
          <li key={app.slug}>
            <Link
              href={`/apps/${app.slug}`}
              className="flex items-center justify-between rounded-xl border border-white/10 px-6 py-5 transition-colors hover:border-brand-light/40 hover:bg-white/5"
            >
              <div>
                <p className="font-medium text-zinc-100">{app.name}</p>
                <p className="text-sm text-zinc-400">{app.tagline}</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-300">
                {app.status}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
