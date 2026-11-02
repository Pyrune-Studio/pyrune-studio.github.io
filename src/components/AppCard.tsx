import Image from "next/image";
import Link from "next/link";
import { appStores, type App } from "@/content/apps";
import { getDictionary } from "@/i18n";
import { StatusTag } from "./StatusTag";

export function AppCard({ app }: { app: App }) {
  const t = getDictionary();
  const stores = appStores(app);

  return (
    <Link
      href={`/apps/${app.slug}`}
      className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <Image
          src={app.icon}
          alt=""
          width={56}
          height={56}
          className="rounded-[14px]"
        />
        <StatusTag status={app.status} />
      </div>
      <div>
        <h3 className="font-semibold tracking-tight text-fg">{app.name}</h3>
        <p className="mt-1 text-sm text-muted">{app.tagline}</p>
      </div>
      <p className="mt-auto flex flex-wrap gap-x-2 border-t border-line pt-3 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
        <span>{app.role === "publisher" ? t.apps.rolePublisher : t.apps.roleDeveloper}</span>
        {stores.map(({ store }) => (
          <span key={store}>· {t.stores[store]}</span>
        ))}
      </p>
    </Link>
  );
}
