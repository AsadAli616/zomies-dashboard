import HeroSection from "@/components/HeroSection";
import KPISection from "@/components/KPISection";
import DashboardWidgets from "@/components/DashboardWidgets";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <KPISection />
        <DashboardWidgets />
      </main>
    </div>
  );
};

export default Index;
