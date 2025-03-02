import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg">
      <h1 className="text-[#fe262d] text-center text-lg mt-4 mb-7">CONTACT</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
            Email <span className="text-[#fe262d]">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
            Message <span className="text-[#fe262d]">*</span>
          </label>
          <textarea
            id="message"
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
