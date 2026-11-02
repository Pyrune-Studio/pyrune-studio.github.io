// Company information, used across the site (footer, legal pages, privacy policies).
// Every TODO below must be filled in before going live. See README.md.

export const company = {
  legalName: "Pyrune Studio Limited", // TODO: confirm exact registered name
  tradingName: "Pyrune Studio",
  croNumber: "TODO", // TODO: Companies Registration Office number
  vatNumber: null as string | null, // TODO: set if VAT-registered
  registeredOffice: "TODO, Ireland", // TODO: full registered office address
  email: "contact@pyrune.studio",
  domain: "pyrune.studio",
  appStoreDeveloperUrl: null as string | null, // TODO: once the first app is live
  googlePlayDeveloperUrl: null as string | null, // TODO: once the first app is live
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, United States",
    url: "https://vercel.com",
  },
};

export const siteUrl = `https://${company.domain}`;
