import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.tradingName}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-3 max-w-md text-muted">
        Questions, partnerships or press:
      </p>

      <a
        href={`mailto:${company.email}`}
        className="mt-10 inline-block break-all text-2xl font-medium tracking-tight text-accent underline decoration-line underline-offset-8 transition-colors hover:decoration-accent sm:text-4xl"
      >
        {company.email}
      </a>

      <dl className="mt-16 grid gap-6 border-t border-line pt-8 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-muted">
            Company
          </dt>
          <dd className="mt-2 text-muted">
            Registration details are on the{" "}
            <Link href="/legal" className="text-accent underline underline-offset-4">
              legal notice
            </Link>
            .
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-muted">
            App support
          </dt>
          <dd className="mt-2 text-muted">
            Each app has its own support page, linked from its page in the Apps
            section.
          </dd>
        </div>
      </dl>
    </div>
  );
}
