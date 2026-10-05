"use client";

import { useRef } from "react";
import Image from "next/image";
import TiltCard from "./TiltCard";

const SCREENSHOTS = [
  {
    src: "/climato-promo-01.png",
    alt: "Climato friendly notification: Skye telling John a drizzle can take a holiday",
  },
  {
    src: "/climato-promo-02.png",
    alt: "Climato witty, conversational chat with Skye about today's rain",
  },
  {
    src: "/climato-promo-03.png",
    alt: "Climato advanced feature: exploring weather at nearby spots on a map",
  },
  {
    src: "/climato-promo-04.png",
    alt: "Climato manage locations screen for chasing weather across cities",
  },
  {
    src: "/climato-promo-05.png",
    alt: "Climato future weather forecast for Gujarat and California",
  },
];

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

export default function Screenshots() {
  const track = useRef<HTMLDivElement>(null);

  function scrollByCard(dir: 1 | -1) {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: "smooth" });
  }

  return (
    <section id="app" className="relative scroll-mt-20 overflow-hidden bg-surface py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[10%] h-80 w-80 rounded-full bg-periwinkle/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-surface-foreground sm:text-4xl">
            A look inside Climato
          </h2>
          <p className="mt-4 text-lg leading-[1.55] text-muted-light">
            Live weather, the AI Weather Assistant, and Nearby Explorer,
            wrapped in Climato&apos;s own personality. Swipe or use the arrows
            to see every screen.
          </p>
        </div>
      </div>
      <div className="relative mt-12">
        {/* Swipeable row: cards stay large enough to read instead of
            shrinking to fit five across. */}
        <div
          ref={track}
          // Full-bleed track; the side padding lines the first card up with the page content.
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.5rem,calc((100%-72rem)/2+1.5rem))] py-6 scroll-px-[max(1.5rem,calc((100%-72rem)/2+1.5rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SCREENSHOTS.map((shot) => (
            <TiltCard
              key={shot.src}
              className="w-[68%] max-w-[280px] shrink-0 snap-start sm:w-[260px] lg:w-[280px]"
            >
              <div className="relative aspect-[1512/2688] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 260px, 68vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
            </TiltCard>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-3">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => scrollByCard(dir)}
              aria-label={dir === -1 ? "Previous screen" : "Next screen"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground shadow-sm ring-1 ring-border transition hover:text-info-text hover:shadow-md"
            >
              <Arrow dir={dir === -1 ? "left" : "right"} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
