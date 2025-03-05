// import React from "react";
import caregiverImage from "../../assets/image/home/caregiversection.png";
import icon from "./../../assets/image/home/messengergreen.svg";

const CaregiverSection = () => {
  return (
    <div className="py-[128px] custom-gradient">
      <div className="lg:w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between p-6 lg:px-0 lg:py-6 text-white">
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={caregiverImage} // Replace with your image URL
            alt="Caregiver"
            className="w-full md:h-[300px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-5 md:mt-0 md:w-1/2 flex flex-col">
          <div className="md:mx-10 md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Find Your Caregiver?
            </h2>
            <p className="mb-4">
              Contact us today to discover compassionate care solutions tailored
              to your family's needs. We're here to help you every step of the
              way!
            </p>
            <a
              href="https://m.me/197568866770556?source=qr_link_share"
              className="inline-flex items-center gap-4 mt-4 px-10 text-[20px] py-6 hover:scale-95 font-bold border border-white rounded-full bg-white text-primary transition duration-300"
            >
              <p>Find Your Caregiver</p>
              <img src={icon} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverSection;
