
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedFufu from "@/components/FeaturedFufu";
import FeaturedMenu from "@/components/FeaturedMenu";
import CustomerDelight from "@/components/CustomerDelight";
import About from "@/components/About";
import FoodKnowledge from "@/components/FoodKnowledge";
import FAQPreview from "@/components/FAQPreview";
import Footer from "@/components/Footer";
import WaakyeFeature from "@/components/WaakyeFeature";
import SpecialOffers from "@/components/SpecialOffers";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedFufu />
      <WaakyeFeature />
      <FeaturedMenu />
      <CustomerDelight />
      <About />
      <FoodKnowledge />
      <SpecialOffers />
      <FAQPreview />
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
};

export default Index;
