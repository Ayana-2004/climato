import Image from "next/image";
import Link from "next/link";
import StoreBadges from "./StoreBadges";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-12 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2.5">
            <Image
              src="/climato-icon.png"
              alt=""
              width={36}
              height={36}
              className="rounded-lg"
            />
            <p className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
              Climato
            </p>
          </div>
          <p className="mt-2 text-sm text-muted">
            Weather that guides you, not just data.
          </p>
          <a
            href="https://www.faircodetech.com"
            className="mt-3 inline-block text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            www.faircodetech.com
          </a>
          {/* Same contact address the Privacy Policy and Terms publish. */}
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-info-text">
            Contact
          </p>
          <a
            href="mailto:hello@faircodetech.com"
            className="mt-1 inline-block text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            hello@faircodetech.com
          </a>
        </div>
        <FooterNav />
        <StoreBadges />
      </div>
      <div className="border-t border-border py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center sm:flex-row sm:justify-between">
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
      </div>
    </footer>
  );
}
