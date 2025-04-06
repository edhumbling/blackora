
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-card p-8 md:p-10 rounded-lg shadow-sm">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">Refund Policy</h1>

            <div className="prose dark:prose-invert max-w-none space-y-8 prose-p:leading-relaxed prose-li:my-1 prose-ul:my-4 prose-h2:mt-8 prose-h3:mt-6">
              <p>Last Updated: June 1, 2024</p>

              <h2>1. Overview</h2>
              <p>
                At Authentic African Foods Restaurant, we are committed to ensuring your satisfaction with our food and services.
                This Refund Policy outlines the circumstances under which we will offer refunds for orders placed
                through our website, mobile application, or in our restaurant.
              </p>

              <h2>2. Online Orders</h2>
              <h3>2.1 Incorrect or Missing Items</h3>
              <p>
                If your order is incorrect or if items are missing, please contact us within 30 minutes of receiving
                your order. We will verify your claim and either:
              </p>
              <ul>
                <li>Replace the incorrect or missing items, or</li>
                <li>Provide a full refund for the affected items.</li>
              </ul>

              <h3>2.2 Quality Issues</h3>
              <p>
                If you are not satisfied with the quality of the food you received, please contact us within 30 minutes
                of receiving your order. We may ask for photos or other evidence of the quality issue. After review, we may:
              </p>
              <ul>
                <li>Replace the affected items, or</li>
                <li>Provide a full or partial refund at our discretion.</li>
              </ul>

              <h3>2.3 Delivery Issues</h3>
              <p>
                If your order is significantly delayed (over 30 minutes from the estimated delivery time) or if the
                food arrives in a condition that renders it inedible due to transit, please contact us immediately.
                We may offer:
              </p>
              <ul>
                <li>A full or partial refund of the order amount including delivery fees, or</li>
                <li>Store credit for a future order.</li>
              </ul>

              <h2>3. In-Restaurant Dining</h2>
              <p>
                If you are dining in our restaurant and are not satisfied with your meal or service, please notify
                your server immediately. We will make every effort to resolve the issue while you are in the restaurant.
                If we cannot resolve the issue to your satisfaction, we may:
              </p>
              <ul>
                <li>Replace your meal with another menu item of your choice, or</li>
                <li>Remove the affected items from your bill.</li>
              </ul>

              <h2>4. Pre-paid Reservations and Events</h2>
              <p>
                For pre-paid reservations or special events that require advance payment:
              </p>
              <h3>4.1 Cancellations by You</h3>
              <ul>
                <li>Cancellations made 48+ hours before the reservation/event: Full refund</li>
                <li>Cancellations made 24-48 hours before the reservation/event: 50% refund</li>
                <li>Cancellations made less than 24 hours before the reservation/event: No refund</li>
              </ul>

              <h3>4.2 Cancellations by Us</h3>
              <p>
                If we need to cancel your reservation or event for any reason, we will provide a full refund of your
                prepayment and may offer additional compensation such as a discount voucher for a future visit.
              </p>

              <h2>5. Gift Cards</h2>
              <p>
                Gift cards are non-refundable and cannot be exchanged for cash. Gift cards do not expire and can be
                used for both in-restaurant dining and online orders.
              </p>

              <h2>6. How to Request a Refund</h2>
              <p>
                To request a refund, you can:
              </p>
              <ul>
                <li>Call us at (250) 301-3828</li>
                <li>Email us at authenticafricanfoods@company.ca</li>
                <li>Use the "Contact Us" form on our website</li>
                <li>Speak to a manager if you are in the restaurant</li>
              </ul>

              <h2>7. Refund Processing</h2>
              <p>
                Approved refunds will be processed using the original payment method. Please allow 3-5 business days
                for the refund to appear in your account. For cash payments, we may issue store credit or require you
                to visit the restaurant to receive your cash refund.
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>
                We reserve the right to modify this Refund Policy at any time. Any changes will be effective immediately
                upon posting the updated policy on our website.
              </p>

              <h2>9. Contact Information</h2>
              <p>
                If you have any questions about our Refund Policy, please contact us at:
              </p>
              <p>
                Email: authenticafricanfoods@company.ca<br />
                Phone: (250) 301-3828<br />
                Address: 1471 Ingenika Street, Prince George, BC, Canada
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Toaster position="top-right" />
    </main>
  );
};

export default Refund;
