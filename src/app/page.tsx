import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import AccredianEdge from "@/components/AccredianEdge";
import ProgramModules from "@/components/ProgramModules";
import DomainExpertise from "@/components/DomainExpertise";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <AccredianEdge />
      <ProgramModules />
      <DomainExpertise />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  );
}


