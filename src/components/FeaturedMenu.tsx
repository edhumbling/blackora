
import { Button } from "@/components/ui/button";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Sample menu items
const featuredItems = [
  {
    id: "1",
    name: "Jollof Rice",
    description: "Traditional West African rice dish cooked in a rich, flavorful tomato and pepper sauce. Served with grilled chicken.",
    price: 19.99,
    image: "https://ik.imagekit.io/humbling/food/chefabbys_1734083072_3522066547500215715_35533844416.jpg?updatedAt=1741191185444",
    category: "main",
    popular: true,
    spicy: true
  },
  {
    id: "2",
    name: "Fufu & Egusi Soup",
    description: "Smooth, dough-like fufu served with rich and savory egusi soup made from ground melon seeds, leafy vegetables, and protein of choice.",
    price: 21.99,
    image: "https://ik.imagekit.io/humbling/f67513d9dbea376d1ac4fb10187b387cf802abbc7deae9587897ccd0dba8cd1f5d53c31f8ba30972a9ff10eedf379300f378bb08aba6d13feb1b6e15d9513e83586dfcc1f11702cb28f982ef45dd05ae?tr=w-600,h-600,c-at_max",
    category: "main",
    popular: true
  },
  {
    id: "3",
    name: "Suya Skewers",
    description: "Spicy grilled beef skewers marinated in a peanut-based spice blend. Served with fresh onions and tomatoes.",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1627662056950-d964092901ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "appetizer",
    popular: true,
    spicy: true
  },
  {
    id: "4",
    name: "Yam and Plantain",
    description: "Traditional fried yam and plantain served with a spicy tomato dipping sauce. Perfect as a side or appetizer.",
    price: 13.99,
    image: "https://ik.imagekit.io/humbling/food/eatwithafia_1614699778_2520606889971483910_2014293526.jpg?updatedAt=1741190695139",
    category: "side",
    vegetarian: true
  }
];

const FeaturedMenu = () => {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Signature Dishes</h2>
          <p className="text-muted-foreground">
            Experience the rich, bold flavors of authentic African cuisine, crafted with passion and tradition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="animate-fade-in">
              <MenuItem item={item} featured={true} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/menu">
            <Button variant="outline" size="lg" className="border-gold-300 text-gold-700 hover:bg-gold-50">
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
