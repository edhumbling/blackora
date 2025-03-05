
import MenuItem from "./MenuItem";
import { MenuSection } from "@/types";

interface MenuListProps {
  sections: MenuSection[];
}

const MenuList = ({ sections }: MenuListProps) => {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <div key={section.id} className="animate-fade-in">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-3">{section.title}</h2>
            <p className="text-muted-foreground">{section.description}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {section.items.map((item) => (
              <div key={item.id} className="animate-fade-in">
                <MenuItem item={item} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
