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
            <h3 className="text-xl font-bold mb-4 border-b border-red-500 pb-2">
              Byte Club™
            </h3>
            <div className="mb-6">
              <p className="mb-2">
                Improving the dining experience with the help of AI.
              </p>
              <p className="text-red-200 font-light text-sm">
                Established 2025
              </p>
            </div>
            <div className="flex space-x-4">
              <FiLinkedin size={20} />
              <FiFacebook size={20} />
              <FiInstagram size={20} />
              <AiFillTikTok size={20} />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-red-500 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FiPhone className="mr-3 text-red-300" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-red-300" />
                <span>support@byteclub.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-red-950 py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-red-300">
            © {currentYear} Byte Club™. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
