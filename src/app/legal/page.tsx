import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import Content from "@/content/legal/legal.mdx";

const lastUpdated = "2026-10-29";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Company information for Pyrune Studio Limited, registered in Ireland.",
  alternates: { canonical: "/legal" },
};

export default function Page() {
  return (
    <LegalPage title="Legal Notice" lastUpdated={lastUpdated}>
      <Content />
    </LegalPage>
  );
}
