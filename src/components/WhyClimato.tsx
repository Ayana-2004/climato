const NEEDS = [
  {
    title: "Numbers without context",
    body: "A 30° cloudy day and 75% humidity don't tell you what to wear or when to leave. Climato turns raw numbers into a clear read on your day.",
    badge: "bg-sky/15 text-info-text",
    icon: <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />,
  },
  {
    title: "One more app to check",
    body: "Skye tells you before you ask (rain in twenty minutes, carry an umbrella) instead of making you dig through five screens.",
    // Skye is the AI touchpoint, so this is the one place the Skye Gradient is spent.
    badge: "bg-gradient-skye text-white",
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
  {
    title: "Weather that stops at your doorstep",
    body: "Most apps only know your city. Nearby Explorer shows conditions at the places you're actually headed, with distance and walk time.",
    badge: "bg-gold/25 text-foreground",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function WhyClimato() {
  return (
    <section id="why" className="scroll-mt-20 bg-surface px-6 py-20 sm:py-28">
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
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {NEEDS.map((need) => (
            <article
              key={need.title}
              className="flex flex-col items-start rounded-[20px] bg-background p-7 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${need.badge}`}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {need.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug tracking-[-0.015em] text-foreground">
                {need.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.6] text-muted">
                {need.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
