
import { Link } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ReservationConfirmation = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-card shadow-lg rounded-lg border p-8">
              <div className="flex justify-center mb-6">
                <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-4">Reservation Confirmed!</h1>
              
              <p className="text-muted-foreground mb-6">
                Thank you for your reservation at Blackora. We've sent a confirmation email with all the details.
              </p>
              
              <div className="border-t border-b py-4 my-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-left">
                    <p className="text-muted-foreground">Reservation #:</p>
                    <p className="font-medium">BLK-{Math.floor(100000 + Math.random() * 900000)}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-muted-foreground">Date:</p>
                    <p className="font-medium">June 15, 2024</p>
                  </div>
                  <div className="text-left">
                    <p className="text-muted-foreground">Time:</p>
                    <p className="font-medium">6:00 PM</p>
                  </div>
                  <div className="text-left">
                    <p className="text-muted-foreground">Guests:</p>
                    <p className="font-medium">2 People</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Link to="/menu">
                  <Button className="w-full">View Our Menu</Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="w-full">Back to Home</Button>
                </Link>
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

export default ReservationConfirmation;
