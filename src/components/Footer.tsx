
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    // Reset the form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
            Join Our Culinary Journey
          </h3>
          <p className="text-white/70 mb-6">
            Subscribe to our newsletter for exclusive offers, recipes, and updates.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Your email address" 
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button 
              type="submit" 
              className="bg-gold-500 hover:bg-gold-600 text-white shrink-0"
            >
              Subscribe
            </Button>
          </form>
        </div>
        
        <hr className="border-white/10 my-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://ik.imagekit.io/humbling/SnapBG.ai_1741181355169.png?updatedAt=1741181376482" 
                alt="Blackora" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-serif font-semibold">Blackora</span>
            </div>
            <p className="text-white/70 mb-6">
              Experience the authentic flavors of African cuisine in the heart of Prince George, Canada.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-gold-400">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-gold-400">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-gold-400">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-400 mr-3 mt-0.5 shrink-0" />
                <span className="text-white/70">
                  123 Main Street, Prince George, BC V2L 3H1, Canada
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-400 mr-3 shrink-0" />
                <span className="text-white/70">(250) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-400 mr-3 shrink-0" />
                <span className="text-white/70">info@blackora.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gold-400 mr-3 mt-0.5 shrink-0" />
                <div className="text-white/70">
                  <p>Mon-Thu: 11am - 10pm</p>
                  <p>Fri-Sat: 11am - 11pm</p>
                  <p>Sun: 12pm - 9pm</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/menu" className="text-white/70 hover:text-gold-400 transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-white/70 hover:text-gold-400 transition-colors">
                  Make a Reservation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/70 hover:text-gold-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Policies */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Policies</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-gold-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-gold-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-white/70 hover:text-gold-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-gold-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm">
              © 2024 Blackora. All rights reserved.
            </div>
            <div className="flex gap-4 text-sm">
              <Link to="/privacy" className="text-white/50 hover:text-gold-400 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-gold-400 transition-colors">
                Terms
              </Link>
              <Link to="/sitemap" className="text-white/50 hover:text-gold-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
