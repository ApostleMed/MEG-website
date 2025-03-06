import {
  FaGraduationCap,
  FaClipboardCheck,
  FaSchool,
  FaHome,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGraduationCap className="text-2xl text-blue-900" />,
    title: "Medical Education Pathway Consultation",
    description:
      "For International Medical Students: Guidance, mentoring, medical education",
    buttonText: "Learn More",
  },
  {
    icon: <FaClipboardCheck className="text-2xl text-blue-900" />,
    title: "Application Excellence Package",
    description: "For students seeking university application success",
    buttonText: "Learn More",
  },
  {
    icon: <FaSchool className="text-2xl text-blue-900" />,
    title: "Medical School Entrance Boot camp (MSEB)",
    description:
      "Designed for ambitious students aiming for medical school success. Our boot camp offers comprehensive preparation for entrance exams, academic strategy, and professional skills development.",
    buttonText: "Learn More",
  },
  {
    icon: <FaHome className="text-2xl text-blue-900" />,
    title: "Accommodation & Boarding Services",
    description:
      "For students seeking fully-supported accommodation & boarding services during their education journey",
    buttonText: "Learn More",
  },
];

function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              {service.icon}
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800 transition-colors duration-300">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
