import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Numbers",
};

export default function NumbersAppPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-brand-light">Pyrune Studio</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-100">
        Numbers
      </h1>
      <p className="mt-4 max-w-xl text-zinc-400">
        A focused daily numbers activity. Numbers is currently in
        development — check back soon for links to the App Store and Google
        Play.
      </p>
      <div className="mt-10 flex gap-6 text-sm">
        <Link href="/apps/numbers/privacy" className="text-brand-light hover:underline">
          Privacy Policy
        </Link>
        <Link href="/apps/numbers/terms" className="text-brand-light hover:underline">
          Terms of Use
        </Link>
      </div>
    </div>
  );
}
