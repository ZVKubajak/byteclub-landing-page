import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bell,
  Mail,
  ArrowRight,
  Check,
  Star,
  Calendar,
  Shield,
} from "lucide-react";
import { FiAlertCircle } from "react-icons/fi";

const Register = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    checked: ""
  });

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.substring(1);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          const headerOffset = 90;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", checked: ""};

    // Validate name
    if (!name.trim()) {
      newErrors.name = "Please enter a name.";
      isValid = false;
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = "Please enter an email address.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // validate is checked
    if (!checked) {
      newErrors.checked = "To proceed, you need to opt-in to receive our newsletters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setName("");
    setEmail("");
    setChecked(false)
    setSubmitted(true);
  };

  const testimonials = [
    {
      name: "Brooke Bell",
      role: "Freelance Editor",
      text: "As an early subscriber, I appreciate the frequent updates on development and how every question about the app's purpose is answered with clarity and detail.",
    },
    {
      name: "John Pizzola",
      role: "Former Salesman at Sun and IBM",
      text: "It's refreshing to see such transparent communication from the team, making us early subscribers feel genuinely involved throughout the development journey.",
    },
  ];

  return (
    <div className="pt-36 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center mb-16"
        >
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full font-medium text-sm">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Stay Ahead with Our <br />
              <span className="text-[#d4242a]">Latest Updates</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Be the first to know when we launch and receive exclusive
              early-access benefits. Join our growing community of early
              adopters and help shape the future of our application.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Bell,
                  title: "Launch Notifications",
                  desc: "Be first in line when we officially launch",
                },
                {
                  icon: Mail,
                  title: "Weekly Updates",
                  desc: "Stay informed about our progress",
                },
                {
                  icon: Star,
                  title: "Early Access",
                  desc: "Get beta access before public release",
                },
                {
                  icon: Shield,
                  title: "Priority Support",
                  desc: "Get help directly from our team",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="bg-red-100 p-2 rounded-full mr-3 shrink-0">
                    <benefit.icon size={18} className="text-[#d4242a]" />
                  </div>
                  <div>
                    <h3 className="font-medium">{benefit.title}</h3>
                    <p className="text-sm text-gray-500">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              id="newsletter"
              className="bg-white rounded-xl p-6 md:p-8 border shadow-sm border-gray-100"
            >
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">
                    Join the Byte Club Newsletter
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <div className="flex items-center mt-1 text-red-500">
                          <FiAlertCircle className="mr-1" />
                          <p className="text-sm">{errors.name}</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) {
                            setErrors({ ...errors, email: "" });
                          }
                        }}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center mt-1 text-red-500">
                          <FiAlertCircle className="mr-1" />
                          <p className="text-sm">{errors.email}</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          onChange={(e) => setChecked(e.target.checked)}
                          className={`rounded border-gray-300 text-[#d4242a] mt-1 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        />
                        <span className="ml-2 text-sm text-gray-500">
                          I agree to receive marketing communications and
                          understand I can unsubscribe at any time.
                        </span>
                      </label>
                      {errors.checked && (
                        <div className="flex items-center mt-1 text-red-500">
                          <FiAlertCircle className="mr-1" />
                          <p className="text-sm">{errors.checked}</p>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-[#d4242a] text-white rounded-lg hover:bg-[#e02420] transition-all duration-200 flex items-center justify-center font-medium"
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
                    You've successfully subscribed to our newsletter. We'll keep
                    you updated with our progress.
                  </p>
                  <p className="text-sm text-gray-500">
                    Look out for our welcome email in your inbox shortly!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mt-28 mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Launch Roadmap</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow our journey as we build and prepare for launch. Stay
              updated on our progress and what's coming next.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "App Development",
                desc: "Base development of our applications front and backend",
                progress: 30,
                status: "In Progress",
              },
              {
                icon: Calendar,
                title: "Testing Phase",
                desc: "Limited release to early subscribers for feedback and refinement.",
                progress: 0,
                status: "Coming Soon",
              },
              {
                icon: Calendar,
                title: "Public Launch",
                desc: "Full release with all features available to the public.",
                progress: 0,
                status: "Coming Soon",
              },
            ].map((roadmap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <roadmap.icon size={24} className="text-[#d4242a]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{roadmap.title}</h3>
                <p className="text-gray-600 mb-3">{roadmap.desc}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${
                      roadmap.status === "In Progress"
                        ? "bg-[#d4242a]"
                        : "bg-gray-400"
                    } h-2 rounded-full`}
                    style={{ width: `${roadmap.progress}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm font-medium mt-2 ${
                    roadmap.status === "In Progress"
                      ? "text-[#d4242a]"
                      : "text-gray-600"
                  }`}
                >
                  {roadmap.status}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mt-28 mb-10">
            <h2 className="text-3xl font-bold mb-4">
              What Early Subscribers Are Saying
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from others who've already joined our community and started
              receiving our updates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-32">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <span className="text-[#d4242a] font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
