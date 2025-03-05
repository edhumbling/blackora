
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ChefHat, Utensils, Truck, Phone, ShoppingBag, BarChart } from "lucide-react";
import { toast } from "sonner";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null as File | null,
    coverLetter: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your application has been submitted successfully!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      resume: null,
      coverLetter: ""
    });
  };

  const jobOpenings = [
    {
      title: "Head Chef",
      department: "Kitchen",
      type: "Full-time",
      icon: ChefHat,
      description: "We're looking for an experienced Head Chef with a passion for African cuisine to lead our kitchen team."
    },
    {
      title: "Server",
      department: "Front of House",
      type: "Part-time",
      icon: Utensils,
      description: "Join our team as a Server and provide exceptional dining experiences to our guests."
    },
    {
      title: "Delivery Driver",
      department: "Operations",
      type: "Part-time",
      icon: Truck,
      description: "Deliver our delicious meals to customers in the Prince George area."
    },
    {
      title: "Host/Hostess",
      department: "Front of House",
      type: "Part-time",
      icon: Phone,
      description: "Greet and seat guests, manage reservations, and ensure a warm welcome to all visitors."
    },
    {
      title: "Sous Chef",
      department: "Kitchen",
      type: "Full-time",
      icon: ChefHat,
      description: "Work alongside our Head Chef to prepare authentic African dishes and maintain kitchen standards."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      icon: ShoppingBag,
      description: "Develop and implement marketing strategies to promote our restaurant and African cuisine."
    },
    {
      title: "Restaurant Manager",
      department: "Management",
      type: "Full-time",
      icon: BarChart,
      description: "Oversee daily operations, staff management, and ensure excellent customer service."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Join Our Team</h1>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Blackora is more than just a restaurant – we're a family dedicated to sharing the rich flavors and 
                cultural heritage of African cuisine. If you're passionate about food, hospitality, and creating 
                memorable experiences, we'd love to hear from you.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-serif font-semibold mb-6">Current Openings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobOpenings.map((job, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="mb-4 flex items-center justify-between">
                      <job.icon className="h-8 w-8 text-gold-500" />
                      <span className="text-sm font-medium px-2 py-1 bg-secondary rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">Department: {job.department}</p>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-gold-300 text-gold-700 hover:bg-gold-50"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, position: job.title }));
                        document.getElementById('application-form')?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div id="application-form" className="bg-secondary/50 rounded-lg p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">Apply Now</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(250) 123-4567"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="position" className="block text-sm font-medium">
                      Position *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map((job, index) => (
                        <option key={index} value={job.title}>{job.title}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="resume" className="block text-sm font-medium">
                    Resume/CV (PDF) *
                  </label>
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Max file size: 5MB. Accepted format: PDF.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="coverLetter" className="block text-sm font-medium">
                    Cover Letter
                  </label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you're interested in joining Blackora and what you'll bring to our team..."
                    rows={5}
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="bg-gold-500 hover:bg-gold-600 text-white"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-serif font-semibold mb-4">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">Grow Your Career</h3>
                  <p className="text-muted-foreground">
                    We invest in our team members through training, mentorship, and opportunities for advancement.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">Competitive Benefits</h3>
                  <p className="text-muted-foreground">
                    Enjoy competitive wages, flexible scheduling, employee meals, and a supportive work environment.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">Cultural Experience</h3>
                  <p className="text-muted-foreground">
                    Immerse yourself in African culture and cuisine, building connections with our diverse team and guests.
                  </p>
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

export default Careers;
