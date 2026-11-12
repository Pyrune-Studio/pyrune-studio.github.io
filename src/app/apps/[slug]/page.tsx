import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusTag } from "@/components/StatusTag";
import { StoreBadges } from "@/components/StoreBadge";
import { appStores, apps, getApp } from "@/content/apps";
import { company } from "@/content/company";
import { getDictionary } from "@/i18n";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  return {
    title: app.name,
    description: app.tagline,
    alternates: { canonical: `/apps/${app.slug}` },
  };
}

export default async function AppPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();
  const t = getDictionary();
  const stores = appStores(app);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
          src={app.icon}
          alt={`${app.name} icon`}
          width={96}
          height={96}
          preload
          className="rounded-[22px]"
        />
        <div>
          <StatusTag status={app.status} />
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {app.name}
          </h1>
          <p className="mt-1 text-lg text-muted">{app.tagline}</p>
        </div>
      </div>

      <p className="mt-10 max-w-2xl leading-relaxed text-muted">{app.description}</p>

      <dl className="mt-8 grid gap-x-8 gap-y-3 border-y border-line py-5 text-sm sm:grid-cols-[auto_1fr]">
        {app.websiteUrl && (
          <>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-0.5">
              {t.apps.website}
            </dt>
            <dd>
              <a href={app.websiteUrl} className="text-accent hover:underline">
                {new URL(app.websiteUrl).hostname.replace(/^www\./, "")} ↗
              </a>
            </dd>
          </>
        )}
        <dt className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-0.5">
          {t.apps.publishedBy}
        </dt>
        <dd>{company.tradingName}</dd>
        {stores.length > 0 && (
          <>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-0.5">
              {t.apps.publishedOn}
            </dt>
            <dd>{stores.map(({ store }) => t.stores[store]).join(", ")}</dd>
          </>
        )}
      </dl>

      <div className="mt-8">
        <StoreBadges app={app} />
      </div>

      {app.screenshots && app.screenshots.length > 0 && (
        <section aria-labelledby="screenshots" className="mt-14">
          <h2
            id="screenshots"
            className="font-mono text-xs uppercase tracking-wider text-muted"
          >
            {t.apps.screenshots}
          </h2>
          <ul className="-mx-4 mt-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
            {app.screenshots.map((src, i) => (
              <li key={src} className="shrink-0 snap-start">
                <Image
                  src={src}
                  alt={`${app.name} screenshot ${i + 1}`}
                  width={240}
                  height={520}
                  className="h-auto w-48 rounded-2xl border border-line sm:w-60"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {!app.hideLegalPages ? (
        <nav
          aria-label={`${app.name} links`}
          className="mt-14 flex gap-6 border-t border-line pt-6 font-mono text-sm"
        >
          <Link href={`/apps/${app.slug}/privacy`} className="text-accent hover:underline">
            {t.apps.privacy}
          </Link>
          <Link href={`/apps/${app.slug}/support`} className="text-accent hover:underline">
            {t.apps.support}
          </Link>
        </nav>
      ) : (
        (app.privacyPolicyUrl || app.termsUrl) && (
          <nav
            aria-label={`${app.name} legal`}
            className="mt-14 flex gap-6 border-t border-line pt-6 text-sm"
          >
            {app.termsUrl && (
              <a href={app.termsUrl} className="text-fg underline underline-offset-4 hover:text-accent">
                {t.apps.termsOfService}
              </a>
            )}
            {app.privacyPolicyUrl && (
              <a href={app.privacyPolicyUrl} className="text-fg underline underline-offset-4 hover:text-accent">
                {t.apps.privacyPolicy}
              </a>
            )}
          </nav>
        )
      )}
    </div>
  );
}
