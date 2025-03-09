import { AiFillTikTok } from "react-icons/ai";
import { FiMail, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#d4242a] text-white">
      {/* Footer Main Content */}
      <div className="container mx-auto px-6 pt-8 pb-12">
        <div className="flex flex-wrap gap-8 2xl:justify-evenly 2xl:gap-12">
          {/* Company Info */}
          <div className="2xl:w-1/5">
            <h3 className="text-xl font-bold mb-4 pb-2 md:text-2xl lg:text-xl">
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
            <h3 className="text-xl font-bold mb-4 pb-2 md:text-2xl lg:text-xl">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FiMail className="mr-3 text-red-300 md:text-xl lg:text-lg" />
                <span className=" md:text-xl lg:text-lg">
                  support@byteclubapp.com
                </span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-5">
              <a
                href="https://www.linkedin.com/in/byte-club-837a83354/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="w-5 h-5 md:w-7 md:h-7 lg:h-5 lg:w-5 cursor-pointer transition-transform duration-200 hover:scale-110" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574064445155"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook className="w-5 h-5 md:w-7 md:h-7 lg:h-5 lg:w-5 cursor-pointer transition-transform duration-200 hover:scale-110" />
              </a>
              <a
                href="https://www.instagram.com/byteclubappofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className="w-5 h-5 md:w-7 md:h-7 lg:h-5 lg:w-5 cursor-pointer transition-transform duration-200 hover:scale-110" />
              </a>
              <a
                href="https://www.tiktok.com/@byteclubofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTikTok className="w-5 h-5 md:w-7 md:h-7 lg:h-5 lg:w-5 cursor-pointer transition-transform duration-200 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-red-700 py-4 text-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center 2xl:justify-center">
          <div className="text-sm text-gray-100 text-center md:text-lg lg:text-[16px]">
            © {currentYear} Byte Club™. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
