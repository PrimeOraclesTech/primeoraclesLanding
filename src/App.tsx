import './output.css';
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
      <BenefitsSection />
      <JoinSection />
      <EducationSection />
      <FAQSection />
      <PartnershipSection />
      <MissionBanner />
      <Footer />
    </div>
  );
}

export default App;
