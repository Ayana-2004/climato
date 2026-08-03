"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#why", label: "Why Climato" },
  { href: "/#features", label: "Features" },
  { href: "/#app", label: "Screens" },
  { href: "/#skye", label: "Meet Skye" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/#hero" className="flex items-center gap-3" onClick={() => setOpen(false)}>
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

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#download"
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-muted hover:bg-surface hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#download"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-sky px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get the App
          </Link>
        </nav>
      )}
    </header>
  );
}
