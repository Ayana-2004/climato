const PARAGRAPHS = [
  `Climato started from a simple frustration: most weather apps hand you a
  wall of numbers and expect you to do the interpreting. A 30 degree cloudy
  reading in Kochi and a 24 degree rainy one in Odisha can look almost
  identical on a chart, but they call for completely different mornings.
  Climato reads that difference for you.`,
  `At the center of the app is Skye, an AI Weather Assistant that behaves
  less like a chatbot and more like someone who already checked the sky
  before you asked. Ask Skye whether it will rain before your commute,
  whether to carry a jacket, or what an "excellent" visibility reading
  actually means for driving, and Skye answers in plain language, not
  meteorology jargon.`,
  `Climato does not stop at your own city either. Nearby Explorer maps the
  weather at the places you are actually headed, a stadium two kilometers
  away, a meeting across town, complete with walking distance and time, so
  the forecast follows your day instead of stopping at your doorstep.`,
];

export default function AboutApp() {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          What Climato actually does
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-[1.55] text-muted">
          {PARAGRAPHS.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
