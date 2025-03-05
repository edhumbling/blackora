
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart";
import { ShoppingBag, User, Menu } from "lucide-react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  // Check if user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://ik.imagekit.io/humbling/SnapBG.ai_1741181355169.png?updatedAt=1741181376482" 
              alt="Blackora" 
              className="h-12 w-auto"
            />
            <span className={`text-lg md:text-xl font-serif font-semibold ${
              isScrolled ? "text-gold-600" : "text-white"
            }`}>Blackora</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative group ${
                  location.pathname === item.path
                    ? isScrolled ? "text-gold-600" : "text-gold-400"
                    : isScrolled ? "text-foreground/80 hover:text-gold-600" : "text-white hover:text-gold-400"
                }`}
              >
                {item.name}
                <span 
                  className={`absolute bottom-1 left-3 right-3 h-px bg-gold-500 transform origin-left transition-transform duration-300 ${
                    location.pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-1">
            <Button 
              onClick={() => setIsAuthOpen(true)} 
              variant="ghost" 
              size="icon" 
              className={`${isScrolled ? "text-foreground/80 hover:text-gold-600" : "text-white hover:text-gold-400"}`}
            >
              <User className="h-5 w-5" />
            </Button>
            
            <Link to="/cart">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`${isScrolled ? "text-foreground/80 hover:text-gold-600" : "text-white hover:text-gold-400"} relative`}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`md:hidden ${isScrolled ? "text-foreground/80 hover:text-gold-600" : "text-white hover:text-gold-400"}`}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center gap-2">
                    <img 
                      src="https://ik.imagekit.io/humbling/SnapBG.ai_1741181355169.png?updatedAt=1741181376482" 
                      alt="Blackora" 
                      className="h-8 w-auto"
                    />
                    <span className="text-lg font-serif font-semibold">Blackora</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-gold-600 bg-gold-50"
                          : "text-foreground/80 hover:text-gold-600 hover:bg-gold-50/50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-8 border-t">
                  <Button 
                    onClick={() => setIsAuthOpen(true)} 
                    variant="outline" 
                    className="w-full mb-2 border-gold-500 text-gold-700 hover:bg-gold-50"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                  <Link to="/cart" className="w-full">
                    <Button 
                      variant="default" 
                      className="w-full bg-gold-500 hover:bg-gold-600"
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Cart {totalItems > 0 && `(${totalItems})`}
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Navbar;
