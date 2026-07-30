"use client";

import { useEffect, useState } from "react";
import { APP_STORE_URL, PLAY_STORE_URL } from "./StoreBadges";

export default function StickyDownloadBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-96px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur transition-transform duration-200 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <span className="text-sm font-semibold text-foreground">
          Get Climato
        </span>
        <div className="flex items-center gap-2">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-foreground px-3 py-2 text-xs font-semibold text-background"
          >
            App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-foreground"
          >
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
