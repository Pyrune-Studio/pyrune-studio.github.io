export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Pyrune Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
