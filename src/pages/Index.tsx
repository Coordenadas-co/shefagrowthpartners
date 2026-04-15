import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import ParadigmShift from "@/components/sections/ParadigmShift";
import Solution from "@/components/sections/Solution";
import WhoItsFor from "@/components/sections/WhoItsFor";
import HowIWork from "@/components/sections/HowIWork";
import Results from "@/components/sections/Results";
import ClientLogos from "@/components/sections/ClientLogos";
import CommercialSystem from "@/components/sections/CommercialSystem";
import Methodology from "@/components/sections/Methodology";
import AboutMe from "@/components/sections/AboutMe";
import EmotionalClose from "@/components/sections/EmotionalClose";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <ParadigmShift />
      <Solution />
      <WhoItsFor />
      <HowIWork />
      <Results />
      <ClientLogos />
      <CommercialSystem />
      <Methodology />
      <AboutMe />
      <EmotionalClose />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
