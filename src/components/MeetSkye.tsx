import Image from "next/image";

const PROMPTS = [
  "Will it rain before my commute?",
  "Do I need a jacket today?",
  "What does \"excellent\" visibility mean for driving?",
];

export default function MeetSkye() {
  return (
    <section id="skye" className="relative scroll-mt-20 overflow-hidden bg-background px-6 pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-[10%] h-72 w-72 rounded-full bg-periwinkle/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-20">
        <div className="relative shrink-0">
          <div className="relative aspect-[738/1600] w-56 overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl sm:w-64">
            <Image
              src="/IMG-20260721-WA0023.jpg"
              alt="Skye, Climato's AI Weather Assistant, holding an umbrella in the rain"
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.14em] text-info-text">
            Meet Skye
          </span>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            An assistant that already checked the sky
          </h2>
          <p className="mt-4 text-lg leading-[1.55] text-muted">
            Ask Skye a plain question and get a plain answer, not meteorology
            jargon. Skye reads the forecast for you and tells you what it
            means for your day.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            {PROMPTS.map((prompt) => (
              <div
                key={prompt}
                className="rounded-2xl bg-gradient-skye px-5 py-3.5 text-left text-sm font-medium text-white shadow-md sm:inline-block"
              >
                &ldquo;{prompt}&rdquo;
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
