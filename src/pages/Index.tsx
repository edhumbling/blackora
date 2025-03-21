
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

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedFufu />
      <FeaturedMenu />
      <CustomerDelight />
      <About />
      <FoodKnowledge />
      <FAQPreview />
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
};

export default Index;
