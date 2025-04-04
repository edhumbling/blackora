import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import useSwipeCards from "@/hooks/useSwipeCards";

const FufuCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 1; // Currently only one slide, but can be expanded
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Add swipe functionality using our custom hook
  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    cardStyle,
    direction
  } = useSwipeCards({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    swipeThreshold: 80, // Lower threshold for easier swiping
    rotationFactor: 15, // Adjust rotation for visual feedback
  });

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <section className="py-16 px-4 sm:px-6 overflow-hidden relative">
      {/* Subtle Ghanaian patterns in background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-16 bg-[url('https://ik.imagekit.io/humbling/kente-pattern-horizontal.png')]"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('https://ik.imagekit.io/humbling/kente-pattern-horizontal.png')]"></div>
        <div className="absolute top-16 left-0 w-16 h-[calc(100%-32px)] bg-[url('https://ik.imagekit.io/humbling/kente-pattern-vertical.png')]"></div>
        <div className="absolute top-16 right-0 w-16 h-[calc(100%-32px)] bg-[url('https://ik.imagekit.io/humbling/kente-pattern-vertical.png')]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-2">The Heart of Our Cuisine: Fufu</h2>
          <p className="text-lg text-muted-foreground">A Taste of Tradition</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Mobile swipe indicator */}
          {direction && (
            <div className={`absolute top-1/2 -translate-y-1/2 z-20 ${direction === 'left' ? 'right-4' : 'left-4'} bg-white/80 dark:bg-black/50 p-2 rounded-full shadow-lg transition-opacity duration-300`}>
              {direction === 'left' ? (
                <ChevronRight className="h-6 w-6 text-gold-500" />
              ) : (
                <ChevronLeft className="h-6 w-6 text-gold-500" />
              )}
            </div>
          )}

          <div
            ref={slideRef}
            className="flex transition-transform duration-500 ease-in-out touch-pan-y"
            style={{
              width: `${totalSlides * 100}%`,
              ...cardStyle // Apply the swipe card styles
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slide 1 */}
            <div className="w-full flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 space-y-6">
                <p className="text-lg">
                  Fufu, a beloved Ghanaian dish, has been a cornerstone of West African cuisine for centuries. Crafted from cassava and plantain, it's pounded into a smooth, dough-like consistency and paired with rich, flavorful soups. At Authentic African Foods, we bring this tradition to life with authentic methods and the finest ingredients, delivering a true taste of Ghana right here in Prince George.
                </p>
                <p className="text-lg">
                  Picture this: a soft, warm ball of fufu dipped into a steaming bowl of light soup, where every bite blends texture and taste in perfect harmony. It's not just a dish—it's a cultural journey, a link to our heritage.
                </p>
                <div className="p-4 border-l-4 border-gold-500 bg-gold-50 dark:bg-gold-950/20">
                  <p className="italic text-lg">"Fufu is how we share our culture with the world," says Chef Hardy Yusif, owner of Authentic African Foods. "We want every bite to take you to the lively streets of Accra."</p>
                </div>
                <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                  <div className="bg-gold-100 dark:bg-gold-900/30 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-600"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
                  </div>
                  <p className="text-sm">Fun fact: Fufu is traditionally enjoyed with your hands, not utensils—a communal experience meant to be shared with loved ones. At Authentic African Foods, we invite you to dive into this tradition and savor Ghana's authentic flavors.</p>
                </div>
                <div className="pt-4">
                  <Link to="/reservations">
                    <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                      Come experience the heart of our cuisine
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://ik.imagekit.io/humbling/food/fufuasap_gh_1706595816_3291486728131350455_7928367704.jpg?updatedAt=1741186116468"
                    alt="Fufu with Ghanaian light soup"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-3 py-1 bg-gold-500/80 backdrop-blur-sm rounded-full text-sm font-medium">
                      Authentic Recipe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile swipe instruction - only visible on small screens */}
          <div className="md:hidden text-center mt-4 text-sm text-muted-foreground">
            <p>Swipe left or right to navigate</p>
          </div>

          {/* Navigation arrows - only visible when we have multiple slides and on larger screens */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full shadow-lg z-10 hover:bg-white dark:hover:bg-black hidden md:block"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full shadow-lg z-10 hover:bg-white dark:hover:bg-black hidden md:block"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Slide indicators - only visible when we have multiple slides */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${currentSlide === index ? 'w-8 bg-gold-500' : 'w-2 bg-gray-300 dark:bg-gray-700'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FufuCarousel;