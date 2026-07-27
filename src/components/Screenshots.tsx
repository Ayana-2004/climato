import Image from "next/image";

const SCREENSHOTS = [
  {
    src: "/IMG-20260721-WA0019.jpg",
    alt: "Climato home screen showing Kochi weather, 30°C and cloudy",
  },
  {
    src: "/IMG-20260721-WA0023.jpg",
    alt: "Climato weather screen for Odisha showing rain, 24°C",
  },
  {
    src: "/IMG-20260721-WA0020.jpg",
    alt: "Climato hourly forecast with AI Weather Chat and Nearby Explorer entry points",
  },
  {
    src: "/IMG-20260721-WA0021.jpg",
    alt: "Climato weather detail view with UV index and visibility",
  },
  {
    src: "/IMG-20260721-WA0022.jpg",
    alt: "Climato Nearby Explorer showing a map of nearby locations",
  },
];

export default function Screenshots() {
  return (
    <section id="app" className="relative scroll-mt-20 overflow-hidden bg-surface py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[10%] h-80 w-80 rounded-full bg-periwinkle/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-surface-foreground sm:text-4xl">
            A look inside the app
          </h2>
          <p className="mt-4 text-lg leading-[1.55] text-muted-light">
            Real screens from Climato — live weather, the AI Weather Assistant,
            and Nearby Explorer.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {SCREENSHOTS.map((shot) => (
            <div
              key={shot.src}
              className="relative mx-auto aspect-[738/1600] w-full max-w-[200px] overflow-hidden rounded-2xl border-[6px] border-white shadow-lg ring-1 ring-border"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
