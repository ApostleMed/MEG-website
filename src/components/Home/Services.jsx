import { TbMessages } from "react-icons/tb";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa6";

function Services() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col gap-4">
            <TbMessages size={40} />
            <h3 className="header-text mb-4">
              Medical Education Pathway Consultation
            </h3>
            <p className="body-text mb-6">
              For those pursuing future healthcare careers. Guidance, mentoring,
              medical education path.
            </p>
            <button className="bg-accent w-full p-3 text-[16px] rounded-full text-white transition-colors hover:scale-105">
              Learn More
            </button>
          </div>
          <div>
            <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col gap-4">
              <BiMessageDetail size={40} />
              <h3 className="header-text mb-4">
                Application Excellence Package
              </h3>
              <p className="body-text mb-6">
                For students actively preparing applications
              </p>
              <button className="bg-accent w-full p-3 text-[16px] rounded-full text-white transition-colors hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col gap-4">
            <MdOutlineSchool size={40} />
            <h3 className="header-text mb-4">
              Medical School Entrance BootCamp (MSEB)
            </h3>
            <p className="body-text mb-6">
              Designed for ambitious students aiming for top medical schools,
              MSEB is a fully immersive training program that builds the
              academic, strategic, and professional skills needed to excel in
              medical school entrance exams and interviews
            </p>
            <button className="bg-accent w-full p-3 text-[16px] rounded-full text-white transition-colors hover:scale-105">
              Learn More
            </button>
          </div>
          <div>
            <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col gap-4">
              <FaHouseUser size={40} />
              <h3 className="header-text mb-4">
                Accommodation & Boarding Services
              </h3>
              <p className="body-text mb-6">
                For students traveling from other regions or countries, fully
                equipped accommodation and boarding school services are
                available. Options include:
              </p>
              <button className="bg-accent w-full p-3 text-[16px] rounded-full text-white transition-colors hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
