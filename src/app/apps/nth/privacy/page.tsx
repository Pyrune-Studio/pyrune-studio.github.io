import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import Content from "@/content/legal/nth/privacy.mdx";

// Hand-written policy (Nth processes purchase data through RevenueCat and its Founders
// server), so the app opts out of the generated /apps/[slug]/privacy (hideLegalPages).
const lastUpdated = "2026-11-19";

export const metadata: Metadata = {
  title: "Nth Privacy Policy",
  description: "How the Nth app handles your personal data.",
  alternates: { canonical: "/apps/nth/privacy" },
};

export default function Page() {
  return (
    <LegalPage kicker="Nth" title="Privacy Policy" lastUpdated={lastUpdated}>
      <Content />
    </LegalPage>
  );
}
