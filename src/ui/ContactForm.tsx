import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import Loading from "./Loading";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", message: "" };

    // Validate email
    if (!email.trim()) {
      newErrors.email = "Please enter an email address.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate message
    if (!message.trim()) {
      newErrors.message = "Please enter a message.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();

    // Validate the form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setIsModalOpen(true); // Open modal only after validation passes
    const formData = new FormData(event.target);

    formData.append("access_key", "73a6d637-0dd7-4625-ba1a-3c217cac240a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setResult("Uh oh, something went wrong");
      event.target.reset();
      setName("");
      setEmail("");
      setMessage("");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-[#d4242a] text-center text-lg mt-4 mb-7 md:text-xl">CONTACT</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2 md:text-lg"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 md:text-lg"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2 md:text-lg"
            htmlFor="email"
          >
            Email <span className="text-[#d4242a]">*</span>
          </label>
          <input
            type="text"
            name="email"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 md:text-lg ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors({ ...errors, email: "" });
              }
            }}
          />
          {errors.email && (
            <div className="flex items-center mt-1 text-red-500">
              <FiAlertCircle className="mr-1" />
              <p className="text-sm">{errors.email}</p>
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2 md:text-lg"
            htmlFor="message"
          >
            Message <span className="text-[#d4242a]">*</span>
          </label>
          <textarea
            name="message"
            className={`w-full px-4 py-2 border rounded-lg min-h-36 max-h-36 focus:outline-none focus:ring-2 md:text-lg focus:ring-red-500 ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder="Enter your feedback"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) {
                setErrors({ ...errors, message: "" });
              }
            }}
            rows={4}
          />
          {errors.message && (
            <div className="flex items-center mt-1 text-red-500">
              <FiAlertCircle className="mr-1" />
              <p className="text-sm">{errors.message}</p>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-[#d4242a] text-white py-2 px-4 rounded hover:bg-red-600 transition-all md:text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#d4242a] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/40 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                {isSubmitting ? (
                  <div className="flex justify-center mb-4">
                    <Loading />
                  </div>
                ) : (
                  <>
                    <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-[#d4242a] grid place-items-center mx-auto">
                      <FiAlertCircle />
                    </div>
                    <h3 className="text-3xl font-bold text-center mb-2">
                      {result ? "Success!" : "Oops!"}
                    </h3>
                    <p className="text-center mb-6">
                      {result
                        ? "Your form has been submitted successfully."
                        : "There was an error submitting your form. Please try again."}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                      >
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
