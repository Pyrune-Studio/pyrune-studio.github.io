import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import Content from "@/content/legal/nth/terms.mdx";

const lastUpdated = "2026-11-19";

export const metadata: Metadata = {
  title: "Nth Terms of Use",
  description: "Terms governing the use of the Nth app and its in-app purchases.",
  alternates: { canonical: "/apps/nth/terms" },
};

export default function Page() {
  return (
    <LegalPage kicker="Nth" title="Terms of Use" lastUpdated={lastUpdated}>
      <Content />
    </LegalPage>
  );
}
