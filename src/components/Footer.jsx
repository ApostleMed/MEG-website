// import React from 'react';
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import logo from "./../assets/image/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pb-10">
      <div className="containers">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="footer-left">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Medical Education Guild Logo"
                className="footer-logo"
              />
              <p className="playfair text-[#5C450D] text-[16px] font-bold">
                Medical Education Guild
              </p>
            </div>
            <p className="hidden lg:block text-[16px] mt-5 leading-7 text-gray-500">
              Sharing a World-Where Healthcare <br /> Knowledge is Universal,
              and Being a <br /> Healer is a Noble Duty
            </p>
            <p className="block lg:hidden text-[16px] mt-5 leading-7 text-gray-500">
              Sharing a World-Where Healthcare Knowledge is Universal, and Being
              a Healer is a Noble Duty
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex gap-5 text-gray-500">
                <MdMailOutline className="text-2xl" />
                <span className="text-[14px]">
                  medicaleducationalguild@gmail.com
                </span>
              </div>
              <div className="flex gap-5 text-gray-500">
                <MdOutlineLocationOn className="text-2xl " />
                <span className="text-[14px]">
                  111 NORTH BRIDGE ROAD #04-06 <br /> PENINSULA PLAZA SINGAPORE{" "}
                  <br />
                  179098
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-10 mt-20 lg:mt-0">
            <div className="">
              <h3 className="playfair font-medium text-[24px]">
                How Can We Help
              </h3>
              <ul className="mt-5 space-y-3 text-gray-500 ">
                <li>
                  <Link to="/">Medical Education Pathway Consultation</Link>
                </li>
                <li>
                  <Link to="/">Application Excellence</Link>
                </li>
                <li>
                  <Link to="/">Medical School Entrance Test/Exam (MHEB)</Link>
                </li>
                <li>
                  <Link to="/">Accommodation & Boarding Services</Link>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="footer-section ">
                <h3 className="playfair font-medium text-[24px]">About Us</h3>
                <ul className="mt-5 space-y-3 text-gray-500 ">
                  <li>
                    <Link to="/">Our Story</Link>
                  </li>
                  <li>
                    <Link to="/">Mission & Vision</Link>
                  </li>
                  <li>
                    <Link to="/">Partner Organization</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3 className="playfair font-medium text-[24px]">Community</h3>
                <ul className="mt-5 space-y-3 text-gray-500 ">
                  <li>
                    <Link to="/">Join Our Community</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="footer-section">
                <h3 className="playfair font-medium text-[24px]">Contact Us</h3>
                <ul className="mt-5 space-y-3 text-gray-500 ">
                  <li>
                    <Link to="/">Office Location</Link>
                  </li>
                  <li>
                    <Link to="/">Virtual Support</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3 className="playfair font-medium text-[24px]">Others</h3>
                <ul className="mt-5 space-y-3 text-gray-500 ">
                  <li>
                    <Link to="/">Privacy & Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-social mt-20 lg:mt-0">
            <h3 className="playfair font-medium text-[24px]">Social Media</h3>
            <ul className="mt-5 space-y-10 text-gray-500 ">
              <li className="flex gap-2 items-center">
                <FaFacebook size={24} />
                <span className="text-[16px]">Facebook</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaLinkedin size={24} />
                <span className="text-[16px]">Linkedin</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaYoutube size={24} />
                <span className="text-[16px]">Youtube</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaTiktok size={24} />
                <span className="text-[16px]">Tiktok</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaWhatsapp size={24} />
                <span className="text-[16px]">Whatsapp</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <p className="text-gray-500">© 2025 Medical Educational Guild</p>
      </div>
    </footer>
  );
};

export default Footer;
