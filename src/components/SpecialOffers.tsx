import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Tag, Truck, Users, Gift } from "lucide-react";
import { useState } from "react";
import AuthModal from "./AuthModal";

const SpecialOffers = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Special Offers & Delivery</h2>
          <p className="text-muted-foreground">
            Enjoy our authentic African cuisine with these special offers and convenient delivery options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Combo Deals */}
          <div className="bg-card rounded-lg shadow-md p-6 border border-gold-200/50 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 mx-auto">
              <Tag className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium mb-4 text-center">Value Combo Deals</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>Meal + Soda + Side for a special price</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>Family-size portions available for select dishes</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>Lunch specials available Monday-Friday, 11am-2pm</span>
              </li>
            </ul>
            <div className="text-center">
              <Link to="/menu">
                <Button variant="outline" className="border-gold-300 text-gold-700 hover:bg-gold-50">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-card rounded-lg shadow-md p-6 border border-gold-200/50 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 mx-auto">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium mb-4 text-center">Delivery Information</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>Flat rate delivery fee of $5 within 5km</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>$7 delivery fee for 5-10km distance</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>FREE delivery on orders over $60</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>Average delivery time: 30-45 minutes</span>
              </li>
            </ul>
            <div className="text-center">
              <Link to="/contact">
                <Button variant="outline" className="border-gold-300 text-gold-700 hover:bg-gold-50">
                  Delivery Area
                </Button>
              </Link>
            </div>
          </div>

          {/* Discounts & Referrals */}
          <div className="bg-card rounded-lg shadow-md p-6 border border-gold-200/50 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 mx-auto">
              <Gift className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium mb-4 text-center">Discounts & Referrals</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>10% off your first online order</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>Refer a friend and both get $5 off your next order</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>Sign up for our newsletter for exclusive offers</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span>Special discounts for large catering orders</span>
              </li>
            </ul>
            <div className="text-center">
              <Button
                className="bg-gold-500 hover:bg-gold-600 text-white"
                onClick={() => setIsAuthOpen(true)}
              >
                Sign Up Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Auth Modal */}
    <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} initialTab="signup" />
  );
};

export default SpecialOffers;
