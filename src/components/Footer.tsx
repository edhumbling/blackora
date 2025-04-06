import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock, User, Globe } from "lucide-react";
import { toast } from "sonner";
import ScrollingText from "./ScrollingText";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    // Reset the form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <footer className="relative text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ik.imagekit.io/edhumbling/image%20(1).jpg?updatedAt=1743790082800"
          alt="Footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 container mx-auto py-10 sm:py-12 md:py-16">
        <div className="max-w-xl mx-auto text-center mb-6 sm:mb-8 md:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold mb-3 sm:mb-4">
            Join Our Culinary Journey
          </h3>
          <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
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
              className="bg-gold-500 hover:bg-gold-600 text-white shrink-0 w-full sm:w-auto"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <hr className="border-white/10 my-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="https://ik.imagekit.io/edhumbling/SnapBG.ai_1743785834763.png?updatedAt=1743790011258"
                alt="Authentic African Foods"
                className="h-10 w-auto"
              />
              <span className="text-xl font-serif font-semibold">Authentic African Foods</span>
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
                <User className="h-5 w-5 text-gold-400 mr-3 mt-0.5 shrink-0" />
                <span className="text-white/70">Hardy Yusif</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-400 mr-3 mt-0.5 shrink-0" />
                <span className="text-white/70">
                  1471 Ingenika Street, Prince George, BC, Canada
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-400 mr-3 shrink-0" />
                <span className="text-white/70">(250) 301-3828</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-400 mr-3 shrink-0" />
                <span className="text-white/70">authenticafricanfoods@company.ca</span>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 text-gold-400 mr-3 shrink-0" />
                <span className="text-white/70">company.ca</span>
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
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm">
              © Authentic African Foods. All rights reserved.
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

      {/* Scrolling Text */}
      <ScrollingText text="Authentic African Foods" speed={20} />

      {/* Made with love footer */}
      <div className="w-full bg-black py-3 text-center">
        <a
          href="https://linkedin.com/in/edhumbling"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 text-sm font-medium text-white animate-pulse hover:animate-none transition-all duration-300 px-4 py-1 rounded-full bg-gradient-to-r from-gold-600/20 to-gold-400/20 backdrop-blur-sm border border-gold-500/30 shadow-[0_0_15px_rgba(215,181,80,0.5)] hover:shadow-[0_0_25px_rgba(215,181,80,0.8)]"
        >
          Made with <span className="text-red-500 text-lg animate-pulse">❤</span> by <span className="underline decoration-gold-500 decoration-2 underline-offset-2 font-semibold hover:text-gold-400">Emma</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
