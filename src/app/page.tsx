import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import ROICalculator from "@/components/ROICalculator";
import SkillForgeEdge from "@/components/SkillForgeEdge";
import ManagerDashboardPreview from "@/components/ManagerDashboardPreview";
import ProgramModules from "@/components/ProgramModules";
import DomainExpertise from "@/components/DomainExpertise";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <ROICalculator />
      <SkillForgeEdge />
      <div id="about">
        <ManagerDashboardPreview />
      </div>
      <ProgramModules />
      <DomainExpertise />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  );
}
