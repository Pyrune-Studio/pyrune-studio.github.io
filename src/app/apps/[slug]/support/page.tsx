import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { appsWithLegalPages, getApp } from "@/content/apps";
import { company } from "@/content/company";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return appsWithLegalPages.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  return {
    title: `${app.name} Support`,
    description: `Get help with ${app.name}.`,
    alternates: { canonical: `/apps/${app.slug}/support` },
  };
}

export default async function AppSupportPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();
  const email = app.supportEmail ?? company.email;

  return (
    <LegalPage kicker={app.name} title="Support">
      <p>
        Need help with {app.name}, found a bug or have a feature idea? Write to us and
        we will get back to you, usually within two business days.
      </p>

      <h2>Contact support</h2>
      <p>
        <a href={`mailto:${email}?subject=${encodeURIComponent(`${app.name} support`)}`}>
          {email}
        </a>
      </p>
      <p>To help us answer quickly, please include:</p>
      <ul>
        <li>your device model and OS version (iOS or Android),</li>
        <li>the app version (shown in the store or in the app settings),</li>
        <li>a short description of the issue and, if possible, a screenshot.</li>
      </ul>

      <h2>Subscriptions and refunds</h2>
      <p>
        Purchases are handled by Apple or Google. To manage a subscription or request
        a refund, use the{" "}
        <a href="https://support.apple.com/en-ie/118428">App Store</a> or{" "}
        <a href="https://support.google.com/googleplay/answer/2479637">Google Play</a>{" "}
        procedures.
      </p>

      <h2>Privacy</h2>
      <p>
        Read the <Link href={`/apps/${app.slug}/privacy`}>{app.name} privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
