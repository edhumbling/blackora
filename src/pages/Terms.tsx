
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-card p-8 md:p-10 rounded-lg shadow-sm">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">Terms of Service</h1>

            <div className="prose dark:prose-invert max-w-none space-y-8 prose-p:leading-relaxed prose-li:my-1 prose-ul:my-4 prose-h2:mt-8 prose-h3:mt-6">
              <p>Last Updated: June 1, 2024</p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to Authentic African Foods Restaurant ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website, mobile application, and services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>

              <h2>2. Use of Services</h2>
              <p>
                You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you are at least 18 years old.
              </p>
              <p>
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
              </p>
              <ul>
                <li>In any way that violates any applicable federal, provincial, local, or international law or regulation.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
                <li>To impersonate or attempt to impersonate Authentic African Foods, an Authentic African Foods employee, another user, or any other person or entity.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services.</li>
              </ul>

              <h2>3. Online Ordering and Delivery</h2>
              <p>
                By placing an order through our Services, you agree to provide accurate and complete information about yourself and your order.
              </p>
              <p>
                We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or identification of potential fraud or abuse.
              </p>
              <p>
                Delivery times are estimates and are not guaranteed. Various factors may affect delivery times, including weather conditions, traffic, and order volume.
              </p>

              <h2>4. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account password and for any activities or actions under your account.
              </p>
              <p>
                We reserve the right to terminate or suspend your account at any time for any reason, including, but not limited to, if we suspect that any information you provide is not accurate, complete, or current.
              </p>

              <h2>5. Payments and Refunds</h2>
              <p>
                All payments are processed securely through our payment processors. By providing your payment information, you represent and warrant that you are authorized to use the payment method provided.
              </p>
              <p>
                Refunds may be issued at our discretion in accordance with our Refund Policy.
              </p>

              <h2>6. Intellectual Property</h2>
              <p>
                The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Authentic African Foods, its licensors, or other providers of such material and are protected by Canadian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                In no event will Authentic African Foods, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Services, including any direct, indirect, special, incidental, consequential, or punitive damages.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them.
              </p>
              <p>
                Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.
              </p>

              <h2>9. Contact Information</h2>
              <p>
                Questions or comments about the Services or these Terms may be directed to our customer service team at authenticafricanfoods@company.ca or by calling us at (250) 301-3828.
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

export default Terms;
