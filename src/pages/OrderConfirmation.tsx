
import { Link } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  // Calculate estimated delivery time (30-45 minutes from now)
  const deliveryTime = new Date();
  deliveryTime.setMinutes(deliveryTime.getMinutes() + 30);
  const formattedTime = deliveryTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card shadow-lg rounded-lg border p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-4">Thank You for Your Order!</h1>

              <p className="text-muted-foreground mb-6">
                Your order has been received and is being prepared. We've sent a confirmation email with order details.
              </p>

              <div className="bg-muted rounded-lg p-6 mb-8">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-left">
                      <h3 className="text-sm font-medium text-muted-foreground">Order Number</h3>
                      <p className="font-semibold">{orderNumber}</p>
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-medium text-muted-foreground">Estimated Delivery</h3>
                      <p className="font-semibold">Today, {formattedTime}</p>
                    </div>
                  </div>

                  <div className="text-left">
                    <h3 className="text-sm font-medium text-muted-foreground">Delivery Address</h3>
                    <p className="font-semibold">123 Main Street, Prince George, BC V2L 3H1, Canada</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link to="/order-tracking">
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                    Track Your Order
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Link to="/menu">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact our customer support at{" "}
                  <a href="tel:+1-250-123-4567" className="text-gold-600 hover:underline">
                    (250) 123-4567
                  </a>{" "}
                  or{" "}
                  <a href="mailto:support@authenticafricanfoods.com" className="text-gold-600 hover:underline">
                    support@authenticafricanfoods.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Toaster position="top-right" />
    </main>
  );
};

export default OrderConfirmation;
