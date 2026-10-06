"use client";

import { useEffect, useRef, useState } from "react";
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

export default function Screenshots() {
  const row = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Reveal the cards once, the first time the row scrolls into view.
  useEffect(() => {
    const el = row.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="app" className="relative scroll-mt-20 overflow-hidden bg-surface py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[10%] h-80 w-80 rounded-full bg-periwinkle/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-surface-foreground sm:text-4xl">
            A look inside Climato
          </h2>
          <p className="mt-4 text-lg leading-[1.55] text-muted-light">
            Live weather, the AI Weather Assistant, and Nearby Explorer,
            wrapped in Climato&apos;s own personality.
          </p>
        </div>
        {/* All five screens in one even row on desktop; on narrower screens
            they wrap into centered rows instead of scrolling sideways. */}
        <div
          ref={row}
          className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-5"
        >
          {SCREENSHOTS.map((shot, i) => (
            <div
              key={shot.src}
              className={`screen-reveal w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-5rem)/5)] ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className="animate-screen-float"
                style={{ animationDelay: `${i * -1.2}s` }}
              >
                <TiltCard>
                  <div className="relative aspect-[1512/2688] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 30vw, 46vw"
                      quality={90}
                      className="object-cover"
                    />
                  </div>
                </TiltCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
