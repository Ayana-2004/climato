import Link from "next/link";
import StoreBadges from "./StoreBadges";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-heading text-sm font-semibold text-foreground">
            Climato
          </p>
          <p className="mt-1 text-sm text-muted">
            Weather that guides you, not just data.
          </p>
          <a
            href="https://www.faircodetech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            www.faircodetech.com
          </a>
        </div>
        <StoreBadges />
      </div>
      <div className="flex flex-col items-center gap-3 border-t border-border px-6 py-6 text-center sm:flex-row sm:justify-between">
        <p className="text-xs text-muted-light">
          © {new Date().getFullYear()} Faircode. Climato is a Faircode
          product.
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-light">
          <Link href="/privacy" className="hover:text-foreground hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
