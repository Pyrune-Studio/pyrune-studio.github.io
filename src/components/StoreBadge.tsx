import Image from "next/image";
import { appStores, type App, type Store } from "@/content/apps";

// Official badge artwork. Apple asks for a height of at least 40px on screen
// and no alteration of the artwork.
const badges: Record<Store, { src: string; width: number; height: number; alt: string }> = {
  "app-store": {
    src: "/AppleStore.png",
    width: 210,
    height: 70,
    alt: "Download on the App Store",
  },
  "google-play": {
    src: "/GooglePlay.png",
    width: 235,
    height: 70,
    alt: "Get it on Google Play",
  },
};

type StoreBadgeProps = {
  store: Store;
  href: string;
};

export function StoreBadge({ store, href }: StoreBadgeProps) {
  const { src, width, height, alt } = badges[store];

  return (
    <a href={href} className="inline-block transition-opacity hover:opacity-85">
      <Image src={src} alt={alt} width={width} height={height} className="h-11 w-auto" />
    </a>
  );
}

export function StoreBadges({ app }: { app: App }) {
  const stores = appStores(app);
  if (stores.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {stores.map(({ store, url }) => (
        <StoreBadge key={store} store={store} href={url} />
      ))}
    </div>
  );
}
