import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Results from "@/components/sections/Results";
import Solution from "@/components/sections/Solution";
import HowIWork from "@/components/sections/HowIWork";
import WhoItsFor from "@/components/sections/WhoItsFor";
import ClientLogos from "@/components/sections/ClientLogos";
import AboutMe from "@/components/sections/AboutMe";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import ConversionPopup from "@/components/ConversionPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Results />
      <ClientLogos />
      <Solution />
      <HowIWork />
      <WhoItsFor />
      <AboutMe />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ConversionPopup />
    </div>
  );
};

export default Index;
