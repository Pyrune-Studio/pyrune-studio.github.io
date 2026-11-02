import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import Content from "@/content/legal/privacy.mdx";

const lastUpdated = "2026-10-29";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pyrune Studio handles personal data.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={lastUpdated}>
      <Content />
    </LegalPage>
  );
}
