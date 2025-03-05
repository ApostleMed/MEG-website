import elder from "./../../assets/image/service/eldercare.jpg";
import infant from "./../../assets/image/service/newborn.jpg";
import hospital from "./../../assets/image/service/hospitalCare.jpg";
import newborn from "./../../assets/image/service/childCare.jpg";
import { FaBaby, FaChild, FaHospitalAlt, FaUserFriends } from "react-icons/fa";

export const services = [
  {
    icon: <FaBaby />,
    image: newborn,
    title: "Newborn Care",
    description:
      "“Our caregivers provide gentle and nurturing care for infants, ensuring safety and well-being”",
  },
  {
    icon: <FaChild />,
    image: infant,
    title: "Child Care",
    description:
      "“Reliable and compassionate childcare services, providing parents peace of mind knowing their children are in safe hands.”",
  },
  {
    icon: <FaHospitalAlt />,
    image: hospital,
    title: "Hospital Companion Care",
    description:
      "“We offer companionship and support for those in hospital settings, making recovery less lonely and more comfortable”",
  },
  {
    icon: <FaUserFriends />,
    image: elder,
    title: "Elder Care",
    description:
      "“We offer warm, attentive support for seniors, assisting with daily tasks to maintain comfort and independence at home.”",
  },
];

function Services() {
  // console.log(services);
  return (
    <div className="lg:px-0 sm:w-[500px] lg:w-[1000px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 lg:gap-20 px-5 gap-20">
        {services.map((card, index) => (
          <div
            id="services"
            key={index}
            className="bg-sub rounded-3xl p-5 md:p-10 overflow-hidden shadow-md"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[250px] rounded-xl object-cover"
            />
            <div className="py-6 flex flex-col justify-between h-[250px] lg:h-[350px]">
              <div>
                <h3 className="md:text-[22px] lg:text-[28px] mb-5 font-semibold text-green-800">
                  {card.title}
                </h3>
                <p className="sourcesans text-[16px] lg:text-[20px]">
                  {card.description}
                </p>
              </div>
              <button className=" flex w-full sm:w-[350px] mx-auto bg-white text-primary font-bold py-6 px-10 rounded-full justify-center items-center hover:scale-105 hover:shadow-lg transition duration-300">
                <span>Explore {card.title}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
