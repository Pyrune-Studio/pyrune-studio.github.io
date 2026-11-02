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
  // "developer": built and published by Pyrune Studio.
  // "publisher": built by a third party, published by Pyrune Studio.
  role: "developer" | "publisher";
  websiteUrl?: string;
  // Store listings published by Pyrune Studio. Only the stores filled in here
  // are shown on the site (badges, "Published on" line).
  appStoreUrl?: string;
  googlePlayUrl?: string;
  // true when the app's privacy policy and support live elsewhere (e.g. its own
  // website): /apps/[slug]/privacy and /support are then not generated.
  hideLegalPages?: boolean;
  supportEmail?: string; // defaults to company.email
  dataCollected: string[]; // used to generate the privacy policy
  thirdPartyServices: ThirdPartyService[];
  privacyLastUpdated: string; // ISO date
};

export type Store = "app-store" | "google-play";

export function appStores(app: App): { store: Store; url: string }[] {
  const stores: { store: Store; url: string }[] = [];
  if (app.appStoreUrl) stores.push({ store: "app-store", url: app.appStoreUrl });
  if (app.googlePlayUrl) stores.push({ store: "google-play", url: app.googlePlayUrl });
  return stores;
}

export const apps: App[] = [
  // TODO: example app, replace with the real first app
  // {
  //   slug: "example-app",
  //   name: "Example App",
  //   tagline: "A small, focused app. Coming soon.",
  //   description:
  //     "This is a placeholder entry. Replace it in src/content/apps.ts with your first real app: its name, tagline, icon, store links and the data it collects.",
  //   icon: "/apps/example-app.png",
  //   status: "coming-soon",
  //   role: "developer",
  //   dataCollected: [],
  //   thirdPartyServices: [],
  //   privacyLastUpdated: "2026-10-29",
  // },
  {
    slug: "peeps",
    name: "Peeps",
    tagline: "Make new friends.",
    description:
      "Peeps is the best way to make new friends.",
    icon: "/apps/peeps_logo.png",
    status: "live",
    role: "publisher",
    websiteUrl: "https://www.getpeeps.app",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.buttergames.peeps",
    hideLegalPages: true,
    dataCollected: [],
    thirdPartyServices: [],
    privacyLastUpdated: "2026-11-02",
  },
  {
    slug: "nth",
    name: "Nth",
    tagline: "",
    description:
      "",
    icon: "/apps/Nth.png",
    status: "coming-soon",
    role: "developer",
    websiteUrl: "",
    googlePlayUrl: "",
    hideLegalPages: false,
    dataCollected: [],
    thirdPartyServices: [],
    privacyLastUpdated: "2026-11-02",
  },
  
];

export function getApp(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}

export const appsWithLegalPages = apps.filter((app) => !app.hideLegalPages);
