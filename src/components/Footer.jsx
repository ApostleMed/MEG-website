// import React from 'react';
import { SocialIcon } from "react-social-icons";
import logo from "./../assets/image/logo.svg";
import icon1 from "./../assets/image/home/footer1.svg";
import icon2 from "./../assets/image/home/footer2.svg";
import icon3 from "./../assets/image/home/footer3.svg";
import icon4 from "./../assets/image/home/footer4.svg";
import icon5 from "./../assets/image/contact/phone_icon.svg";
// import icon2 from "./../../assets/image/contact/message_icon.svg";
import icon6 from "./../assets/image/contact/mail-icon.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className={`bg-white text-dark lg:px-0 pt-[32px] md:pt-[64px] lg:pt-[128px] pb-8 px-5 md:px-10 lg:px-0 `}
    >
      <div className="mx-auto flex flex-col lg:flex-row lg:w-[1000px]">
        <div className="flex flex-col w-full lg:w-2/5">
          <img src={logo} alt="Logo" className="w-28" />
          <p className="mt-2 open-sans text-gray-600 font-bold text-xl">
            Looking For Daycare Services? <br />
            Call us straight away!
          </p>
          <div className="mt-4 flex space-x-6">
            <SocialIcon
              url="https://www.facebook.com/caremel122023"
              target="_blank"
              network="facebook"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com/company/care-mel-mm/"
              target="_blank"
              style={{ height: 35, width: 35 }}
            />
            {/* <a href="viber://add?number=959773703015" target="_blank">
              <img src={viber} alt="Viber" style={{ height: 35, width: 35 }} />
            </a> */}
          </div>
        </div>

        <div className="flex w-full lg:w-3/5  flex-col md:flex-row mt-10 lg:mt-0">
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-primary">Services</h2>
            <ul className="mt-2 space-y-5 mt-5">
              <li className="">
                <Link
                  to="/service#services"
                  // onClick={() => {
                  //   window.scrollTo(0, 0);
                  // }}
                  className="hover:text-primary md:text-[16px] lg:text-[18px] flex gap-2 items-center"
                >
                  <img src={icon1} className="w-6 h-6" />
                  Child Care Service
                </Link>
              </li>
              <li className="">
                <Link
                  to="/service"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-primary md:text-[16px] lg:text-[18px] flex gap-2 items-center"
                >
                  <img src={icon4} className="w-6 h-6" />
                  Newborn Care Service
                </Link>
              </li>
              <li className="">
                <Link
                  to="/service"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-primary md:text-[16px] lg:text-[18px] flex gap-2 items-center"
                >
                  <img src={icon3} className="w-6 h-6" />
                  Hospital Companion Care Service
                </Link>
              </li>
              <li className="">
                <Link
                  to="/service"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-primary md:text-[16px] lg:text-[18px] flex gap-2 items-center"
                >
                  <img src={icon2} className="w-6 h-6" />
                  Elder Care Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full md:w-1/2 items-start md:items-center mt-10 md:mt-0">
            <div>
              <h2 className="text-xl text-primary font-semibold">
                Contact With Us
              </h2>
              <p className="mt-5 text-lg font-semibold">
                <p className="flex items-center gap-2">
                  <img src={icon5} /> <span>09 - 773 709 015</span>
                </p>
                <span className="text-sm font-medium ms-8 ">
                  (Office Hours 9 to 5)
                </span>
              </p>
              <p className="mt-5 font-semibold">
                <a
                  href="mailto:carenekontact@mail.com"
                  className="hover:text-green-300 flex items-center gap-2"
                >
                  <img src={icon6} />
                  info@caremelmm.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-[100px]">
          <p className="text-sm text-gray-600">
            © 2024 Care Mel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
