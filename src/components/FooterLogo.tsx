"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterLogo() {
  const pathname = usePathname();

  // Same as the header logo: on the home page scroll back to the top by hand,
  // since Next skips navigation when the URL already matches. Elsewhere the
  // link simply goes home.
  const toTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    event.preventDefault();
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    window.scrollTo({ top: 0, behavior });
    window.history.replaceState(null, "", "/");
  };

  return (
    <Link
      href="/"
      aria-label="Climato home"
      onClick={toTop}
      className="flex items-center gap-2.5"
    >
      <Image
        src="/climato-icon.png"
        alt=""
        width={36}
        height={36}
        className="rounded-lg"
      />
      <span className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
        Climato
      </span>
    </Link>
  );
}
