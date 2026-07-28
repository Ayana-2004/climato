import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyClimato from "@/components/WhyClimato";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import AboutApp from "@/components/AboutApp";
import FaircodeInitiative from "@/components/FaircodeInitiative";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyClimato />
        <Features />
        <Screenshots />
        <AboutApp />
        <FaircodeInitiative />
      </main>
      <Footer />
    </div>
  );
}
