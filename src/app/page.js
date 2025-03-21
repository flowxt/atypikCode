import About from "@/components/About";
import BackgroundEffects from "@/components/BackgroundEffects";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero.jsx";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Services from "@/components/Service";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
