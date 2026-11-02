import type { MetadataRoute } from "next";
import { apps } from "@/content/apps";
import { siteUrl } from "@/content/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/apps", "/contact", "/legal", "/privacy", "/terms"];
  const appRoutes = apps.flatMap((app) => [
    `/apps/${app.slug}`,
    `/apps/${app.slug}/privacy`,
    `/apps/${app.slug}/support`,
  ]);

  return [...staticRoutes, ...appRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
