
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
};

export type CartItem = {
  menuItem: MenuItem;
  quantity: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
};

export type FoodCategory = {
  id: string;
  name: string;
  description: string;
  image?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
};
