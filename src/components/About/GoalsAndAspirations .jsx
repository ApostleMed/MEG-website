// import React from "react";
import logo1 from "./../../assets/image/crossborder.png";
import logo2 from "./../../assets/image/home/client.svg";
import logo3 from "./../../assets/image/otas.png";
import logo4 from "./../../assets/image/home/Platocare.png";
import goal from "./../../assets/image/about/goal.png";
import vision from "./../../assets/image/about/about.svg";

const partners = [
  { name: "Apostle Med", logo: logo1 }, // Replace with actual logo URL
  {
    name: "Cross-Border Health and Caregiving Club",
    logo: logo2,
  }, // Replace with actual logo URL
  { name: "OTAS Tech Solutions", logo: logo3 }, // Replace with actual logo URL
  { name: "Plato Care", logo: logo4 }, // Replace with actual logo URL
];

const GoalsAndAspirations = () => {
  return (
    <div className="md:w-[800px] lg:w-[1000px] mx-auto p-5 md:p-10 mt-[80px] sm:mt-[100px] md:mt-[120px] lg:mt-[150px] min-h-[100vh]">
      <div className="mb-20 md:mb-10">
        <div className="mb-10">
          <div className="md:flex items-center w-full mb-2">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={goal}
                alt="Mission"
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="mt-5 md:mt-0 ms-5 lg:ms-0">
                <p className="sm:text-[28px] md:text-[20px] lg:text-[24px] mb-5 md:mb-2 lg:mb-5 font-bold text-pridark ">
                  Your Family’s Trust, Our Guiding Promise
                </p>
                <p className="text-[20px] md:text-[18px] sourcesans">
                  Our mission is to provide compassionate, high-quality
                  caregiver services that empower families and enhance the
                  well-being of their loved ones. We are committed to fostering
                  trust and delivering personalized care that meets individual
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-20">
          <div className="md:flex justiy-end items-center mb-2">
            <div className="w-full md:w-1/2 hidden md:block">
              <p className="text-[28px] mb-5 font-bold text-pridark ">
                Collaborate for Meaningful Change
              </p>
              <p className="text-[18px] sourcesans">
                To redefine caregiving by leading with relentless excellence and
                meaningful innovation—building a world where families thrive
                with dignity, caregivers are celebrated for their impact, and
                every voice in our community is heard.
              </p>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden flex justify-end">
              <img
                src={vision}
                alt="Vision"
                className="w-full md:w-[380px] h-[280px]"
              />
            </div>
            <div className="w-full md:hidden">
              <p className="body-text sourcesans mt-5 md:mt-0 md:me-10">
                To redefine caregiving by leading with relentless excellence and
                meaningful innovation—building a world where families thrive
                with dignity, caregivers are celebrated for their impact, and
                every voice in our community is heard.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-0 py-[32px] md:py-[64px] lg:py-[128px] border-slate-300 flex flex-col items-center md:items-start rounded-lg py-5 md:py-0">
        <h2 className="text-center mx-auto header-text font-bold sm:mb-0 md:mb-4">
          Our Partner Organizations
        </h2>
        <div className="sm:flex items-center md:justify-start justify-center flex-wrap gap-4 sm:gap-10 md:gap-8 lg:gap-10 sm:mt-0 md:mt-10 mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col my-8 items-center justify-center"
            >
              <div>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 md:h-24 mb-1 sm:mb-2"
                />
              </div>
              <span className="w-[200px] mx-auto text-center text-sm sm:text-base md:text-lg">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsAndAspirations;
