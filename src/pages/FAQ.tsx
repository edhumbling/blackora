import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">Frequently Asked Questions</h1>

            <div className="my-8">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                    What type of cuisine does Authentic African Foods serve?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2">
                    Authentic African Foods specializes in authentic African cuisine, with a focus on traditional dishes from various regions
                    across the continent. Our menu features a blend of flavors, spices, and cooking techniques that celebrate
                    the rich culinary heritage of Africa.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                    Do you accommodate dietary restrictions?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2">
                    Yes, we offer a variety of options for guests with dietary restrictions. Our menu includes vegetarian,
                    vegan, and gluten-free items. If you have specific allergies or dietary needs, please inform our staff
                    when placing your order, and we will do our best to accommodate you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                    How can I make a reservation?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2">
                    Reservations can be made online through our website's reservation page, by calling us at (250) 301-3828,
                    or by emailing authenticafricanfoods@company.ca. We recommend making reservations at least 48 hours in advance,
                    especially for weekends and holidays.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                    What are your hours of operation?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2">
                    We are open Monday through Thursday from 11am to 10pm, Friday and Saturday from 11am to 11pm,
                    and Sunday from 12pm to 9pm. Our kitchen closes 30 minutes before closing time.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                    Do you offer takeout and delivery?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2">
                    Yes, we offer both takeout and delivery services. You can place orders directly through our website
                    or by calling the restaurant. Delivery is available within a 5-mile radius of our location. For larger
                    catering orders, please contact us at least 24 hours in advance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                    Is there parking available?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2">
                    Yes, we have a dedicated parking lot for our guests with free parking for up to 2 hours. There is also
                    street parking available in the surrounding area.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                    Do you have options for kids?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2">
                    Yes, we have a special kids' menu with smaller portions and milder flavors designed to introduce
                    children to African cuisine. High chairs and booster seats are available upon request.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                    Can you accommodate large groups?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2">
                    Yes, we can accommodate large groups and private events. For parties of 8 or more, we recommend making
                    a reservation in advance. For private events or large parties, please contact our events coordinator at
                    authenticafricanfoods@company.ca or call (250) 301-3828.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                    Do you have gift cards available?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2">
                    Yes, gift cards are available for purchase in-restaurant or online through our website. They make
                    perfect gifts for birthdays, anniversaries, or any special occasion.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2">
                    We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, cash,
                    and mobile payments (Apple Pay, Google Pay). We do not accept personal checks.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mt-12 bg-secondary/50 p-6 rounded-lg">
              <h2 className="text-xl font-serif font-semibold mb-4">Still Have Questions?</h2>
              <p className="mb-4">
                If you couldn't find the answer to your question, please don't hesitate to contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:authenticafricanfoods@company.ca" className="inline-flex">
                  <Button variant="default" className="bg-gold-500 hover:bg-gold-600 text-white">
                    Email Us
                  </Button>
                </a>
                <a href="tel:+12503013828" className="inline-flex">
                  <Button variant="outline" className="border-gold-300 text-gold-700 hover:bg-gold-50">
                    Call Us
                  </Button>
                </a>
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

export default FAQ;
