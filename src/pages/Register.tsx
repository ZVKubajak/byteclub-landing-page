import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Bell, Mail, ArrowRight, Check } from "lucide-react";

const Register = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full font-medium text-sm mb-6">
              Coming Soon
            </div>
            <h1 className="text-3xl font-bold mb-4 leading-tight">
              Stay Ahead with Our <br />
              <span className="text-[#fe262d]">Latest Updates</span>
            </h1>
            <p className="mb-6 text-gray-600">
              Be the first to know when we launch and receive exclusive early-access benefits. Join our community of early adopters and help shape the future of our application.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <Bell size={18} className="text-[#fe262d]" />
                </div>
                <div>
                  <h3 className="font-medium">Launch Notifications</h3>
                  <p className="text-sm text-gray-500">Be first in line when we officially launch</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <Mail size={18} className="text-[#fe262d]" />
                </div>
                <div>
                  <h3 className="font-medium">Weekly Development Updates</h3>
                  <p className="text-sm text-gray-500">Stay informed about our progress and new features</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div>
            <div id="newsletter" className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Join Our Newsletter</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-[#fe262d] focus:border-[#fe262d] transition-all duration-200"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#fe262d] mt-1"
                        />
                        <span className="ml-2 text-sm text-gray-500">
                          I agree to receive marketing communications and can unsubscribe at any time.
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
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#fe262d] font-medium hover:underline"
                  >
                    Subscribe another email
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;