
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
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Hardy Yusif, founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-60 md:h-80 rounded-lg overflow-hidden mt-8">
              <img 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-60 md:h-80 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-60 md:h-80 rounded-lg overflow-hidden mt-8">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Cooking process"
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
