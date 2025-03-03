import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import Loading from "./Loading"; // Ensure this path is correct

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsModalOpen(true); // Open modal on submit
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
    } else {
      setResult(data.message);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg">
      <h1 className="text-[#fe262d] text-center text-lg mt-4 mb-7">CONTACT</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="email"
          >
            Email <span className="text-[#fe262d]">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="message"
          >
            Message <span className="text-[#fe262d]">*</span>
          </label>
          <textarea
            name="message"
            className="w-full px-4 py-2 border rounded-lg min-h-36 max-h-36 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#fe262d] text-white py-2 px-4 rounded hover:bg-red-600 transition-all"
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
              className="bg-[#fe262d] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/40 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                {isSubmitting ? (
                  <div className="flex justify-center mb-4">
                    <Loading />
                  </div>
                ) : (
                  <>
                    <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-[#fe262d] grid place-items-center mx-auto">
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
