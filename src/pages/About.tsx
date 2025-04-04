
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-10 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">About Authentic African Foods</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Discover the story behind Prince George's premier African dining experience.
            </p>
          </div>
        </div>
      </div>

      <About />

      <div className="py-20 px-4 sm:px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At Authentic African Foods, our mission is to celebrate and share the diverse culinary traditions of Africa with our community.
              We are committed to creating authentic, flavorful dishes that honor traditional recipes while incorporating local,
              sustainable ingredients. Through our food, we aim to foster cultural understanding and provide a warm, welcoming
              space where people can connect over exceptional meals.
            </p>
            <p className="text-muted-foreground mb-0">
              We believe that food is a universal language that brings people together, and we're dedicated to creating memorable
              dining experiences that transport our guests to the vibrant landscapes and rich cultures of Africa.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Meet Our Chef</h2>
              <p className="text-muted-foreground mb-4">
                Chef Hardy Yusif, the creative force behind Authentic African Foods, brings over 15 years of culinary expertise to our kitchen.
                Born and raised in Ghana, Hardy's passion for cooking was ignited at an early age as he watched his grandmother
                prepare traditional dishes using time-honored techniques.
              </p>
              <p className="text-muted-foreground mb-4">
                After formal culinary training and working in renowned restaurants across Africa and Europe, Hardy moved to Canada
                with a dream of introducing authentic African cuisine to new audiences. His cooking philosophy centers on respecting
                traditional recipes while thoughtfully incorporating local Canadian ingredients.
              </p>
              <p className="text-muted-foreground mb-6">
                "Food is more than sustenance—it's a story, a heritage, and a bridge between cultures," says Hardy. "At Authentic African Foods,
                each dish we serve carries the essence of African hospitality and the joy of shared meals."
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 blur-md animate-pulse"></div>
              <div className="relative p-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-300">
                <div className="p-1 bg-white/10 rounded-full backdrop-blur-sm">
                  <img
                    src="https://ik.imagekit.io/humbling/food/SnapBG.ai_1741191404896.png?updatedAt=1741191425068"
                    alt="Chef Hardy Yusif"
                    className="w-80 h-80 object-cover rounded-full border-2 border-gold-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Authenticity</h3>
              <p className="text-muted-foreground">
                We honor traditional African recipes and cooking methods, ensuring each dish truly represents its cultural origins.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Community</h3>
              <p className="text-muted-foreground">
                We believe in creating a welcoming space where people can gather, connect, and share experiences over great food.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to responsible sourcing practices and minimizing our environmental footprint in all aspects of our operation.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                While respecting tradition, we embrace creative approaches that enhance the dining experience.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every aspect of our service, from the quality of our food to the attentiveness of our staff.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Inclusivity</h3>
              <p className="text-muted-foreground">
                We celebrate diversity and create a space where everyone feels welcome, respected, and valued.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">Visit Us Today</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            We invite you to experience the flavors, warmth, and hospitality of Authentic African Foods. Whether you're new to African cuisine
            or a seasoned enthusiast, our team looks forward to welcoming you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gold-500 hover:bg-gold-600 text-white">
              Make a Reservation
            </Button>
            <Button variant="outline" className="border-gold-300 text-gold-700 hover:bg-gold-50">
              View Our Menu
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <Toaster position="top-right" />
    </main>
  );
};

export default AboutPage;
