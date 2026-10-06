"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/#why", label: "Why Climato" },
  { href: "/#features", label: "Features" },
  { href: "/#app", label: "Screens" },
  { href: "/#skye", label: "Meet Skye" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#about", label: "About" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.split("#")[1]);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  // While a nav click is smooth-scrolling, keep the clicked item highlighted
  // instead of flicking through every section the scroll passes.
  const lockUntil = useRef(0);
  const current = pathname === "/" ? active : null;

  // Scroll spy: the active item is the last section whose top has crossed a
  // line 30% down the viewport, so manual scrolling updates the highlight too.
  useEffect(() => {
    if (pathname !== "/") return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (Date.now() < lockUntil.current) return;
      const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
      const line = headerBottom + window.innerHeight * 0.3;
      let next: string | null = null;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) next = id;
      }
      // The last section can be too short to reach the line; at the very
      // bottom of the page it is the one being read.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) next = SECTION_IDS[SECTION_IDS.length - 1];
      setActive(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Next skips navigation when the URL already matches (e.g. clicking the
  // same nav link twice), so on the home page scroll to the target by hand.
  const scrollTo = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      setOpen(false);
      return;
    }
    event.preventDefault();
    // Close the mobile menu before measuring: while open it sits in the page
    // flow and pushes every section down, so the scroll would overshoot.
    flushSync(() => setOpen(false));
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    const id = href.split("#")[1];
    const target = id ? document.getElementById(id) : null;
    setActive(id && SECTION_IDS.includes(id) ? id : null);
    lockUntil.current = Date.now() + 1000;
    window.setTimeout(() => window.dispatchEvent(new Event("scroll")), 1050);
    if (target) target.scrollIntoView({ behavior });
    else window.scrollTo({ top: 0, behavior });
    window.history.replaceState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          aria-label="Climato home"
          className="flex items-center gap-3"
          onClick={scrollTo("/")}
        >
          <Image
            src="/climato-icon.png"
            alt="Climato"
            width={44}
            height={44}
            className="rounded-xl"
          />
          <span className="font-heading text-xl font-bold tracking-[-0.02em] text-foreground">
            Climato
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex lg:gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = current === link.href.split("#")[1];
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={scrollTo(link.href)}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-full px-2 py-1.5 text-sm font-semibold transition-colors lg:px-3.5 ${
                  isActive
                    ? "bg-navy text-white"
                    : "text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#hero"
          onClick={scrollTo("/#hero")}
          className="hidden rounded-xl bg-sky px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          Get the App
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = current === link.href.split("#")[1];
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={scrollTo(link.href)}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  isActive
                    ? "bg-navy text-white"
                    : "text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#hero"
            onClick={scrollTo("/#hero")}
            className="mt-2 rounded-xl bg-sky px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get the App
          </Link>
        </nav>
      )}
    </header>
  );
}
