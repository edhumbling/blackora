
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Our Story
            </h2>
            
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://ik.imagekit.io/humbling/food/SnapBG.ai_1741191404896.png?updatedAt=1741191425068" 
                alt="Hardy Yusif - Founder" 
                className="w-20 h-20 rounded-full object-cover border-2 border-gold-400"
              />
              <div>
                <h3 className="font-medium text-lg">Hardy Yusif</h3>
                <p className="text-muted-foreground text-sm">Founder & Executive Chef</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Founded by Hardy Yusif and his passionate team, Blackora was born from a desire to share the rich culinary heritage of Africa with the world. Our journey began in Prince George, Canada, where we set out to create a dining experience that celebrates the diverse flavors and cultural traditions of African cuisine.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Every dish at Blackora tells a story—a story of family recipes passed down through generations, of traditional cooking techniques preserved with care, and of fresh, quality ingredients sourced with integrity. We invite you to join us in celebrating the vibrant tapestry of African cuisine.
            </p>
            
            <Link to="/about">
              <Button 
                variant="outline" 
                className="border-gold-300 text-gold-700 hover:bg-gold-50"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 animate-fade-in-right">
            <div className="relative h-60 md:h-80 rounded-lg overflow-hidden">
              <img 
                src="https://ik.imagekit.io/humbling/food/fufuasap_gh_1676193961_3036457483535128775_7928367704.jpg?updatedAt=1741186099569" 
                alt="Traditional African dish"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-60 md:h-80 rounded-lg overflow-hidden mt-8">
              <img 
                src="https://ik.imagekit.io/humbling/food/fufuasap_gh_1664961269_2942230836403785065_7928367704.jpg?updatedAt=1741186098703" 
                alt="Our team serving food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-60 md:h-80 rounded-lg overflow-hidden">
              <img 
                src="https://ik.imagekit.io/humbling/food/fufuasap_gh_1662374818_2920534113164191925_7928367704.jpg?updatedAt=1741186097383" 
                alt="Traditional food preparation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-60 md:h-80 rounded-lg overflow-hidden mt-8">
              <img 
                src="https://ik.imagekit.io/humbling/food/fufuasap_gh_1689683388_3149614998657099734_7928367704.jpg?updatedAt=1741186107640" 
                alt="Chef preparing food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
