
import { useState } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuList from "@/components/MenuList";
import { MenuSection } from "@/types";
import MenuFilter from "@/components/MenuFilter";
import SpecialOffers from "@/components/SpecialOffers";
import MenuDescription from "@/components/MenuDescription";


const MENU_SECTIONS: MenuSection[] = [
  {
    id: "main-dishes",
    title: "Main Dishes",
    description: "Authentic African main courses featuring traditional recipes",
    items: [
      {
        id: "fufu-egusi",
        name: "Fufu & Egusi Soup",
        description: "Smooth, dough-like fufu served with rich and savory egusi soup made from ground melon seeds, leafy vegetables, and protein of choice.",
        price: 22.99,
        image: "https://ik.imagekit.io/edhumbling/download%20(2).jpeg",
        category: "main",
        popular: true
      },
      {
        id: "jollof-rice",
        name: "Jollof Rice",
        description: "Traditional West African rice dish cooked in a rich, flavorful tomato and pepper sauce. Served with grilled chicken.",
        price: 18.99,
        image: "https://ik.imagekit.io/humbling/food/chefabbys_1734083072_3522066547500215715_35533844416.jpg?updatedAt=1741191185444",
        category: "main",
        popular: true,
        spicy: true
      },
      {
        id: "fufu-soup",
        name: "Fufu with Light Soup",
        description: "Hand-pounded fufu served with light soup made with tomatoes, peppers, and your choice of fish, chicken, or beef.",
        price: 23.99,
        image: "https://ik.imagekit.io/edhumbling/bee_kitchen_1%20on%20Instagram_%20After%20detoxing%20we%20eat%20Fufu%20with%20Chicken%20Light%20Soup%20_%20I_m%20so%20annoyed%20I%20don_t%20have%20okro%20_%20What_s%20everyone%20having%20for%20lunch_%20Ps_%20Happy%20Eid_.jpeg",
        category: "main",
        spicy: true
      },
      {
        id: "waakye",
        name: "Waakye",
        description: "Ghanaian dish of rice and beans cooked with dried millet leaves, served with special waakye sauce, boiled eggs, fried plantains, and your choice of protein.",
        price: 19.99,
        image: "https://ik.imagekit.io/edhumbling/Waakye/Waakye.jpeg",
        category: "main",
        popular: true
      }
    ]
  },
  {
    id: "starters",
    title: "Starters & Appetizers",
    description: "Begin your meal with these delicious African appetizers",
    items: [
      {
        id: "suya-skewers",
        name: "Suya Skewers",
        description: "Spicy grilled beef skewers marinated in a peanut-based spice blend. Served with fresh onions and tomatoes.",
        price: 16.99,
        image: "https://ik.imagekit.io/edhumbling/Grilled%20Kebab%20Skewers%20Photo%20on%20Lummi.jpeg",
        category: "appetizer",
        popular: true,
        spicy: true
      },
      {
        id: "kelewele",
        name: "Kelewele",
        description: "Spicy fried plantains seasoned with ginger, cayenne pepper, and other spices. A popular Ghanaian street food.",
        price: 7.99,
        image: "https://ik.imagekit.io/edhumbling/IMG_4440-1.jpg?updatedAt=1743855331322",
        category: "appetizer",
        vegetarian: true,
        spicy: true
      },
      {
        id: "moin-moin",
        name: "Moin Moin",
        description: "Steamed bean pudding made from blended black-eyed peas, peppers, and spices. Soft and savory.",
        price: 8.99,
        image: "https://ik.imagekit.io/edhumbling/20230111-Moin-Moin-Maureen-Celestine-hero-5c656cbc3b684be1b1f29414f2bdc29c.webp?updatedAt=1743855410673",
        category: "appetizer",
        vegetarian: true
      }
    ]
  },
  {
    id: "sides",
    title: "Sides & Accompaniments",
    description: "Perfect complements to your main dish",
    items: [
      {
        id: "fried-plantains",
        name: "Fried Plantains",
        description: "Sweet, ripe plantains, fried until golden brown. A perfect sweet contrast to savory dishes.",
        price: 6.99,
        image: "https://ik.imagekit.io/edhumbling/Fried%20Sweet%20Plantains.jpeg",
        category: "side",
        vegetarian: true,
        vegan: true,
        glutenFree: true
      },
      {
        id: "jollof-rice-side",
        name: "Jollof Rice (Side)",
        description: "A smaller portion of our signature jollof rice.",
        price: 7.99,
        image: "https://ik.imagekit.io/humbling/food/chefabbys_1734083072_3522066547500215715_35533844416.jpg?updatedAt=1741191185444",
        category: "side",
        spicy: true
      },
      {
        id: "garri",
        name: "Garri",
        description: "Fermented cassava flour, ready to be mixed with water to create a smooth, dough-like consistency.",
        price: 5.99,
        image: "https://ik.imagekit.io/edhumbling/Garri.webp",
        category: "side",
        vegetarian: true,
        vegan: true,
        glutenFree: true
      }
    ]
  },
  {
    id: "beverages",
    title: "Drinks & Beverages",
    description: "Traditional and modern beverages to accompany your meal",
    items: [
      {
        id: "zobo",
        name: "Zobo (Hibiscus Drink)",
        description: "Refreshing Nigerian drink made from dried hibiscus flowers, flavored with pineapple and ginger.",
        price: 5.99,
        image: "https://ik.imagekit.io/edhumbling/How%20To%20Make%20Zobo%20Drink%20(Sobolo%20Drink%20Recipe).jpeg",
        category: "beverage",
        vegetarian: true,
        vegan: true,
        glutenFree: true
      },
      {
        id: "palm-wine",
        name: "Palm Wine",
        description: "Traditional African alcoholic beverage made from the sap of palm trees. Sweet and mildly alcoholic.",
        price: 9.99,
        image: "https://ik.imagekit.io/edhumbling/Pulque.jpeg",
        category: "beverage",
        vegetarian: true,
        vegan: true,
        glutenFree: true
      },
      {
        id: "chapman",
        name: "Chapman",
        description: "Nigerian cocktail made with a blend of Fanta, Sprite, Angostura bitters, and blackcurrant.",
        price: 7.99,
        image: "https://ik.imagekit.io/edhumbling/download%20(1).jpeg",
        category: "beverage",
        vegetarian: true
      }
    ]
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Sweet treats to finish your meal",
    items: [
      {
        id: "puff-puff",
        name: "Puff Puff",
        description: "Deep-fried dough balls, lightly sweetened and served warm. Similar to beignets or doughnuts.",
        price: 8.99,
        image: "https://ik.imagekit.io/edhumbling/Sweet%20Doughnut%20Balls.jpeg",
        category: "dessert",
        vegetarian: true
      },
      {
        id: "coconut-cake",
        name: "Coconut Cake",
        description: "Moist cake made with fresh coconut and topped with coconut flakes.",
        price: 10.99,
        image: "https://ik.imagekit.io/edhumbling/Classic%20Old%20Fashioned%20Coconut%20Cake%20Recipe%20_%20Moist%20&%20Delicious.jpeg",
        category: "dessert",
        vegetarian: true
      },
      {
        id: "chin-chin",
        name: "Chin Chin",
        description: "Crunchy, sweet fried pastry popular in West Africa. Flavored with nutmeg and cinnamon.",
        price: 7.99,
        image: "https://ik.imagekit.io/edhumbling/Crunchy%20Coconut%20Chin%20Chin.jpeg",
        category: "dessert",
        vegetarian: true
      }
    ]
  }
];

