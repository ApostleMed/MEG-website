import {
  FaGraduationCap,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGraduationCap className="text-2xl text-blue-900" />,
    title: "Medical Education Pathway Consultation",
    description:
      "For International Medical Students: Guidance, mentoring, medical education",
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