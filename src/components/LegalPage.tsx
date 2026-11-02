// TODO: all legal texts on this site are templates. They must be reviewed by a
// qualified professional (Irish law, GDPR) before publication.

type LegalPageProps = {
  kicker?: string;
  title: string;
  lastUpdated?: string; // ISO date
  children: React.ReactNode;
};

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function LegalPage({ kicker, title, lastUpdated, children }: LegalPageProps) {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      <header className="border-b border-line pb-8">
        {kicker && (
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            {kicker}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {lastUpdated && (
          <p className="mt-3 font-mono text-xs text-muted">
            Last updated: <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time>
          </p>
        )}
      </header>
      <div className="legal">{children}</div>
    </article>
  );
}
