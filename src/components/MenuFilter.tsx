
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type CategoryFilter = "all" | "main" | "appetizer" | "side" | "beverage" | "dessert";
type DietaryFilter = "vegetarian" | "vegan" | "glutenFree" | "spicy" | null;

interface MenuFilterProps {
  categoryFilter: CategoryFilter;
  setCategoryFilter: (filter: CategoryFilter) => void;
  dietaryFilter: DietaryFilter;
  setDietaryFilter: (filter: DietaryFilter) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const MenuFilter = ({
  categoryFilter,
  setCategoryFilter,
  dietaryFilter,
  setDietaryFilter,
  searchQuery,
  setSearchQuery,
}: MenuFilterProps) => {
  const categories = [
    { id: "all", label: "All Items" },
    { id: "main", label: "Main Dishes" },
    { id: "appetizer", label: "Starters" },
    { id: "side", label: "Sides" },
    { id: "beverage", label: "Drinks" },
    { id: "dessert", label: "Desserts" },
  ];

  const dietaryOptions = [
    { id: "vegetarian", label: "Vegetarian", color: "green" },
    { id: "vegan", label: "Vegan", color: "emerald" },
    { id: "glutenFree", label: "Gluten Free", color: "blue" },
    { id: "spicy", label: "Spicy", color: "red" },
  ];

  const clearFilters = () => {
    setCategoryFilter("all");
    setDietaryFilter(null);
    setSearchQuery("");
  };

  const isFiltersActive = categoryFilter !== "all" || dietaryFilter !== null || searchQuery !== "";

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder="Search menu items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 border-gold-200 focus-visible:ring-gold-500"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={categoryFilter === category.id ? "default" : "outline"}
            className={
              categoryFilter === category.id
                ? "bg-gold-500 hover:bg-gold-600 text-white"
                : "border-gold-200 text-foreground hover:bg-gold-50"
            }
            onClick={() => setCategoryFilter(category.id as CategoryFilter)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Dietary Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {dietaryOptions.map((option) => {
          const isActive = dietaryFilter === option.id;
          let badgeClasses = "";
          
          if (isActive) {
            switch(option.color) {
              case "green":
                badgeClasses = "bg-green-500 hover:bg-green-600 text-white";
                break;
              case "emerald":
                badgeClasses = "bg-emerald-500 hover:bg-emerald-600 text-white";
                break;
              case "blue":
                badgeClasses = "bg-blue-500 hover:bg-blue-600 text-white";
                break;
              case "red":
                badgeClasses = "bg-red-500 hover:bg-red-600 text-white";
                break;
            }
          } else {
            switch(option.color) {
              case "green":
                badgeClasses = "bg-green-50 text-green-700 border-green-200 hover:bg-green-100";
                break;
              case "emerald":
                badgeClasses = "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100";
                break;
              case "blue":
                badgeClasses = "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
                break;
              case "red":
                badgeClasses = "bg-red-50 text-red-700 border-red-200 hover:bg-red-100";
                break;
            }
          }

          return (
            <Badge
              key={option.id}
              variant="outline"
              className={`px-3 py-1 cursor-pointer ${badgeClasses}`}
              onClick={() => setDietaryFilter(isActive ? null : (option.id as DietaryFilter))}
            >
              {option.label}
            </Badge>
          );
        })}
        
        {isFiltersActive && (
          <Button
            variant="ghost"
            className="text-sm text-muted-foreground hover:text-foreground"
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default MenuFilter;
