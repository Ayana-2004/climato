"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, sectionScrollTop } from "./nav";

export default function FooterNav() {
  const pathname = usePathname();

  // Same scrolling as the header: on the home page scroll by hand so a repeat
  // click still works and the section lands fully in view.
  const scrollTo = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    const target = document.getElementById(href.split("#")[1]);
    if (!target) return;
    event.preventDefault();
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    window.scrollTo({ top: sectionScrollTop(target), behavior });
    window.history.replaceState(null, "", href);
  };

  return (
    <nav aria-label="Footer">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-info-text">
        Explore
      </p>
      <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={scrollTo(link.href)}
              className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
