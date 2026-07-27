const NEEDS = [
  {
    title: "Numbers without context",
    body: "A 30° cloudy day and 75% humidity don't tell you what to wear or when to leave. Climato turns raw numbers into a clear read on your day.",
  },
  {
    title: "One more app to check",
    body: "Skye tells you before you ask — rain in twenty minutes, carry an umbrella — instead of making you dig through five screens.",
  },
  {
    title: "Weather that stops at your doorstep",
    body: "Most apps only know your city. Nearby Explorer shows conditions at the places you're actually headed, with distance and walk time.",
  },
];

export default function WhyClimato() {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Why you need Climato
          </h2>
          <p className="mt-4 text-lg leading-[1.55] text-muted">
            Weather apps show data. Climato tells you what to actually do with
            it.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {NEEDS.map((need) => (
            <div key={need.title}>
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 rounded-full bg-sky-deep"
              />
              <h3 className="mt-3 text-base font-semibold tracking-[-0.015em] text-foreground">
                {need.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.55] text-muted">
                {need.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
