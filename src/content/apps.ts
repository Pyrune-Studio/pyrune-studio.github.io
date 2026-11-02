// The list of apps shown on the site. Each entry generates:
//   /apps/[slug], /apps/[slug]/privacy and /apps/[slug]/support
// See README.md > "Add an app".

export type ThirdPartyService = {
  name: string;
  purpose: string;
  privacyUrl: string;
};

export type App = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string; // path in /public/apps/
  screenshots?: string[];
  status: "live" | "coming-soon";
  appStoreUrl?: string;
  googlePlayUrl?: string;
  supportEmail?: string; // defaults to company.email
  dataCollected: string[]; // used to generate the privacy policy
  thirdPartyServices: ThirdPartyService[];
  privacyLastUpdated: string; // ISO date
};

export const apps: App[] = [
  // TODO: example app, replace with the real first app
  {
    slug: "example-app",
    name: "Example App",
    tagline: "A small, focused app. Coming soon.",
    description:
      "This is a placeholder entry. Replace it in src/content/apps.ts with your first real app: its name, tagline, icon, store links and the data it collects.",
    icon: "/apps/example-app.png",
    status: "coming-soon",
    dataCollected: [],
    thirdPartyServices: [],
    privacyLastUpdated: "2026-10-29",
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
