"use client";

import { useRef, type ReactNode } from "react";

const MAX_TILT_DEG = 8;
const HOVER_SCALE = 1.03;

export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  // The outer element never transforms, so its rect is a stable reference.
  // Measuring the tilted element itself made the tilt feed back into the
  // pointer math and the card jittered.
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  function canTilt(e: React.PointerEvent) {
    return (
      e.pointerType === "mouse" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function apply(transform: string, transition: string) {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transition = transition;
    inner.style.transform = transform;
  }

  function handlePointerEnter(e: React.PointerEvent<HTMLDivElement>) {
    if (!canTilt(e)) return;
    apply(`scale(${HOVER_SCALE})`, "transform 250ms ease-out");
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!canTilt(e)) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const outer = outerRef.current;
      if (!outer) return;
      const rect = outer.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      apply(
        `perspective(900px) rotateX(${(-y * MAX_TILT_DEG).toFixed(2)}deg) rotateY(${(x * MAX_TILT_DEG).toFixed(2)}deg) scale(${HOVER_SCALE})`,
        "transform 80ms linear",
      );
    });
  }

  function handlePointerLeave() {
    cancelAnimationFrame(frame.current);
    apply("none", "transform 400ms ease-out");
  }

  return (
    <div
      ref={outerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onDragStart={(e) => e.preventDefault()}
      className={`select-none ${className}`}
    >
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
