import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyClimato from "@/components/WhyClimato";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import MeetSkye from "@/components/MeetSkye";
import FAQ from "@/components/FAQ";
import FaircodeInitiative from "@/components/FaircodeInitiative";
import Footer from "@/components/Footer";
import StickyDownloadBar from "@/components/StickyDownloadBar";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyClimato />
        <Features />
        <Screenshots />
        <MeetSkye />
        <FAQ />
        <FaircodeInitiative />
      </main>
      <Footer />
      <StickyDownloadBar />
    </div>
  );
}
