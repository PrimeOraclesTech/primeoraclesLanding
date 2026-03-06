import './input.css';
import {
  HeroSection,
  MarketplaceInfoSection,
  ProductsSection,
  BenefitsSection,
  JoinSection,
  EducationSection,
  FAQSection,
  PartnershipSection,
  MissionBanner,
  Footer,
} from './components/sections';

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main>
        <HeroSection />
        <MarketplaceInfoSection />
        <ProductsSection />
        <div className="w-full h-px bg-linear-to-r from-transparent via-primary/15 to-transparent" aria-hidden="true" />
        <BenefitsSection />
        <JoinSection />
        <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent" aria-hidden="true" />
        <EducationSection />
        <FAQSection />
        <div className="w-full h-px bg-linear-to-r from-transparent via-primary/15 to-transparent" aria-hidden="true" />
        <PartnershipSection />
        <MissionBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
