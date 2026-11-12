import type { MetadataRoute } from "next";
import { company } from "@/content/company";
import { getDictionary } from "@/i18n";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.tradingName,
    short_name: "Pyrune",
    description: getDictionary().hero.subtitle,
    start_url: "/",
    display: "browser",
    background_color: "#0a0d1f",
    theme_color: "#2535a0",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
