import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
      <Image src="/logo.png" alt="Pyrune Studio" width={64} height={64} className="rounded-xl" />
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
        Pyrune Studio
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-200">
        Build and Distribute amazing mobile apps to the world.
      </p>
      <p className="max-w-xl text-lg leading-8 text-brand-yellow">
        🚧 Studio under construction... 🚧
      </p>
      {/* <Link
        href="/apps"
        className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-light"
      >
        See our apps
      </Link> */}
    </div>
  );
}
