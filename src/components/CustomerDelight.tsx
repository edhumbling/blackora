
import { useState, useRef, useEffect } from "react";
import { Star, ThumbsUp, Heart } from "lucide-react";
import { ensureVideoPlayback } from "@/utils/videoUtils";

const CustomerDelight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      ensureVideoPlayback(videoRef);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-black">
      {/* Kente pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://ik.imagekit.io/humbling/kente-pattern.png')] bg-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Content */}
            <div className={`w-full lg:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-8'}`}>
              <div className="p-1 inline-block bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 rounded-lg mb-6">
                <div className="bg-black py-1 px-3 rounded-md">
                  <p className="text-gold-400 font-medium text-sm">CUSTOMER EXPERIENCE</p>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Creating <span className="text-gold-400">Moments of Delight</span> With Every Dish
              </h2>

              <p className="text-white/80 mb-8">
                At Authentic African Foods, we believe dining is more than just food—it's an experience that engages all the senses and creates lasting memories. Our commitment to exceptional service matches the quality of our authentic African cuisine.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col items-center glass-dark p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mb-3">
                    <Star className="h-6 w-6 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium mb-1">Exceptional Food</h3>
                  <p className="text-white/70 text-sm text-center">Authentic recipes with premium ingredients</p>
                </div>

                <div className="flex flex-col items-center glass-dark p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mb-3">
                    <Heart className="h-6 w-6 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium mb-1">Warm Hospitality</h3>
                  <p className="text-white/70 text-sm text-center">Staff that treats you like family</p>
                </div>

                <div className="flex flex-col items-center glass-dark p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mb-3">
                    <ThumbsUp className="h-6 w-6 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium mb-1">Cultural Immersion</h3>
                  <p className="text-white/70 text-sm text-center">Experience authentic African ambiance</p>
                </div>
              </div>
            </div>

            {/* Video */}
            <div className={`w-full lg:w-1/2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-8'}`}>
              <div className="rounded-xl overflow-hidden border-2 border-gold-500/30 shadow-[0_0_25px_rgba(215,181,80,0.15)]">
                <video
                  ref={videoRef}
                  src="https://ik.imagekit.io/humbling/food/fufuasap_gh_1690455528_3156089622379166010_7928367704.mp4?updatedAt=1741186236034"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  webkit-playsinline="true"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-dark p-6 rounded-lg border border-gold-500/20">
              <div className="flex text-gold-400 mb-3">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-white/90 italic mb-4">"The fufu and egusi soup transported me back to Lagos. Authentic flavors and wonderful service."</p>
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <span className="text-gold-400 font-serif font-bold">K</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Kwame A.</p>
                  <p className="text-white/60 text-xs">Loyal customer</p>
                </div>
              </div>
            </div>

            <div className="glass-dark p-6 rounded-lg border border-gold-500/20">
              <div className="flex text-gold-400 mb-3">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-white/90 italic mb-4">"First time trying African cuisine and I'm hooked! The staff was so helpful explaining each dish."</p>
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <span className="text-gold-400 font-serif font-bold">S</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Sarah T.</p>
                  <p className="text-white/60 text-xs">New customer</p>
                </div>
              </div>
            </div>

            <div className="glass-dark p-6 rounded-lg border border-gold-500/20">
              <div className="flex text-gold-400 mb-3">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-white/90 italic mb-4">"Their jollof rice is the best I've had outside of Ghana. The atmosphere and cultural touches make it special."</p>
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <span className="text-gold-400 font-serif font-bold">M</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Michael O.</p>
                  <p className="text-white/60 text-xs">Regular visitor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerDelight;
