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
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

const Logo = () => {
  return <img src={BrandLogo} width={45} alt="brand logo" />;
};

const NavLeft = ({ setIsOpen }: any) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((prev: any) => !prev)}
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
        <span className="flex items-center h-[30px] text-indigo-600">{text}</span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="px-4 py-2 text-white bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap"
      >
        Contact Us
      </motion.a>
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

const NavMenu = ({ isOpen, setIsOpen }: any) => {
  const closeMenu = () => setIsOpen(false);
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Our Mission" id="mission" closeMenu={closeMenu} />
      <MenuLink text="Meet the Team" id="meet-team" closeMenu={closeMenu} />
      <MenuLink text="The Vision" id="vision" closeMenu={closeMenu} />
      <MenuLink text="Contact Us" id="contact" closeMenu={closeMenu} />
    </motion.div>
  );
};

const MenuLink = ({ text, id, closeMenu }: any) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
    if (closeMenu) closeMenu();
  };

  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={`#${id}`}
      onClick={handleClick}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30, transition: { duration: 0.25 } }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">{text}</span>
      </motion.div>
    </motion.a>
  );
};

export default Header;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.03,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.03,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.15 },
  },
  closed: {
    y: -10,
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
    transition: { duration: 0.15 },
  },
  closed: {
    x: -4,
    transition: { duration: 0.1 },
  },
};
