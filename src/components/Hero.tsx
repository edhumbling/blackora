
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="https://ik.imagekit.io/humbling/food/fufuasap_gh_1690205376_3153992921375879618_7928367704.mp4?updatedAt=1741186322871"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-sm font-medium text-white mb-6 animate-fade-in">
            Prince George, Canada
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in">
            Experience <span className="text-gold-400">Authentic African</span> Cuisine
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl animate-fade-in">
            Indulge in the rich flavors and cultural heritage of African cuisine, crafted with passion and tradition at Blackora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link to="/menu">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
                Explore Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/reservations">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Make Reservation
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="glass-dark p-6 rounded-lg max-w-xs animate-fade-in-right">
          <p className="text-white/90 text-sm italic mb-2">
            "The most authentic African flavors I've experienced outside the continent."
          </p>
          <div className="flex items-center">
            <span className="text-gold-400 text-xs font-medium">— Food & Wine Magazine</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
