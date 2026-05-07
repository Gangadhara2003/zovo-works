import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import BentoGrid from "./components/BentoGrid";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <BentoGrid />
        <Features />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
