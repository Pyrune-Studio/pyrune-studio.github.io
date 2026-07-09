import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Pyrune Studio" width={28} height={28} className="rounded-md" />
          <span className="text-sm font-semibold tracking-tight text-zinc-100">
            Pyrune Studio
          </span>
        </Link>
        {/* <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/apps" className="hover:text-zinc-100">
            Apps
          </Link>
        </nav> */}
      </div>
    </header>
  );
}
