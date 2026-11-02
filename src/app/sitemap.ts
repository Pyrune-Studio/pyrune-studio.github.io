import type { MetadataRoute } from "next";
import { apps, appsWithLegalPages } from "@/content/apps";
import { siteUrl } from "@/content/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/apps", "/contact", "/legal", "/privacy", "/terms"];
  const appRoutes = [
    ...apps.map((app) => `/apps/${app.slug}`),
    ...appsWithLegalPages.flatMap((app) => [
      `/apps/${app.slug}/privacy`,
      `/apps/${app.slug}/support`,
    ]),
  ];

  return [...staticRoutes, ...appRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
