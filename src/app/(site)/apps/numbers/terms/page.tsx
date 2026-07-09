import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Numbers — Terms of Use",
};

const LAST_UPDATED = "July 7, 2026";
const CONTACT_EMAIL = "pyrune.studio@gmail.com";

export default function NumbersTermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
        Terms of Use — Numbers
      </h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: {LAST_UPDATED}</p>

      <div className="mt-8 flex flex-col gap-6 text-zinc-400">
        <p>
          These terms govern your use of Numbers, an app developed by Pyrune
          Studio (&quot;we&quot;, &quot;us&quot;). By downloading or using the app, you agree to
          these terms.
        </p>

        <section>
          <h2 className="font-medium text-zinc-100">Use of the app</h2>
          <p className="mt-1">
            We grant you a personal, non-exclusive, non-transferable license
            to use Numbers on devices you own or control, for personal,
            non-commercial purposes.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-zinc-100">Availability</h2>
          <p className="mt-1">
            Numbers is under active development. Features may change, and the
            app may be updated, interrupted, or discontinued at any time
            without notice.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-zinc-100">No warranty</h2>
          <p className="mt-1">
            Numbers is provided &quot;as is&quot;, without warranties of any kind. We
            do not guarantee the app will be error-free or uninterrupted.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-zinc-100">Limitation of liability</h2>
          <p className="mt-1">
            To the extent permitted by law, Pyrune Studio is not liable for
            any indirect or consequential damages arising from your use of
            the app.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-zinc-100">Changes to these terms</h2>
          <p className="mt-1">
            We may update these terms as the app evolves. Continued use of
            the app after changes means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-zinc-100">Contact</h2>
          <p className="mt-1">
            Questions about these terms? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-light hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
