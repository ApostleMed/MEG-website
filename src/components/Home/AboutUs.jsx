// import { useState } from "react";
// import { motion } from "framer-motion";
// import Skeleton from "react-loading-skeleton"; // Import the skeleton loader
import elder from "./../../assets/image/service/eldercare.jpg";
import infant from "./../../assets/image/service/newborn.jpg";
import hospital from "./../../assets/image/service/hospitalCare.jpg";
import newborn from "./../../assets/image/service/childCare.jpg";
import icon1 from "./../../assets/image/service/newborn_care_icon.svg";
import icon2 from "./../../assets/image/service/family_star.svg";
import icon3 from "./../../assets/image/service/hospital_care_icon.svg";
import icon4 from "./../../assets/image/service/elder_care_icon.svg";
// import { FaBaby, FaChild, FaHospitalAlt, FaUserFriends } from "react-icons/fa";

export const services = {
  InfantCare: {
    icon: icon1,
    image: newborn,
    title: "Newborn Care",
    description:
      "“Our caregivers provide gentle and nurturing care for infants, ensuring safety and well-being”",
  },
  childCare: {
    icon: icon2,
    image: infant,
    title: "Child Care",
    description:
      "“Reliable and compassionate childcare services, providing parents peace of mind knowing their children are in safe hands.”",
  },
  hospitalCare: {
    icon: icon3,
    image: hospital,
    title: "Hospital Companion Care",
    description:
      "“We offer companionship and support for those in hospital settings, making recovery less lonely and more comfortable”",
  },
  elderCare: {
    icon: icon4,
    image: elder,
    title: "Elder Care",
    description:
      "“We offer warm, attentive support for seniors, assisting with daily tasks to maintain comfort and independence at home.”",
  },
};

const AboutUs = ({ classData }) => {
  return (
    <div className="container px-5 mx-auto pt-[64px] lg:w-[1000px]">
      <div className={`${classData} mx-auto`}>
        <p className="header-text font-bold md:text-center">
          Trusted Care for Every Stage of Life
        </p>
        <p className="body-text sourcesans mx-auto md:text-center mt-5">
          Whether you need daily support or occasional assistance, <br /> our
          care services are designed to provide your family with <br />{" "}
          dependable, nurturing care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
        {Object.entries(services).map(([service, data]) => (
          <div
            key={service}
            className="flex flex-col justify-between items-center bg-sub rounded-lg shadow-lg px-4 py-10 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-3xl bg-pridark text-white">
                <img src={data.icon} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-[14px] font-semibold mb-5">{data.title}</h3>
            </div>
            <button className="bg-white open-sans truncate w-[200px] overflow-hidden text-primary text-sm font-bold px-4 py-4 rounded-full mt-4 hover:bg-primary hover:text-white transition-colors duration-300">
              <p className="">Personalize Care Plan</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
