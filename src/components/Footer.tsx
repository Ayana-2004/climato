import Image from "next/image";
import StoreBadges from "./StoreBadges";

export default function Footer() {
  return (
    <footer className="bg-sky-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-white">Climato</p>
          <p className="mt-1 text-sm text-white/80">
            Weather that guides you, not just data. A Faircode product.
          </p>
          <a
            href="mailto:hello@faircodetech.com"
            className="mt-3 inline-block text-sm text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            hello@faircodetech.com
          </a>
        </div>
        <StoreBadges />
      </div>
      <div className="flex flex-col items-center gap-3 bg-[#141922] px-6 py-8 text-center">
        <a
          href="https://faircodetech.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Faircode's website"
        >
          <Image src="/Faircode.webp" alt="Faircode" width={140} height={36} />
        </a>
        <p className="text-xs text-white/70">
          © {new Date().getFullYear()} Faircode. Climato is a Faircode
          product.
        </p>
      </div>
    </footer>
  );
}