type CategoryFilter = "all" | "main" | "appetizer" | "side" | "beverage" | "dessert";
type DietaryFilter = "vegetarian" | "vegan" | "glutenFree" | "spicy" | null;

const Menu = () => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [dietaryFilter, setDietaryFilter] = useState<DietaryFilter>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = MENU_SECTIONS.map(section => {
    const filteredItems = section.items.filter(item => {
      // Apply category filter
      if (categoryFilter !== "all" && item.category !== categoryFilter) {
        return false;
      }

      // Apply dietary filter
      if (dietaryFilter && !item[dietaryFilter]) {
        return false;
      }

      // Apply search query
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !item.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });

    return {
      ...section,
      items: filteredItems
    };
  }).filter(section => section.items.length > 0);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-gold-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
              Our Menu
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore the rich flavors of authentic African cuisine, carefully crafted with traditional recipes and fresh ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gold-100">
        <div className="container mx-auto px-4 sm:px-6">
          <MenuFilter
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            dietaryFilter={dietaryFilter}
            setDietaryFilter={setDietaryFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredSections.length > 0 ? (
            <MenuList sections={filteredSections} />
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-serif font-medium mb-4">No items found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </section>

      <MenuDescription />

      <SpecialOffers />

      <Footer />
      <Toaster position="top-right" />
    </main>
  );
};

export default Menu;
