
import { useState } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuList from "@/components/MenuList";
import { MenuSection } from "@/types";
import MenuFilter from "@/components/MenuFilter";

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
        price: 21.99,
        image: "https://ik.imagekit.io/humbling/f67513d9dbea376d1ac4fb10187b387cf802abbc7deae9587897ccd0dba8cd1f5d53c31f8ba30972a9ff10eedf379300f378bb08aba6d13feb1b6e15d9513e83586dfcc1f11702cb28f982ef45dd05ae?tr=w-600,h-600,c-at_max",
        category: "main",
        popular: true
      },
      {
        id: "jollof-rice",
        name: "Jollof Rice",
        description: "Traditional West African rice dish cooked in a rich, flavorful tomato and pepper sauce. Served with grilled chicken.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1634632109496-47b9b57db94b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "main",
        popular: true,
        spicy: true
      },
      {
        id: "fufu-soup",
        name: "Fufu with Light Soup",
        description: "Hand-pounded fufu served with light soup made with tomatoes, peppers, and your choice of fish, chicken, or beef.",
        price: 22.99,
        image: "https://ik.imagekit.io/humbling/f67513d9dbea376d1ac4fb10187b387cf802abbc7deae9587897ccd0dba8cd1f5d53c31f8ba30972a9ff10eedf379300f378bb08aba6d13feb1b6e15d9513e83586dfcc1f11702cb28f982ef45dd05ae?tr=w-600,h-600,c-at_max",
        category: "main",
        spicy: true
      },
      {
        id: "waakye",
        name: "Waakye",
        description: "Ghanaian dish of rice and beans cooked with dried millet leaves, served with special waakye sauce, boiled eggs, and fried plantains.",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "main"
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
        price: 17.99,
        image: "https://images.unsplash.com/photo-1627662056950-d964092901ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "appetizer",
        popular: true,
        spicy: true
      },
      {
        id: "kelewele",
        name: "Kelewele",
        description: "Spicy fried plantains seasoned with ginger, cayenne pepper, and other spices. A popular Ghanaian street food.",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1598511726623-d2e9996e1ddb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "appetizer",
        vegetarian: true,
        spicy: true
      },
      {
        id: "moin-moin",
        name: "Moin Moin",
        description: "Steamed bean pudding made from blended black-eyed peas, peppers, and spices. Soft and savory.",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1642769881638-49a3d7546dc2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
        price: 8.99,
        image: "https://images.unsplash.com/photo-1610325261376-d4c2d7e97f96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "side",
        vegetarian: true,
        vegan: true,
        glutenFree: true
      },
      {
        id: "jollof-rice-side",
        name: "Jollof Rice (Side)",
        description: "A smaller portion of our signature jollof rice.",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1634632109496-47b9b57db94b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "side",
        spicy: true
      },
      {
        id: "garri",
        name: "Garri",
        description: "Fermented cassava flour, ready to be mixed with water to create a smooth, dough-like consistency.",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1605186620429-1ece681a6918?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
        image: "https://images.unsplash.com/photo-1571950006418-f226dc106482?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
        image: "https://images.unsplash.com/photo-1630387748855-8f618480adf6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
        image: "https://images.unsplash.com/photo-1635044662684-4c67040119c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "dessert",
        vegetarian: true
      },
      {
        id: "coconut-cake",
        name: "Coconut Cake",
        description: "Moist cake made with fresh coconut and topped with coconut flakes.",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1605291526263-779cfd52c8ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "dessert",
        vegetarian: true
      },
      {
        id: "chin-chin",
        name: "Chin Chin",
        description: "Crunchy, sweet fried pastry popular in West Africa. Flavored with nutmeg and cinnamon.",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
      
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
};

export default Menu;
