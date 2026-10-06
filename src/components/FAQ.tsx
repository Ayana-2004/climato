export const FAQS = [
  {
    q: "What is Climato?",
    a: "Climato is a weather app that blends live forecast data, local conditions, and a conversational AI assistant so you can understand the weather and act on it quickly.",
  },
  {
    q: "How does Skye help with weather?",
    a: "Skye is the AI Weather Assistant built into Climato. Ask it questions in plain language, like whether to carry a jacket or what a visibility reading means for driving, and it answers using the live forecast for your location.",
  },
  {
    q: "Is Climato free to download?",
    a: "Yes. Climato is free on both the App Store and Google Play.",
  },
  {
    q: "Can I check weather for a city I don't live in?",
    a: "Yes. Search Any City lets you pull up live forecasts for any city or town in the world, not just your current location.",
  },
  {
    q: "What does Nearby Explorer do?",
    a: "It shows weather at the specific places you're headed (a workplace, a stadium, a meeting across town) with distance and walk time to each, so the forecast isn't limited to your home city.",
  },
  {
    q: "Which platforms does Climato run on?",
    a: "iOS and Android, available through the App Store and Google Play.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-surface px-6 py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_JSON_LD).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold tracking-[-0.02em] text-surface-foreground sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-12 divide-y divide-surface-border">
          {FAQS.map((item) => (
            <details key={item.q} className="faq-item group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-surface-foreground marker:content-none">
                {item.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-muted-light transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-[1.55] text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
