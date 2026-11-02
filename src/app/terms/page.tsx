import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import Content from "@/content/legal/terms.mdx";

const lastUpdated = "2026-10-29";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the Pyrune Studio website.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Use" lastUpdated={lastUpdated}>
      <Content />
    </LegalPage>
  );
}
