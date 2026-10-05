const FEATURES = [
  {
    title: "Live Local Weather",
    description:
      "Live temperature, humidity, rain, wind, UV index, and visibility for exactly where you are, updated as conditions change.",
    dot: "bg-sky",
  },
  {
    title: "Search Any City",
    description:
      "Look up forecasts for any city or town in the world, instantly.",
    dot: "bg-periwinkle",
  },
  {
    title: "Chat with Skye",
    description:
      "Ask Skye, your AI Weather Assistant, to explain the forecast, not just report it.",
    isAI: true,
    dot: "bg-gradient-skye",
  },
  {
    title: "Favorites List",
    description:
      "Pin the cities you check often and get their weather at a glance.",
    dot: "bg-gold",
  },
  {
    title: "Nearby Explorer",
    description:
      "See weather for nearby towns, workplaces, and landmarks, with distance and walk time to each.",
    dot: "bg-charcoal",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-16 pb-10 sm:pt-20 sm:pb-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Everything you need to read the sky
        </h2>
        <p className="mt-4 text-lg leading-[1.55] text-muted">
          Climato pairs accurate forecasting with an assistant that helps you
          act on it.
        </p>
      </div>
      {/* Flex-wrap, not grid, so the odd last row centers instead of leaving an empty slot. */}
      <div className="mt-14 flex flex-wrap justify-center gap-6">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="w-full rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground transition-shadow hover:shadow-lg sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <div className="mb-4 flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${feature.dot}`}
              />
              <h3 className="text-base font-semibold tracking-[-0.015em]">
                {feature.title}
              </h3>
            </div>
            <p className="mt-2 text-sm leading-[1.55] text-muted-light">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
