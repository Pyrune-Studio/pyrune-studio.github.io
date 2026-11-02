import Link from "next/link";
import { company } from "@/content/company";
import { getDictionary } from "@/i18n";
import { RuneMark } from "./RuneMark";

export function Footer() {
  const t = getDictionary();
  const links = [
    { href: "/legal", label: t.footer.legal },
    { href: "/privacy", label: t.footer.privacy },
    { href: "/terms", label: t.footer.terms },
    { href: "/contact", label: t.footer.contact },
  ];
  const storeLinks = [
    { href: company.appStoreDeveloperUrl, label: t.footer.appStore },
    { href: company.googlePlayDeveloperUrl, label: t.footer.googlePlay },
  ].filter((link): link is { href: string; label: string } => !!link.href);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 text-sm text-muted sm:px-6 md:flex-row md:items-start md:justify-between">
        <p className="flex items-center gap-2 text-fg">
          <RuneMark className="size-5" strokeWidth={22} />
          <span>
            © {new Date().getFullYear()} {company.legalName}
          </span>
        </p>
        <nav aria-label="Footer" className="flex flex-col gap-3 md:items-end">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-fg">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {storeLinks.length > 0 && (
            <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
              {storeLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-fg">
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </footer>
  );
}
