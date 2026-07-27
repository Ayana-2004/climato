import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center px-6 py-5 sm:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/climato-icon.png"
            alt="Climato"
            width={56}
            height={56}
            className="rounded-xl"
          />
          <span className="font-heading text-2xl font-bold tracking-[-0.02em] text-foreground">
            Climato
          </span>
        </div>
      </div>
    </header>
  );
}
