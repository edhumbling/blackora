
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CheckoutPage = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      navigate("/order-confirmation");
    }, 2000);
  };

  // Calculate total with shipping and tax
  const shipping = 5;
  const tax = subtotal * 0.05;
  const orderTotal = subtotal + shipping + tax;

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {/* Delivery Information */}
                  <div className="bg-card shadow rounded-lg border p-6">
                    <h2 className="text-xl font-medium mb-6">Delivery Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Your phone number" required />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" placeholder="Your street address" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Your city" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Select required>
                          <SelectTrigger id="state">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bc">British Columbia</SelectItem>
                            <SelectItem value="ab">Alberta</SelectItem>
                            <SelectItem value="on">Ontario</SelectItem>
                            <SelectItem value="qc">Quebec</SelectItem>
                            <SelectItem value="ns">Nova Scotia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="zip">Postal Code</Label>
                        <Input id="zip" placeholder="Postal code" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select defaultValue="ca" required>
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Method */}
                  <div className="bg-card shadow rounded-lg border p-6">
                    <h2 className="text-xl font-medium mb-6">Payment Method</h2>
                    
                    <Tabs 
                      defaultValue="card" 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-3 mb-6">
                        <TabsTrigger value="card">Credit Card</TabsTrigger>
                        <TabsTrigger value="paypal">PayPal</TabsTrigger>
                        <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="card">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" placeholder="Name as it appears on card" required={paymentMethod === "card"} />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input 
                              id="cardNumber" 
                              placeholder="•••• •••• •••• ••••" 
                              required={paymentMethod === "card"} 
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" required={paymentMethod === "card"} />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="cvc">CVC</Label>
                              <Input id="cvc" placeholder="CVC" required={paymentMethod === "card"} />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="paypal">
                        <div className="text-center py-8">
                          <p className="text-muted-foreground mb-4">You'll be redirected to PayPal to complete your payment.</p>
                          <img 
                            src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" 
                            alt="PayPal" 
                            className="h-12 mx-auto"
                          />
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="apple">
                        <div className="text-center py-8">
                          <p className="text-muted-foreground mb-4">You'll be redirected to Apple Pay to complete your payment.</p>
                          <svg viewBox="0 0 24 24" className="h-8 mx-auto fill-current">
                            <path d="M12.146 22c-1.044 0-1.783-.402-2.585-.859-.731-.418-1.485-.85-2.594-.85-1.155 0-1.933.445-2.683.875-.774.444-1.573.9-2.714.934L1 22.096l-.03-.572c-.025-.479.076-.954.3-1.397a3.15 3.15 0 0 1 1.059-1.106c.623-.446 1.261-.906 1.261-1.853 0-.695-.45-1.358-.885-2.004-.638-.949-1.302-1.93-1.302-3.333 0-2.731 2.136-5.866 5.762-5.866 1.469 0 2.701.526 3.794.981.985.411 1.756.735 2.385.735.584 0 1.325-.317 2.276-.714 1.17-.487 2.486-1.036 3.982-1.036h.001c1.1 0 3.567.227 4.882 2.765l.126.243-.241.13c-.574.308-1.591 1.115-1.591 2.802 0 2.206 1.6 3.202 2.632 3.83.263.16.561.341.607.417.088.14-.192.57-.465.894-.414.493-.882 1.05-1.596 1.05-.638 0-1.049-.34-1.496-.71-.474-.392-1.013-.836-1.891-.836-.878 0-1.484.516-2.112 1.057-.693.594-1.409 1.21-2.496 1.21H12.146z"/>
                          </svg>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  {/* Delivery Options */}
                  <div className="bg-card shadow rounded-lg border p-6">
                    <h2 className="text-xl font-medium mb-6">Delivery Options</h2>
                    
                    <RadioGroup defaultValue="standard" className="space-y-4">
                      <div className="flex items-start space-x-3 border rounded-md p-4">
                        <RadioGroupItem value="standard" id="standard" />
                        <div className="grid gap-1.5">
                          <Label htmlFor="standard" className="font-medium">Standard Delivery - $5.00</Label>
                          <p className="text-sm text-muted-foreground">Delivery within 30-45 minutes</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 border rounded-md p-4">
                        <RadioGroupItem value="express" id="express" />
                        <div className="grid gap-1.5">
                          <Label htmlFor="express" className="font-medium">Express Delivery - $8.00</Label>
                          <p className="text-sm text-muted-foreground">Delivery within 15-25 minutes</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 border rounded-md p-4">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <div className="grid gap-1.5">
                          <Label htmlFor="pickup" className="font-medium">Pickup - Free</Label>
                          <p className="text-sm text-muted-foreground">Ready for pickup in 15 minutes</p>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card shadow rounded-lg border sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                  
                  <div className="divide-y space-y-4">
                    {items.map((item) => (
                      <div key={item.menuItem.id} className="flex justify-between py-4">
                        <div className="flex">
                          <div className="flex-1 ml-3">
                            <p className="font-medium">{item.menuItem.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${(item.menuItem.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${orderTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full mt-8 bg-gold-500 hover:bg-gold-600 text-white"
                    onClick={handleSubmit}
                    disabled={isSubmitting || items.length === 0}
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </Button>
                  
                  <div className="text-center mt-4 text-xs text-muted-foreground">
                    By placing your order, you agree to our <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
                  </div>
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

export default CheckoutPage;
