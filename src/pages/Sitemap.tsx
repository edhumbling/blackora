
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Sitemap = () => {
  // Define the site structure
  const siteStructure = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      category: "Order & Reservations",
      links: [
        { name: "Reservations", path: "/reservations" },
        { name: "Reservation Confirmation", path: "/reservation-confirmation" },
        { name: "Cart", path: "/cart" },
        { name: "Checkout", path: "/checkout" },
        { name: "Order Confirmation", path: "/order-confirmation" },
        { name: "Order Tracking", path: "/order-tracking" },
      ]
    },
    {
      category: "Company Information",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
      ]
    },
    {
      category: "Policies & Help",
      links: [
        { name: "Terms of Service", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Refund Policy", path: "/refund" },
        { name: "FAQ", path: "/faq" },
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">Sitemap</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
              {siteStructure.map((category, index) => (
                <div key={index}>
                  <h2 className="text-xl font-serif font-semibold mb-4 pb-2 border-b">
                    {category.category}
                  </h2>
                  <ul className="space-y-3 mt-4">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.path} 
                          className="text-muted-foreground hover:text-gold-600 transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
};

export default Sitemap;
