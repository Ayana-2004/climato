import Image from "next/image";
import StoreBadges from "./StoreBadges";
import TiltCard from "./TiltCard";
import RainCursor from "./RainCursor";

function CloudShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M50 90c-16 0-29-13-29-29 0-14 10-26 24-28 5-16 20-27 37-27 20 0 37 14 40 33 14 2 25 14 25 28 0 16-13 29-29 29H50z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative scroll-mt-20 overflow-hidden bg-gradient-sky">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-periwinkle/40 blur-3xl" />
        <CloudShape className="animate-cloud-1 absolute top-12 h-16 w-28 text-white/30 sm:h-20 sm:w-32" />
        <CloudShape className="animate-cloud-2 absolute top-1/3 h-14 w-24 text-white/20 sm:h-16 sm:w-28" />
        <CloudShape className="animate-cloud-3 absolute top-24 hidden h-24 w-40 text-white/20 sm:block" />
        <CloudShape className="animate-cloud-4 absolute bottom-20 h-16 w-28 text-white/25 sm:h-20 sm:w-32" />
        <CloudShape className="animate-cloud-5 absolute bottom-8 hidden h-28 w-48 text-white/15 lg:block" />
        <CloudShape className="animate-cloud-6 absolute top-1/2 h-12 w-20 text-white/20" />
      </div>
      <RainCursor />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 sm:py-28 lg:flex-row lg:justify-between lg:py-14">
        <div className="max-w-xl text-center lg:text-left">
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.14em] text-white/80">
            Weather explained
          </span>
          <h1 className="text-4xl font-bold tracking-[-0.022em] text-white sm:text-5xl">
            {/* The line break does the work of punctuation; headlines carry none. */}
            <span className="block">Weather that doesn&apos;t just show data</span>
            {" "}
            <span className="block">It guides you</span>
          </h1>
          <p className="mt-5 text-lg leading-[1.55] text-white/85">
            Climato brings together live conditions, city search anywhere in the
            world, and Skye, your AI Weather Assistant, so you know what the
            forecast actually means for your day.
          </p>
          <div id="download" className="scroll-mt-20">
            <StoreBadges className="mt-8 justify-center lg:justify-start" />
          </div>
        </div>
        <TiltCard className="relative shrink-0">
          <div className="relative aspect-[738/1600] w-64 overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl lg:w-[min(16rem,calc((100svh-14.5rem)*0.46))]">
            <Image
              src="/IMG-20260721-WA0019.jpg"
              alt="Climato home screen showing Kochi weather, 30°C and cloudy"
              fill
              sizes="256px"
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl">
            <span aria-hidden="true">☔</span>
            <span className="text-sm font-medium text-foreground">
              Skye: Carry an umbrella today
            </span>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
