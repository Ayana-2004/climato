import Image from "next/image";
import TiltCard from "./TiltCard";

export default function PromoBanner() {
  return (
    <section className="bg-background px-6 pt-16 pb-6 sm:pt-20 sm:pb-8">
      <div className="mx-auto max-w-4xl">
        <TiltCard className="w-full">
          <div className="relative aspect-[3072/1500] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
            <Image
              src="/climato-promo-banner.png"
              alt="Climato mascot lineup across sun, rain, wind, storm, and night"
              fill
              sizes="(min-width: 1024px) 896px, 90vw"
              className="object-cover"
            />
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
