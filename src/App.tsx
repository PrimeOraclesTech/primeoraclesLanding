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
      <HeroSection />
      <MarketplaceInfoSection />
      <ProductsSection />
      <div className="w-full h-px bg-linear-to-r from-transparent via-primary/15 to-transparent" />
      <BenefitsSection />
      <JoinSection />
      <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <EducationSection />
      <FAQSection />
      <div className="w-full h-px bg-linear-to-r from-transparent via-primary/15 to-transparent" />
      <PartnershipSection />
      <MissionBanner />
      <Footer />
    </div>
  );
}

export default App;
