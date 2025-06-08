// import React from 'react';
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import logo from "./../assets/image/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  const navigate = useNavigate();
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
              Sharping a World-Where Healthcare <br /> Knowledge is Universal,
              and Being a <br /> Healer is a Noble Duty
            </p>
            <p className="block lg:hidden text-[16px] mt-5 leading-7 text-gray-500">
              Sharing a World-Where Healthcare Knowledge is Universal, and Being
              a Healer is a Noble Duty
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex gap-5 text-gray-500">
                <MdMailOutline className="text-2xl" />
                <span className="text-[14px]">info@mededuguild.com</span>
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
                  <NavLink to="/service/1" className="hover:text-primary">
                    Medical Education Pathway Consultation
                  </NavLink>
                </li>
                <li className="font-semibold text-gray-700">
                  Aescula
                </li>
                <li className="font-semibold text-gray-700">
                  High School for Healthcare Aspirants
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="footer-section ">
                <h3 className="playfair font-medium text-[24px]">About Us</h3>
                <ul className="mt-5 space-y-3 text-gray-500 ">
                  <li>
                    <Link
                      onClick={() => navigate("/about")}
                      to="our-story"
                      smooth={true}
                      duration={500}
                      className="hover:text-primary cursor-pointer"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <NavLink to="/about" className="hover:text-primary">
                      Mission & Vision
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="hover:text-primary">
                      Partner Organization
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3 className="playfair font-medium text-[24px]">Community</h3>
                <ul className="mt-5 space-y-3 text-gray-500 ">
                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdZRlGr4mVrxYHuNluSFm5Liq-NcmL_C8hzgCdqO3lxSE51Kg/viewform"
                      target="_blank"
                      className="hover:text-primary"
                    >
                      Join Our Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="footer-section">
                <h3 className="playfair font-medium text-[24px]">Contact Us</h3>
                <ul className="mt-5 space-y-3 text-gray-500 ">
                  <li>
                    <NavLink to="/contact" className="hover:text-primary">
                      Office Location
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        window.open(
                          "https://calendly.com/mededuguild/pathway?month=2025-03"
                        )
                      }
                      className="hover:text-primary"
                    >
                      Virtual Support
                    </button>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3 className="playfair font-medium text-[24px]">Others</h3>
                <ul className="mt-5 space-y-3 text-gray-500 ">
                  <li>
                    <NavLink to="/" className="hover:text-primary">
                      Privacy & Policy
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-social mt-20 lg:mt-0">
            <h3 className="playfair font-medium text-[24px]">Social Media</h3>
            <ul className="mt-5 space-y-10 text-gray-500 ">
              <a
                href="https://www.facebook.com/profile.php?id=61565679886293"
                className="flex gap-2 items-center hover:text-primary"
              >
                <FaFacebook size={24} />
                <span className="text-[16px]">Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/company/med-edu-guild/"
                className="flex gap-2 items-center hover:text-primary"
              >
                <FaLinkedin size={24} />
                <span className="text-[16px]">Linkedin</span>
              </a>
              <a
                href="https://www.youtube.com/@MedicalEducationGuild-f1c"
                className="flex gap-2 items-center hover:text-primary"
              >
                <FaYoutube size={24} />
                <span className="text-[16px]">Youtube</span>
              </a>
              <a
                href="https://www.tiktok.com/@mededug"
                className="flex gap-2 items-center hover:text-primary"
              >
                <FaTiktok size={24} />
                <span className="text-[16px] ">Tiktok</span>
              </a>
              <a
                href="https://wa.me/message/3HRH775DRT42A1"
                className="flex gap-2 items-center hover:text-primary"
              >
                <FaWhatsapp size={24} />
                <span className="text-[16px]">Whatsapp</span>
              </a>
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
