import { motion } from "framer-motion";
import BrandLogo from "../images/white-byte-club.png";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";

const Header = () => {
  return (
    <div className="fixed w-full z-50">
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#fe262d] p-4 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <img src={BrandLogo} width={45} alt="brand logo" />
  );
};

const NavLeft = ({ setIsOpen }: any) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv: any) => !pv)}
      >
        <FiMenu className="text-white" />
      </motion.button>
      <Logo />
      <NavLink text="Solutions" />
      <NavLink text="Community" />
      <NavLink text="Pricing" />
      <NavLink text="Company" />
    </div>
  );
};

const NavLink = ({ text }: any) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30, transition: { duration: 0.25 } }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 text-white bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap"
      >
        Contact Us
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-white text-[#fe262d] font-medium rounded-md whitespace-nowrap"
      >
        Register
      </motion.button>
    </div>
  );
};

const NavMenu = ({ isOpen }: any) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Our Mission" id="mission" />
      <MenuLink text="Meet the Team" id="meet-team" />
      <MenuLink text="The Vision" id="vision" />
      <MenuLink text="Join Early" id="join-early" />
    </motion.div>
  );
};

const MenuLink = ({ text, id }: any) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={`#${id}`}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30, transition: { duration: 0.25 } }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default Header;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      duration: 0.4, // Adjusted to be faster than default but slower than previous
      when: "beforeChildren",
      staggerChildren: 0.07, // In between original (0.1) and previous (0.05)
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      duration: 0.35, // Slightly faster closing than opening
      when: "afterChildren",
      staggerChildren: 0.07, // In between original (0.1) and previous (0.05)
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 } // Moderate fade in speed
  },
  closed: {
    y: -10,
    opacity: 0,
    transition: { duration: 0.25 } // Slightly faster fade out
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
    transition: { duration: 0.3 } // Moderate arrow entrance
  },
  closed: {
    x: -4,
    transition: { duration: 0.25 } // Slightly faster arrow exit
  },
};