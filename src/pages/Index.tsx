import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Results from "@/components/sections/Results";
import Solution from "@/components/sections/Solution";
import HowIWork from "@/components/sections/HowIWork";
import WhoItsFor from "@/components/sections/WhoItsFor";
import ClientLogos from "@/components/sections/ClientLogos";
import AboutMe from "@/components/sections/AboutMe";
import Stack from "@/components/sections/Stack";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";
import LeadMagnetCTA from "@/components/sections/LeadMagnetCTA";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Problem />
      <LeadMagnetCTA />
      <Results />
      <ClientLogos />
      <Solution />
      <HowIWork />
      <WhoItsFor />
      <Stack />
      <FAQ />
      <FinalCTA />
      <Footer />
      <LeadMagnetPopup />
      <StickyCTA />
    </div>
  );
};

export default Index;
