import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const carouselItems = [
  {
    id: 1,
    title: "Traditional Preparation",
    description: "Fufu is traditionally prepared by pounding boiled cassava and plantains in a wooden mortar with a pestle. The process requires skill and patience to achieve the perfect smooth consistency."
  },
  {
    id: 2,
    title: "Our Signature Dish",
    description: "At Authentic African Foods, Fufu is our core culinary offering, representing the heart of West African cuisine. We serve it with a variety of traditional soups including Light Soup, Groundnut Soup, and our famous Egusi."
  },
  {
    id: 3,
    title: "Cultural Significance",
    description: "More than just food, Fufu represents communal dining and cultural heritage. Traditionally eaten with fingers, it creates a connection between the diner and the food, enhancing the dining experience."
  },
  {
    id: 4,
    title: "Nutritional Benefits",
    description: "Rich in carbohydrates and dietary fiber, Fufu provides sustained energy. When paired with protein-rich soups and stews, it creates a balanced meal that satisfies both hunger and nutritional needs."
  },
  {
    id: 5,
    title: "Modern Innovations",
    description: "While we honor tradition, our chefs have also created innovative Fufu variations using different starches and techniques, offering both authentic and contemporary experiences for all palates."
  }
];

const FeaturedFufu = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollInterval: NodeJS.Timeout;
    let currentIndex = 0;

    const scrollToNext = () => {
      const items = carousel.querySelectorAll('.carousel-item');
      if (!items.length) return;

      currentIndex = (currentIndex + 1) % items.length;
      const nextItem = items[currentIndex] as HTMLElement;

      if (nextItem) {
        carousel.scrollTo({
          left: nextItem.offsetLeft - carousel.offsetWidth / 2 + nextItem.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    };

    scrollInterval = setInterval(scrollToNext, 5000);

    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video autoplay failed:", e));
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = carousel.clientWidth * 0.8;
    const scrollPosition = direction === 'left'
      ? carousel.scrollLeft - scrollAmount
      : carousel.scrollLeft + scrollAmount;

    carousel.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="https://ik.imagekit.io/edhumbling/Ghanaian%20authentic%20fufu%20with%20light%20soup.%20What%20we%20have%20for%20lunch%20%20%20_sweetohemaaofficial%20_sweetohemaa%20_ghana%20_ghanafood%20_ghanafood%20_ghanafood%20_kumasi%20_ghana%20_accra_2.mp4?updatedAt=1741253307242"
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-white">Fufu: The Soul of <span className="text-gold-400">Authentic African Foods</span></h2>
          <p className="text-white/80 text-lg">
            Experience our signature dish that embodies the essence of West African cuisine, prepared with authenticity and served with tradition.
          </p>
        </div>

        <div className="flex justify-end gap-2 mb-6">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/30 backdrop-blur-sm border-gold-500/30 text-white hover:bg-gold-600/20"
            onClick={() => scroll('left')}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/30 backdrop-blur-sm border-gold-500/30 text-white hover:bg-gold-600/20"
            onClick={() => scroll('right')}
          >
            <ChevronRight />
          </Button>
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide scroll-smooth"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "carousel-item flex-shrink-0 w-full max-w-md",
                "bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-6",
                "transition-all duration-300 hover:bg-black/40"
              )}
            >
              <h3 className="text-xl font-serif font-medium mb-3 text-gold-400">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/menu">
            <Button
              className="bg-gold-500 hover:bg-gold-600 text-white"
              size="lg"
            >
              Explore Other Dishes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFufu;
