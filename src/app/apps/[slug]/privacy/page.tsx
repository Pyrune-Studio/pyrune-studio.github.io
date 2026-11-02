import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { apps, getApp } from "@/content/apps";
import { company } from "@/content/company";

// TODO: template generated from src/content/apps.ts. Have it reviewed by a
// professional before publishing, and keep `dataCollected` / `thirdPartyServices`
// in sync with the App Store privacy labels and the Google Play data safety form.

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  return {
    title: `${app.name} Privacy Policy`,
    description: `How ${app.name} handles your personal data.`,
    alternates: { canonical: `/apps/${app.slug}/privacy` },
  };
}

export default async function AppPrivacyPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();

  const email = app.supportEmail ?? company.email;
  const collectsData = app.dataCollected.length > 0;
  const hasServices = app.thirdPartyServices.length > 0;

  return (
    <LegalPage
      kicker={app.name}
      title="Privacy Policy"
      lastUpdated={app.privacyLastUpdated}
    >
      <p>
        This policy explains how the {app.name} mobile app (the “App”) handles
        personal data, in accordance with the EU General Data Protection
        Regulation (GDPR) and the Irish Data Protection Acts 1988–2018.
      </p>

      <h2>1. Data controller</h2>
      <p>
        {company.legalName}, a company registered in Ireland. Contact:{" "}
        <a href={`mailto:${email}`}>{email}</a>. Full company details are on the{" "}
        <Link href="/legal">legal notice</Link>.
      </p>

      <h2>2. Data we collect</h2>
      {collectsData ? (
        <>
          <p>The App processes the following categories of data:</p>
          <ul>
            {app.dataCollected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>
          The App does not collect, store or share any personal data. Everything you
          create in the App stays on your device.
        </p>
      )}
      <p>
        If you contact us by email, we process your email address and the content of
        your message in order to answer you.
      </p>

      <h2>3. Purposes and legal bases</h2>
      <ul>
        <li>
          <strong>Providing the App and its features</strong>: performance of a
          contract (Art. 6(1)(b) GDPR).
        </li>
        <li>
          <strong>Answering support requests</strong>: our legitimate interest in
          helping our users (Art. 6(1)(f) GDPR).
        </li>
        {hasServices && (
          <li>
            <strong>Services listed in section 5</strong>: the legal basis stated for
            each purpose; where consent is required, we ask for it in the App and you
            may withdraw it at any time (Art. 6(1)(a) GDPR).
          </li>
        )}
      </ul>

      <h2>4. Retention</h2>
      <p>
        We keep personal data only as long as necessary for the purposes above. Support
        emails are deleted no later than 24 months after the last exchange. Data stored
        on your device is deleted when you uninstall the App.
      </p>

      <h2>5. Processors and third-party services</h2>
      {hasServices ? (
        <>
          <p>The App relies on the following services, which act as processors:</p>
          <ul>
            {app.thirdPartyServices.map((service) => (
              <li key={service.name}>
                <strong>{service.name}</strong>: {service.purpose} (
                <a href={service.privacyUrl}>privacy policy</a>)
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>The App does not use any third-party analytics, advertising or tracking SDK.</p>
      )}
      <p>
        Purchases and downloads are handled by Apple (App Store) and Google (Google
        Play) under their own privacy policies.
      </p>

      <h2>6. Transfers outside the EU</h2>
      <p>
        Where a processor is located outside the European Economic Area, transfers are
        covered by an adequacy decision (such as the EU–US Data Privacy Framework) or
        by the European Commission&rsquo;s Standard Contractual Clauses.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You have the right to access, rectify and erase your data, to restrict or object
        to its processing, and to data portability. Where processing relies on consent,
        you may withdraw it at any time. To exercise these rights, write to{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <h2>8. Complaints</h2>
      <p>
        You can lodge a complaint with the Irish{" "}
        <a href="https://www.dataprotection.ie">Data Protection Commission</a> or with
        the supervisory authority of your country of residence.
      </p>

      <h2>9. Children</h2>
      <p>
        The App is not directed at children under 16 and we do not knowingly collect
        their personal data.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this policy. The date at the top of the page shows the latest
        revision. See also the <Link href="/privacy">studio privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
