import { AiFillTikTok } from "react-icons/ai";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fe262d] text-white">
      {/* Footer Main Content */}
      <div className="container mx-auto px-6 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 md:text-2xl">
              Byte Club™
            </h3>
            <div className="mb-6">
              <p className="mb-2 md:text-lg">
                Improving the dining experience with the help of AI.
              </p>
              <p className="text-red-200 font-light text-sm md:text-lg">
                Established 2025
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 md:text-2xl">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FiPhone className="mr-3 text-red-300 md:text-xl" />
                <span className=" md:text-xl">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-red-300 md:text-xl" />
                <span className=" md:text-xl">support@byteclub.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-5">
              <FiLinkedin className="w-5 h-5 md:w-7 md:h-7" />
              <FiFacebook className="w-5 h-5 md:w-7 md:h-7" />
              <FiInstagram className="w-5 h-5 md:w-7 md:h-7" />
              <AiFillTikTok className="w-5 h-5 md:w-7 md:h-7" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-red-700 py-4 text-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center">
          <div className="text-sm text-gray-100 text-center md:text-lg">
            © {currentYear} Byte Club™. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
