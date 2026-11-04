import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="bg-background px-6 pt-16 pb-6 sm:pt-20 sm:pb-8">
      <div className="mx-auto max-w-4xl">
        {/* A plain lift, not a pointer tilt: the tilt redrew the image on
            every mouse move and read as a glitch (Bug_027). Hover is read
            from the static wrapper so the lift can't flicker at the edge. */}
        <div className="group w-full select-none">
          <div className="relative aspect-[3072/1500] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-border transition-[translate,box-shadow] duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-2xl">
            <Image
              src="/climato-promo-banner.png"
              alt="Climato mascot lineup across sun, rain, wind, storm, and night"
              fill
              draggable={false}
              sizes="(min-width: 1024px) 896px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
