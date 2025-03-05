import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "./../../assets/image/logo.svg";
import { FaFacebookMessenger } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="md:mx-10 bg-white mx-auto flex items-center justify-between py-5 md:py-4 px-5 md:px-8 lg:px-10 md:rounded-full">
        {/* Logo */}
        <Link to="/" className="">
          <img src={logo} alt="Logo" className="w-20 md:w-14" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:space-x-5 lg:space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:text-green-600"
                : "text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-green-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:text-green-600"
                : "text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-green-600"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:text-green-600"
                : "text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-green-600"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:text-green-600"
                : "text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-green-600"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Language Selector and Button */}
        <div className="hidden md:block items-center">
          {/* <span className="text-gray-800">MYA / EN</span> */}
          <a
            href="https://m.me/197568866770556?source=qr_link_share"
            className="open-sans inline-flex items-center bg-primary font-bold lg:text-[20px] font-bold text-white py-3 px-6 lg:py-6 lg:px-10 rounded-full hover:scale-105 hover:shadow-lg shadow-primary transition duration-300 ease-in-out"
          >
            We’re Here to Help
            <FaFacebookMessenger className="inline-block ml-2" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-sub focus:outline-none">
            {isOpen ? (
              <IoClose size={20} className="text-pridark" />
            ) : (
              <IoMenuSharp size={20} className="text-pridark" />
            )}{" "}
            {/* Hamburger or Close icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-4 px-4 py-10 absolute w-full z-10 bg-white">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold text-gray-800 hover:text-green-600"
                  : "text-black text-lg font-semibold text-gray-800 hover:text-green-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold text-gray-800 hover:text-green-600"
                  : "text-black text-lg font-semibold text-gray-800 hover:text-green-600"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/service"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold text-gray-800 hover:text-green-600"
                  : "text-black text-lg font-semibold text-gray-800 hover:text-green-600"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold text-gray-800 hover:text-green-600"
                  : "text-black text-lg font-semibold text-gray-800 hover:text-green-600"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
