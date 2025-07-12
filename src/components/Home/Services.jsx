import { TbMessages } from "react-icons/tb";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { nav } from "framer-motion/client";

function Services() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#E6E1E1] pb-[64px]">
      <div className="containers">
        <p className="header-text text-center">Explore Our Tailored Services</p>
        <p className="body-text text-center mt-5 hidden md:block">
          Our tailored consulting services are designed to help you navigate the
          complex admission <br /> processes of top medical universities.
          Whether you’re an aspiring medical student or a practicing <br />{" "}
          healthcare professional seeking further education, we provide expert
          advice to help you succeed.
        </p>
        <p className="body-text text-center mt-5 block md:hidden">
          Our tailored consulting services are designed to help you navigate the
          complex admission processes of top medical universities. Whether
          you’re an aspiring medical student or a practicing healthcare
          professional seeking further education, we provide expert advice to
          help you succeed.
        </p>
        <div className="flex justify-center mt-20 mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col gap-4 max-w-md">
            <TbMessages size={40} />
            <h3 className="header-text mb-4">
              Medical Education Pathway Consultation
            </h3>
            <p className="body-text mb-6">
              For Secondary/High School Students/Graduates  exploring medical
              education
            </p>
            <button
              onClick={() => navigate("/service/1")}
              className="bg-accent w-full p-3 text-[16px] rounded-full text-white transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;