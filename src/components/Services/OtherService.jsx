import { TbMessages } from "react-icons/tb";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function OtherService({ id }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 pb-[64px]">
      <div className="containers">
        <p className="header-text">Other Services</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 mx-auto">
          {id != 1 && (
            <div className="bg-[#E6E1E1] p-10 rounded-2xl shadow-md flex flex-col gap-4">
              <TbMessages size={40} />
              <h3 className="header-text mb-4">
                Medical Education Pathway Consultation
              </h3>
              <p className="body-text mb-6">
                For those pursuing future healthcare careers. Guidance,
                mentoring, medical education path.
              </p>
              <button
                onClick={() => navigate("/service/1")}
                className="bg-accent w-full p-3 text-[16px] rounded-full text-white transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </div>
          )}
          {id != 2 && (
            <div>
              <div className="bg-[#E6E1E1] p-10 rounded-2xl shadow-md flex flex-col gap-4">
                <FaHouseUser size={40} />
                <h3 className="header-text mb-4">
                  Accommodation & Boarding Services
                </h3>
                <p className="body-text mb-6">
                  For students traveling from other regions or countries, fully
                  equipped accommodation and boarding school services are
                  available. Options include:
                </p>
                <button
                  onClick={() => navigate("/service/2")}
                  className="bg-accent w-full p-3 text-[16px] rounded-full text-white transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          )}
          {id != 3 && (
            <div>
              <div className="bg-[#E6E1E1] p-10 rounded-2xl shadow-md flex flex-col gap-4">
                <BiMessageDetail size={40} />
                <h3 className="header-text mb-4">
                  Application Excellence Package
                </h3>
                <p className="body-text mb-6">
                  For students actively preparing applications
                </p>
                <button
                  onClick={() => navigate("/service/3")}
                  className="bg-accent w-full p-3 text-[16px] rounded-full text-white transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          )}
          {id != 4 && (
            <div className="bg-[#E6E1E1] p-10 rounded-2xl shadow-md flex flex-col gap-4">
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
              <button
                onClick={() => navigate("/service/4")}
                className="bg-accent w-full p-3 text-[16px] rounded-full text-white transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtherService;
