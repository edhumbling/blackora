
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { cart, removeItem, updateQuantity, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/checkout");
    }, 1000);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Your Cart</h1>
          
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/menu">
                <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                  Browse Our Menu
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-card shadow rounded-lg border">
                  <div className="p-6">
                    <div className="flow-root">
                      <ul className="divide-y">
                        {cart.map((item) => (
                          <li key={item.id} className="py-6 flex">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium">
                                  <h3>{item.name}</h3>
                                  <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                              </div>
                              
                              <div className="flex flex-1 items-end justify-between mt-4">
                                <div className="flex items-center border rounded-md">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                    disabled={item.quantity <= 1}
                                    className="h-8 w-8"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="px-3">{item.quantity}</span>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="h-8 w-8"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                                
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeItem(item.id)}
                                  className="text-destructive hover:text-destructive/90"
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t px-6 py-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={clearCart}
                      className="text-destructive hover:text-destructive-foreground hover:bg-destructive/10"
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card shadow rounded-lg border h-fit sticky top-24">
                  <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-4">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-4">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>$5.00</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-4">
                        <span className="text-muted-foreground">Tax</span>
                        <span>${(totalPrice * 0.05).toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${(totalPrice + 5 + totalPrice * 0.05).toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button
                      className="w-full mt-6 bg-gold-500 hover:bg-gold-600 text-white"
                      onClick={handleCheckout}
                      disabled={isLoading || cart.length === 0}
                    >
                      {isLoading ? "Processing..." : "Proceed to Checkout"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
};

export default Cart;
