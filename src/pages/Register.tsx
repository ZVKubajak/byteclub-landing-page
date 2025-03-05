import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Bell, Mail, ArrowRight, Check, Star, Calendar, Shield } from "lucide-react";

const Register = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.substring(1);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          const headerOffset = 90;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle the form submission
  };

  const testimonials = [
    {
      name: "Brooke Bell",
      role: "Freelance Editor",
      text: "As an early subscriber, I appreciate the frequent updates on development and how every question about the app’s purpose is answered with clarity and detail."
    },
    {
      name: "John Pizzola",
      role: "Former Salesman at Sun and IBM",
      text: "As an early subscriber, I’m impressed by the consistent communication and transparency in keeping us informed and engaged throughout development."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full font-medium text-sm">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Stay Ahead with Our <br />
              <span className="text-[#fe262d]">Latest Updates</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Be the first to know when we launch and receive exclusive early-access benefits. Join our growing community of early adopters and help shape the future of our application.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-red-100 p-2 rounded-full mr-3 shrink-0">
                  <Bell size={18} className="text-[#fe262d]" />
                </div>
                <div>
                  <h3 className="font-medium">Launch Notifications</h3>
                  <p className="text-sm text-gray-500">Be first in line when we officially launch</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-red-100 p-2 rounded-full mr-3 shrink-0">
                  <Mail size={18} className="text-[#fe262d]" />
                </div>
                <div>
                  <h3 className="font-medium">Weekly Updates</h3>
                  <p className="text-sm text-gray-500">Stay informed about our progress</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-red-100 p-2 rounded-full mr-3 shrink-0">
                  <Star size={18} className="text-[#fe262d]" />
                </div>
                <div>
                  <h3 className="font-medium">Early Access</h3>
                  <p className="text-sm text-gray-500">Get beta access before public release</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-red-100 p-2 rounded-full mr-3 shrink-0">
                  <Shield size={18} className="text-[#fe262d]" />
                </div>
                <div>
                  <h3 className="font-medium">Priority Support</h3>
                  <p className="text-sm text-gray-500">Get help directly from our team</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div>
            <div id="newsletter" className="bg-white rounded-xl p-6 md:p-8 border shadow-sm border-gray-100">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Join the Byte Club Newsletter</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#fe262d] mt-1"
                          required
                        />
                        <span className="ml-2 text-sm text-gray-500">
                          I agree to receive marketing communications and understand I can unsubscribe at any time.
                        </span>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-[#fe262d] text-white rounded-lg hover:bg-[#e02420] transition-all duration-200 flex items-center justify-center font-medium"
                    >
                      Subscribe Now
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check size={30} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                  <p className="text-gray-600 mb-6">
                    You've successfully subscribed to our newsletter.
                    We'll keep you updated with our progress.
                  </p>
                  <p className="text-sm text-gray-500">
                    Look out for our welcome email in your inbox shortly!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Timeline Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Launch Roadmap</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow our journey as we build and prepare for launch. Stay updated on our progress and what's coming next.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar size={24} className="text-[#fe262d]" />
              </div>
              <h3 className="font-bold text-lg mb-2">App Development</h3>
              <p className="text-gray-600 mb-3">Base development of our applications front and backend</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#fe262d] h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <p className="text-sm text-[#fe262d] font-medium mt-2">In Progress</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar size={24} className="text-[#fe262d]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Testing Phase</h3>
              <p className="text-gray-600 mb-3">Limited release to early subscribers for feedback and refinement.</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#fe262d] h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-sm text-gray-600 font-medium mt-2">Coming Soon</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar size={24} className="text-[#fe262d]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Public Launch</h3>
              <p className="text-gray-600 mb-3">Full release with all features available to the public.</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-400 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-sm text-gray-600 font-medium mt-2">Coming Soon</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What Early Subscribers Are Saying</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from others who've already joined our community and started receiving our updates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <span className="text-[#fe262d] font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;