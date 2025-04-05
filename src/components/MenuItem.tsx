
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { MenuItem as MenuItemType } from "@/types";
import { Plus, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MenuItemProps {
  item: MenuItemType;
  featured?: boolean;
}

const MenuItem = ({ item, featured = false }: MenuItemProps) => {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const { name, description, price, image, vegetarian, vegan, spicy, glutenFree } = item;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
  }).format(price);

  return (
    <div
      className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
        featured
          ? "bg-white shadow-lg hover:shadow-xl"
          : "border border-border hover:border-gold-200 bg-white/50 hover:bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-medium text-base sm:text-lg">{name}</h3>
          <span className="font-medium text-gold-700">{formattedPrice}</span>
        </div>

        <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{description}</p>

        {/* Diet badges */}
        {(vegetarian || vegan || spicy || glutenFree) && (
          <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
            {vegetarian && (
              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                Vegetarian
              </Badge>
            )}
            {vegan && (
              <Badge variant="outline" className="text-xs bg-green-50 text-green-800 border-green-200">
                Vegan
              </Badge>
            )}
            {spicy && (
              <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                Spicy
              </Badge>
            )}
            {glutenFree && (
              <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                Gluten Free
              </Badge>
            )}
          </div>
        )}

        <Button
          onClick={() => addItem(item)}
          className={`w-full bg-gold-500 hover:bg-gold-600 mt-2 transition-all duration-300`}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
