
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { ensureVideoPlayback } from "@/utils/videoUtils";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      ensureVideoPlayback(videoRef);
    }
  }, []);
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="https://ik.imagekit.io/humbling/food/fufuasap_gh_1690205376_3153992921375879618_7928367704.mp4?updatedAt=1741186322871"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          webkit-playsinline="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Kente pattern decorative elements */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-full bg-[url('https://ik.imagekit.io/humbling/kente-pattern-vertical.png')] opacity-15"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-[url('https://ik.imagekit.io/humbling/kente-pattern-vertical.png')] opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('https://ik.imagekit.io/humbling/kente-pattern-horizontal.png')] opacity-15"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-sm font-medium text-white mb-6 animate-fade-in">
            Prince George, Canada
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in">
            Experience <span className="text-gold-400">Authentic African</span> Cuisine
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl animate-fade-in">
            Indulge in the rich flavors and cultural heritage of African cuisine, crafted with passion and tradition at Authentic African Foods.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link to="/menu">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white w-full sm:w-auto">
                Explore Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/reservations">
              <Button
                size="lg"
                className="bg-white text-gold-600 hover:bg-white/90 border-2 border-gold-500 shadow-lg backdrop-blur-sm animate-pulse w-full sm:w-auto"
              >
                Make Reservation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="glass-dark p-6 rounded-lg max-w-xs animate-fade-in-right border border-gold-500/20">
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
