import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const waakyeImages = [
  {
    src: "https://ik.imagekit.io/edhumbling/Waakye/Waakye.jpeg",
    alt: "Traditional Waakye dish"
  },
  {
    src: "https://ik.imagekit.io/edhumbling/Waakye/download.jpeg",
    alt: "Waakye with sides"
  },
  {
    src: "https://ik.imagekit.io/edhumbling/Waakye/Waakye%20(1).jpeg",
    alt: "Waakye served with protein"
  },
  {
    src: "https://ik.imagekit.io/edhumbling/Waakye/Ghanaian%20dishes.jpeg",
    alt: "Assorted Ghanaian dishes including Waakye"
  }
];

const WaakyeFeature = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-sm font-medium text-gold-700 mb-6">
              Featured Dish
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Waakye: Ghana's Beloved Rice & Beans
            </h2>
            <p className="text-muted-foreground mb-4">
              Waakye (pronounced "waa-chay") is a Ghanaian street food staple made from rice and beans cooked together with dried millet leaves, which give it its distinctive reddish-brown color.
            </p>
            <p className="text-muted-foreground mb-4">
              Our authentic Waakye is served with a special waakye sauce, boiled eggs, fried plantains, and your choice of protein. It's typically accompanied by gari (cassava flakes), spaghetti, and a spicy pepper sauce.
            </p>
            <p className="text-muted-foreground mb-6">
              This hearty, nutritious dish is perfect for any time of day and represents the rich culinary heritage of Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                  Order Waakye Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-gold-300 text-gold-700 hover:bg-gold-50">
                  Learn About Our Food
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={waakyeImages[activeImage].src}
                alt={waakyeImages[activeImage].alt}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-3 py-1 bg-gold-500/80 backdrop-blur-sm rounded-full text-sm font-medium">
                  Authentic Ghanaian Recipe
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-4">
              {waakyeImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`rounded-md overflow-hidden border-2 transition-all ${
                    activeImage === index ? "border-gold-500 scale-105" : "border-transparent opacity-70"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={`Waakye thumbnail ${index + 1}`}
                    className="w-full h-auto aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaakyeFeature;
