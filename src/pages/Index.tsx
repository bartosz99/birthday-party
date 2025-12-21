import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import CountdownSection from "@/components/CountdownSection";
import LocationSection from "@/components/LocationSection";
import GuestListSection from "@/components/GuestListSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated particle background */}
      <ParticleBackground />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <CountdownSection />
        <InfoSection />
        <LocationSection />
        <GuestListSection />
        <FooterSection />
      </main>

      {/* Fixed gradient overlay at edges */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </div>
  );
};

export default Index;
