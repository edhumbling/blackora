
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-card p-8 md:p-10 rounded-lg shadow-sm">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">Privacy Policy</h1>

            <div className="prose dark:prose-invert max-w-none space-y-8 prose-p:leading-relaxed prose-li:my-1 prose-ul:my-4 prose-h2:mt-8 prose-h3:mt-6">
              <p>Last Updated: June 1, 2024</p>

              <h2>1. Introduction</h2>
              <p>
                Authentic African Foods Restaurant ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, mobile application, and use our services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with our policies and practices, do not use our Services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We may collect several types of information from and about users of our Services:
              </p>
              <h3>Personal Information</h3>
              <p>
                We may collect personal information that you provide to us directly, such as your name, email address, postal address, phone number, payment information, and any other information you choose to provide.
              </p>
              <h3>Usage Information</h3>
              <p>
                We may automatically collect certain information about your use of our Services, including:
              </p>
              <ul>
                <li>Log information, such as your IP address, browser type, operating system, pages you visit, and time and date of your visit.</li>
                <li>Device information, such as your device type, device ID, and operating system.</li>
                <li>Location information, such as your general geographic location based on your IP address or more precise location when permitted by you.</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>To provide, maintain, and improve our Services</li>
                <li>To process and fulfill your orders, including delivery and payment processing</li>
                <li>To communicate with you about your orders, accounts, and other customer service matters</li>
                <li>To send you promotional offers, newsletters, and other marketing communications</li>
                <li>To monitor and analyze usage patterns and trends</li>
                <li>To protect our Services and users from fraudulent, unauthorized, or illegal activity</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2>4. How We Share Your Information</h2>
              <p>
                We may share your information with the following parties:
              </p>
              <ul>
                <li>Service providers who perform services on our behalf, such as payment processing, delivery services, and IT services</li>
                <li>Business partners with whom we jointly offer products or services</li>
                <li>Law enforcement or other governmental agencies, as required by applicable law</li>
                <li>Third parties in connection with a merger, acquisition, or sale of all or a portion of our assets</li>
              </ul>

              <h2>5. Your Choices</h2>
              <p>
                You have certain choices regarding the information you provide to us:
              </p>
              <h3>Account Information</h3>
              <p>
                You may update, correct, or delete your account information by logging into your account or contacting us directly.
              </p>
              <h3>Marketing Communications</h3>
              <p>
                You may opt out of receiving marketing communications from us by following the unsubscribe instructions included in our emails or by contacting us directly.
              </p>
              <h3>Cookies</h3>
              <p>
                Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject cookies.
              </p>

              <h2>6. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. We cannot guarantee the security of your personal information transmitted to our Services.
              </p>

              <h2>7. Changes to Our Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h2>8. Contact Information</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy, please contact us at:
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

export default Privacy;
