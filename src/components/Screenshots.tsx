import Image from "next/image";

const SCREENSHOTS = [
  {
    src: "/IMG-20260721-WA0019.jpg",
    alt: "Climato home screen showing Kochi weather, 30°C and cloudy",
    caption: "Live local weather",
  },
  {
    src: "/IMG-20260721-WA0020.jpg",
    alt: "Climato hourly forecast with AI Weather Chat and Nearby Explorer entry points",
    caption: "Hourly forecast",
  },
  {
    src: "/IMG-20260721-WA0021.jpg",
    alt: "Climato weather detail view with UV index and visibility",
    caption: "UV & visibility detail",
  },
  {
    src: "/IMG-20260721-WA0022.jpg",
    alt: "Climato Nearby Explorer showing a map of nearby locations",
    caption: "Nearby Explorer",
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
        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-10">
          {SCREENSHOTS.map((shot) => (
            <div key={shot.src} className="w-36 shrink-0 text-center sm:w-44">
              <div className="relative aspect-[738/1600] w-full overflow-hidden rounded-2xl border-[6px] border-white shadow-lg ring-1 ring-border">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 640px) 176px, 144px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-light">
                {shot.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
