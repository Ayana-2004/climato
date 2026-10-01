import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyClimato from "@/components/WhyClimato";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import PromoBanner from "@/components/PromoBanner";
import MeetSkye from "@/components/MeetSkye";
import FAQ, { FAQS } from "@/components/FAQ";
import FaircodeInitiative from "@/components/FaircodeInitiative";
import Footer from "@/components/Footer";
import StickyDownloadBar from "@/components/StickyDownloadBar";

// Same wording as the FAQ section so answer engines see one consistent answer per question.
const ANSWER_SNIPPETS = FAQS.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyClimato />
        <Features />
        <section
          aria-labelledby="answer-snippets"
          className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky">
              Quick answers
            </p>
            <h2 id="answer-snippets" className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              Questions people ask before they download Climato
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ANSWER_SNIPPETS.map((item) => (
              <article
                key={item.q}
                className="rounded-2xl border border-surface-border bg-surface p-6 text-left shadow-sm"
              >
                <h3 className="text-xl font-semibold tracking-[-0.015em] text-surface-foreground">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-muted-light">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </section>
        <Screenshots />
        <PromoBanner />
        <MeetSkye />
        <FAQ />
        <FaircodeInitiative />
      </main>
      <Footer />
      <StickyDownloadBar />
    </div>
  );
}
