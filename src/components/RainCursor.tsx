"use client";

import { useEffect, useRef, useState } from "react";

type Drop = { id: number; x: number; y: number };

let dropId = 0;

export default function RainCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [drops, setDrops] = useState<Drop[]>([]);
  const lastSpawn = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = containerRef.current?.closest("section");
    if (!section) return;

    function handleMouseMove(e: MouseEvent) {
      const now = Date.now();
      if (now - lastSpawn.current < 80) return;
      lastSpawn.current = now;

      const rect = section!.getBoundingClientRect();
      const id = ++dropId;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setDrops((prev) => [...prev.slice(-20), { id, x, y }]);
      window.setTimeout(() => {
        setDrops((prev) => prev.filter((drop) => drop.id !== id));
      }, 850);
    }

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      {drops.map((drop) => (
        <span
          key={drop.id}
          aria-hidden="true"
          className="rain-drop absolute h-4 w-[2px] rounded-full bg-white/70"
          style={{
            left: drop.x,
            top: drop.y,
            animation: "rain-fall 0.85s linear forwards",
          }}
        />
      ))}
    </div>
  );
}
