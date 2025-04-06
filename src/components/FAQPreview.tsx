
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPreview = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to our most commonly asked questions
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg p-1">
              <AccordionTrigger className="px-4 py-2 hover:no-underline font-medium">
                What type of cuisine does Authentic African Foods serve?
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                Authentic African Foods specializes in authentic African cuisine, with a focus on traditional dishes from
                various regions across the continent. Our menu features a blend of flavors, spices, and cooking
                techniques that celebrate the rich culinary heritage of Africa.
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
          </Accordion>

          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="outline" className="border-gold-300 text-gold-700 hover:bg-gold-50">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
