# Pyrune Studio website

Showcase and compliance site for Pyrune Studio Limited, served at [pyrune.studio](https://pyrune.studio).

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · MDX · hosted on Vercel. Every page is prerendered at build time: no database, no backend, no cookies.

## Run locally

Requires Node.js 20.9+ and pnpm (the version is pinned in `package.json`).

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build, must pass with no error or warning
pnpm lint
```

## Project structure

```
src/
  content/
    company.ts        Company information (name, CRO, address, email…)
    apps.ts           List of apps
    legal/*.mdx       Legal notice, privacy policy, terms of use
  i18n/en.ts          UI copy (hero tagline, labels, 404…)
  app/                Routes, metadata, sitemap, robots, icons, OG image
  components/         Header, Footer, AppCard, StoreBadge, LegalPage, RuneMark…
public/
  apps/               App icons
  AppleStore.png      Official store badges
  GooglePlay.png
```

## Edit the content

| What | Where |
|---|---|
| Company details | [`src/content/company.ts`](src/content/company.ts) |
| Apps | [`src/content/apps.ts`](src/content/apps.ts) |
| Hero tagline, subtitle, UI labels | [`src/i18n/en.ts`](src/i18n/en.ts) |
| Legal notice / privacy policy / terms | [`src/content/legal/`](src/content/legal/) |
| "Last updated" date of a legal page | `lastUpdated` in `src/app/{legal,privacy,terms}/page.tsx` |
| Per-app privacy and support templates | `src/app/apps/[slug]/{privacy,support}/page.tsx` |

Company values (name, CRO, address, email) are injected into the pages from `company.ts`: never type them by hand in the MDX files.

The CRO number and registered office are shown on `/legal` only, as required by section 151 of the Companies Act 2014.

## Add an app

1. Add the icon to `public/apps/` (square PNG, 512×512 or more).
2. Add an entry to `apps` in `src/content/apps.ts`:

```ts
{
  slug: "my-app",                 // URL: /apps/my-app. Do not change it once
                                  // the privacy URL has been given to a store.
  name: "My App",
  tagline: "One short sentence.",
  description: "A short paragraph.",
  icon: "/apps/my-app.png",
  status: "coming-soon",          // or "live"
  role: "developer",              // "developer": built by Pyrune Studio
                                  // "publisher": built by a third party, published by Pyrune Studio
  websiteUrl: "https://…",        // optional
  appStoreUrl: "https://…",       // optional: only the stores filled in are shown
  googlePlayUrl: "https://…",     // optional
  hideLegalPages: false,          // true if privacy and support live on the app's own website
  supportEmail: "…",              // optional, defaults to company.email
  dataCollected: [],              // e.g. ["Email address, to create an account"]
  thirdPartyServices: [],         // e.g. [{ name: "Firebase", purpose: "Crash reports", privacyUrl: "https://…" }]
  privacyLastUpdated: "2026-11-02",
}
```

Each app gets `/apps/[slug]`, and unless `hideLegalPages` is `true`:

- `/apps/[slug]/privacy`: privacy policy generated from `dataCollected` and `thirdPartyServices`. This is the URL to give to Apple and Google.
- `/apps/[slug]/support`: the "Support URL" required by the App Store.

Keep `dataCollected` and `thirdPartyServices` consistent with the App Store privacy labels and the Google Play Data safety form.

## Deploy (Vercel + Cloudflare DNS)

The DNS stays at Cloudflare, where Email Routing handles `contact@pyrune.studio`.

1. Push the repo to GitHub and import it in [Vercel](https://vercel.com/new). The framework (Next.js) and pnpm are detected automatically, so leave the build settings at their defaults. The production branch is `main`, and every other branch or PR gets a preview URL.
2. In Vercel, go to Project > Settings > Domains and add `pyrune.studio` and `www.pyrune.studio`. Set `www` to redirect to `pyrune.studio`.
3. In Cloudflare > DNS, create the records Vercel displays: an `A` record for `pyrune.studio` and a `CNAME` for `www`. Set them to **DNS only (grey cloud)**, not proxied.
4. **Do not** move the nameservers to Vercel.
5. **Do not** touch the existing MX, SPF, DKIM and DMARC records.
6. Wait for Vercel to show both domains as valid. The SSL certificate is issued automatically.
7. Once the site is live on `pyrune.studio`, disable GitHub Pages in the repository settings, because the former version is still served there.

After going live:

- Verify `pyrune.studio` in Google Search Console with a DNS TXT record in Cloudflare, and submit `https://pyrune.studio/sitemap.xml`.
- Send a test email to `contact@pyrune.studio` to check the email routing.
- Analytics: if needed later, use Vercel Analytics, which uses no cookies, so no cookie banner is required. Then update the privacy policy.

## Remaining TODOs

- [ ] `company.ts`: `vatNumber`, if the company becomes VAT-registered.
- [ ] `company.ts`: `appStoreDeveloperUrl` / `googlePlayDeveloperUrl`, the developer pages (shown in the footer).
- [ ] Legal texts (`src/content/legal/*.mdx` and the per-app privacy template) to be reviewed by a professional before publication.
- [ ] Every app in `apps.ts` has a tagline, a description and accurate `dataCollected` / `thirdPartyServices`.
