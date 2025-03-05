
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  ChefHat, 
  Bike, 
  Home, 
  CheckCircle,
  Clock 
} from "lucide-react";

const OrderTracking = () => {
  // Mock order status (in a real app, this would come from an API)
  const [currentStatus] = useState(2); // 0: received, 1: preparing, 2: out for delivery, 3: delivered
  
  const orderStatuses = [
    { id: 0, title: "Order Received", icon: Package, time: "12:30 PM", completed: currentStatus >= 0 },
    { id: 1, title: "Preparing", icon: ChefHat, time: "12:35 PM", completed: currentStatus >= 1 },
    { id: 2, title: "Out for Delivery", icon: Bike, time: "12:50 PM", completed: currentStatus >= 2 },
    { id: 3, title: "Delivered", icon: Home, time: "1:15 PM", completed: currentStatus >= 3 }
  ];

  // Calculate estimated delivery time (remaining minutes)
  const remainingMinutes = 25; // This would be calculated based on the current status

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Track Your Order</h1>
            
            <div className="bg-card shadow-lg rounded-lg border mb-8">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-medium">Order #123456</h2>
                    <p className="text-sm text-muted-foreground">Placed at 12:30 PM</p>
                  </div>
                  <div className="bg-gold-100 dark:bg-gold-900/20 text-gold-800 dark:text-gold-300 font-medium py-1 px-3 rounded-full text-sm">
                    In Progress
                  </div>
                </div>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="relative max-w-xs w-full mx-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gold-600">Blackora</span>
                      <span className="text-sm font-medium">Your location</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div
                        className="h-2 bg-gold-500 rounded-full transition-all duration-500"
                        style={{ width: `${(currentStatus / (orderStatuses.length - 1)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                {currentStatus < 3 && (
                  <div className="bg-muted mb-8 p-4 rounded-lg flex items-center">
                    <Clock className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                    <p className="text-sm">
                      Estimated delivery: <span className="font-medium">{remainingMinutes} minutes</span>
                    </p>
                  </div>
                )}
                
                <div className="space-y-6">
                  {orderStatuses.map((status, index) => (
                    <div key={status.id} className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          status.completed 
                            ? "bg-gold-100 dark:bg-gold-900/20 text-gold-600 dark:text-gold-400" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {status.completed ? (
                            status.id === currentStatus ? (
                              <status.icon className="h-5 w-5" />
                            ) : (
                              <CheckCircle className="h-5 w-5" />
                            )
                          ) : (
                            <status.icon className="h-5 w-5" />
                          )}
                        </div>
                        {index < orderStatuses.length - 1 && (
                          <div className={`w-px h-full my-2 ${
                            status.completed && orderStatuses[index + 1].completed 
                              ? "bg-gold-500" 
                              : "bg-muted"
                          }`} />
                        )}
                      </div>
                      <div className="pb-8">
                        <div className="flex items-baseline">
                          <h3 className={`text-base font-medium ${
                            status.completed ? "text-foreground" : "text-muted-foreground"
                          }`}>
                            {status.title}
                          </h3>
                          {status.completed && (
                            <span className="ml-3 text-xs text-muted-foreground">{status.time}</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {status.id === 0 && "Your order has been received and is being processed."}
                          {status.id === 1 && "Our chefs are preparing your delicious meal."}
                          {status.id === 2 && "Your order is on its way to your location."}
                          {status.id === 3 && "Your order has been delivered. Enjoy your meal!"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-card shadow-lg rounded-lg border">
              <div className="p-6">
                <h2 className="text-xl font-medium mb-4">Order Details</h2>
                
                <div className="divide-y">
                  <div className="py-4 flex justify-between">
                    <div>
                      <p className="font-medium">Jollof Rice with Grilled Chicken</p>
                      <p className="text-sm text-muted-foreground">Quantity: 1</p>
                    </div>
                    <p className="font-medium">$18.99</p>
                  </div>
                  <div className="py-4 flex justify-between">
                    <div>
                      <p className="font-medium">Egusi Soup with Fufu</p>
                      <p className="text-sm text-muted-foreground">Quantity: 1</p>
                    </div>
                    <p className="font-medium">$22.99</p>
                  </div>
                  <div className="py-4 flex justify-between">
                    <div>
                      <p className="font-medium">Mango Smoothie</p>
                      <p className="text-sm text-muted-foreground">Quantity: 2</p>
                    </div>
                    <p className="font-medium">$11.98</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$53.96</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>$2.70</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$61.66</span>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="flex-1">
                    Need Help?
                  </Button>
                  <Link to="/menu" className="flex-1">
                    <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                      Order Again
                    </Button>
                  </Link>
                </div>
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

export default OrderTracking;
