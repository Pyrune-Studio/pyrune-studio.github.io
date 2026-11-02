import Image from "next/image";

// Official badge artwork. Apple asks for a height of at least 40px on screen
// and no alteration of the artwork.
const badges = {
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
  store: keyof typeof badges;
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

export function StoreBadges({
  appStoreUrl,
  googlePlayUrl,
}: {
  appStoreUrl?: string;
  googlePlayUrl?: string;
}) {
  if (!appStoreUrl && !googlePlayUrl) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {appStoreUrl && <StoreBadge store="app-store" href={appStoreUrl} />}
      {googlePlayUrl && <StoreBadge store="google-play" href={googlePlayUrl} />}
    </div>
  );
}
