// UI copy. Only English for now; a `fr.ts` with the same shape can be added later.

export const en = {
  hero: {
    // Alternatives: "Apps, forged with care." · "Independent app studio."
    tagline: "We craft apps.",
    subtitle:
      "Pyrune Studio designs, builds and publishes mobile apps.",
  },
  nav: {
    apps: "Apps",
    contact: "Contact",
    skipToContent: "Skip to content",
  },
  apps: {
    title: "Apps",
    intro: "Small, focused apps.",
    comingSoon: "Coming soon",
    live: "Available",
    emptyTitle: "First apps in the forge",
    emptyBody: "We are working on our first releases. Check back soon.",
    privacy: "Privacy",
    support: "Support",
    screenshots: "Screenshots",
    website: "Website",
    publishedBy: "Published by",
    publishedOn: "Published on",
    roleDeveloper: "Studio app",
    rolePublisher: "Published",
  },
  stores: {
    "app-store": "App Store",
    "google-play": "Google Play",
  },
  footer: {
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
  },
  notFound: {
    code: "404",
    title: "This page has no rune.",
    body: "The page you are looking for does not exist or has moved.",
    back: "Back to home",
  },
};

export type Dictionary = typeof en;
