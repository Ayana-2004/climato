const FEATURES = [
  {
    title: "Live Local Weather",
    description:
      "Real-time temperature, humidity, rain, wind, UV index, and visibility for exactly where you are.",
  },
  {
    title: "Search Any City",
    description:
      "Look up forecasts for any city or town in the world, instantly.",
  },
  {
    title: "Chat with Skye",
    description:
      "Ask Skye, your AI Weather Assistant, to explain the forecast, not just report it.",
  },
  {
    title: "Favorites List",
    description:
      "Pin the cities you check often and get their weather at a glance.",
  },
  {
    title: "Nearby Explorer",
    description:
      "See weather for nearby towns, workplaces, and landmarks, with distance and walk time to each.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Everything you need to read the sky
        </h2>
        <p className="mt-4 text-lg leading-[1.55] text-muted">
          Climato pairs accurate forecasting with an assistant that helps you
          act on it.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground transition-shadow hover:shadow-lg"
          >
            <div className="mb-4 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-sky-deep"
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
