
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FoodKnowledge = () => {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Food Knowledge with Afia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about African cuisine traditions and cooking techniques from our culinary expert Afia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <AspectRatio ratio={16/9}>
              <video 
                className="w-full h-full object-cover" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="https://ik.imagekit.io/humbling/food/eatwithafia_1727627527_3467912920160386684_2014293526.mp4?updatedAt=1741190708049" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
            <div className="p-4 bg-card">
              <h3 className="font-medium text-lg mb-2">Traditional Cooking Techniques</h3>
              <p className="text-muted-foreground text-sm">
                Learn about the authentic methods used in preparing traditional African dishes.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <AspectRatio ratio={16/9}>
              <video 
                className="w-full h-full object-cover" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="https://ik.imagekit.io/humbling/food/eatwithafia_1727378122_3465819370734384378_2014293526.mp4?updatedAt=1741190703379" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
            <div className="p-4 bg-card">
              <h3 className="font-medium text-lg mb-2">Spices & Ingredients</h3>
              <p className="text-muted-foreground text-sm">
                Discover the essential spices and ingredients that make African cuisine so flavorful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodKnowledge;
