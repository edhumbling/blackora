
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
            <div className="p-6 bg-card rounded-lg shadow-md border border-gold-200 dark:border-gold-800/30">
              <p className="text-lg mb-0 leading-relaxed">
                Authentic African Foods (AAF) strives to create an authentic African culinary experience that connects people through food, culture, and community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">Our Vision</h2>
            <div className="p-6 bg-card rounded-lg shadow-md border border-gold-200 dark:border-gold-800/30">
              <p className="text-lg mb-0 leading-relaxed">
                To be the premier destination for authentic African cuisine in Northern BC not just as a thriving business that only offers delicious, traditional African dishes but also fosters cultural appreciation, community engagement, and economic empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 bg-secondary/30">
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
          <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card shadow-sm border border-gold-200/50 dark:border-gold-800/20 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-center">Authenticity</h3>
              <p className="text-muted-foreground text-center">
                We honor traditional African recipes and cooking methods, ensuring each dish truly represents its cultural origins.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-sm border border-gold-200/50 dark:border-gold-800/20 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-center">Quality</h3>
              <p className="text-muted-foreground text-center">
                We are committed to using the finest ingredients and maintaining the highest standards in food preparation and service.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-sm border border-gold-200/50 dark:border-gold-800/20 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-center">Community</h3>
              <p className="text-muted-foreground text-center">
                We believe in creating a welcoming space where people can gather, connect, and share experiences over great food.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-sm border border-gold-200/50 dark:border-gold-800/20 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-center">Customer-Centric</h3>
              <p className="text-muted-foreground text-center">
                We prioritize our customers' satisfaction and strive to exceed expectations in every interaction.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-sm border border-gold-200/50 dark:border-gold-800/20 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-center">Cultural Representation</h3>
              <p className="text-muted-foreground text-center">
                We proudly showcase the diversity and richness of African cultures through our food, decor, and overall experience.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-sm border border-gold-200/50 dark:border-gold-800/20 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22a8 8 0 0 1 8-8h12a8 8 0 0 1-8 8Z"/><path d="M12 11V2a5 5 0 0 0-5 5"/><path d="M17 11V2a5 5 0 0 1 5 5"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-center">Sustainability</h3>
              <p className="text-muted-foreground text-center">
                We're committed to responsible sourcing practices and minimizing our environmental footprint in all aspects of our operation.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-sm border border-gold-200/50 dark:border-gold-800/20 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7-3 5 3 5"/><path d="m19 7 3 5-3 5"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-center">Innovation & Growth</h3>
              <p className="text-muted-foreground text-center">
                While respecting tradition, we embrace creative approaches and continuous improvement to enhance the dining experience and grow our business.
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
