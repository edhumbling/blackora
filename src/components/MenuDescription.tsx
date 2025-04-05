import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Utensils } from "lucide-react";

const MenuDescription = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Culinary Offerings</h2>
          <p className="text-muted-foreground text-lg">
            Discover the rich diversity of authentic African cuisine, with Fufu at the heart of our menu and a variety of other beloved dishes.
          </p>
        </div>

        {/* Fufu Section */}
        <div className="bg-card rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-6">
                <Utensils className="h-4 w-4" />
                <span>Signature Dish</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6">Fufu: The Heartbeat of Our Menu</h3>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fufu is the cornerstone of our culinary offerings, representing the authentic taste and tradition of West African cuisine. This beloved staple is available in multiple variations to suit your preference:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium text-foreground">Cassava Fufu</span> - Made from fermented cassava, offering a smooth, slightly tangy flavor</li>
                  <li><span className="font-medium text-foreground">Plantain Fufu</span> - A sweeter variation made from green plantains</li>
                  <li><span className="font-medium text-foreground">Yam Fufu</span> - Created from pounded yam for a lighter texture</li>
                  <li><span className="font-medium text-foreground">Cocoyam Fufu</span> - Made from taro root, with a distinctive earthy flavor</li>
                </ul>

                <p>
                  Each Fufu variant is served with your choice of our signature soups:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium text-foreground">Peanut Butter Soup</span> - Rich and creamy soup with a nutty flavor</li>
                  <li><span className="font-medium text-foreground">Light Soup</span> - A clear, flavorful broth with vegetables and your choice of protein</li>
                  <li><span className="font-medium text-foreground">Palm Nut Soup</span> - Made from the pulp of palm nuts, offering a rich, savory taste</li>
                  <li><span className="font-medium text-foreground">Egusi Soup</span> - Thick, protein-rich soup made from ground melon seeds</li>
                  <li><span className="font-medium text-foreground">Okra Soup</span> - Featuring the distinctive texture of okra in a flavorful base</li>
                </ul>
              </div>

              <div className="mt-8">
                <Link to="/menu">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                    Explore Fufu Options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-80 lg:h-auto">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-2 lg:p-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/edhumbling/download%20(2).jpeg"
                    alt="Fufu with Egusi Soup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/edhumbling/bee_kitchen_1%20on%20Instagram_%20After%20detoxing%20we%20eat%20Fufu%20with%20Chicken%20Light%20Soup%20_%20I_m%20so%20annoyed%20I%20don_t%20have%20okro%20_%20What_s%20everyone%20having%20for%20lunch_%20Ps_%20Happy%20Eid_.jpeg"
                    alt="Fufu with Light Soup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/edhumbling/Fufu's%20Many%20Faces.jpeg"
                    alt="Fufu Varieties"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/edhumbling/download%20(3).jpeg"
                    alt="Fufu with Soup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded Menu Section */}
        <div className="bg-card rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-80 lg:h-auto order-2 lg:order-1">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-2 lg:p-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/humbling/food/chefabbys_1734083072_3522066547500215715_35533844416.jpg?updatedAt=1741191185444"
                    alt="Jollof Rice"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/edhumbling/Waakye/Waakye.jpeg"
                    alt="Waakye"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/edhumbling/Fried%20Sweet%20Plantains.jpeg"
                    alt="Fried Plantains"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/humbling/food/msjemima_ng_1730192429_3489647559010823979_1423578390.jpg?updatedAt=1741332618981"
                    alt="Chin Chin"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-10 flex flex-col justify-center order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-6">
                <Utensils className="h-4 w-4" />
                <span>Expanded Menu</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6">Beyond Fufu: Our Diverse Offerings</h3>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  To broaden our appeal and showcase the rich diversity of African cuisine, we offer a variety of other beloved dishes:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium text-foreground">Jollof Rice</span> - A flavorful one-pot rice dish cooked in a rich tomato and pepper sauce, served with your choice of protein
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Waakye</span> - A Ghanaian specialty of rice and beans cooked with dried millet leaves, served with special waakye sauce and sides
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Grilled Fish</span> - Fresh fish seasoned with African spices and grilled to perfection
                  </li>
                </ul>

                <p className="font-medium text-foreground">Sides and Extras:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fried Plantains - Sweet, ripe plantains fried until golden brown</li>
                  <li>Ghanaian Salad - Fresh vegetables with a unique Ghanaian dressing</li>
                  <li>Shito (Pepper Sauce) - A spicy, flavorful condiment that adds heat to any dish</li>
                  <li>Kelewele - Spicy fried plantains seasoned with ginger and spices</li>
                  <li>Garri - Fermented cassava granules, perfect for soaking up sauces</li>
                </ul>
              </div>

              <div className="mt-8">
                <Link to="/menu">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                    View Full Menu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuDescription;
