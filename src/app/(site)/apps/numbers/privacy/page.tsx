import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Numbers — Privacy Policy",
};

const LAST_UPDATED = "July 7, 2026";
const CONTACT_EMAIL = "pyrune.studio@gmail.com";

export default function NumbersPrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
        Privacy Policy — Numbers
      </h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: {LAST_UPDATED}</p>

      <div className="mt-8 flex flex-col gap-6 text-zinc-400">
        <p>
          Numbers is developed by Pyrune Studio (&quot;we&quot;, &quot;us&quot;). This policy
          explains what happens to your data when you use the app.
        </p>

        <section>
          <h2 className="font-medium text-zinc-100">No account required</h2>
          <p className="mt-1">
            Numbers does not require you to create an account and does not
            collect your name, email address, or any other personal
            identifier.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-zinc-100">Data stored on your device</h2>
          <p className="mt-1">
            Your progress and settings are stored locally on your device only.
            We do not have access to this data and it is never sent to our
            servers.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-zinc-100">No analytics or tracking</h2>
          <p className="mt-1">
            Numbers does not currently use any analytics, advertising, or
            crash-reporting tools, and does not track you across apps or
            websites.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-zinc-100">Changes to this policy</h2>
          <p className="mt-1">
            If we add features that change how data is handled (for example,
            optional cloud sync), we will update this policy before that
            change ships and update the date above.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-zinc-100">Contact</h2>
          <p className="mt-1">
            Questions about this policy? Email{" "}
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
