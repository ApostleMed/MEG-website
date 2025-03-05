import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faq from "./../../assets/image/home/faq.svg";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  // const [show, setShow] = useState(false);

  const data = [
    {
      question: "What types of caregiver services do you offer?",
      answer:
        "Our services include Newborn Care, Child Care, Maternal Care, Elder Care, Hospital Companion Care and specialized care for conditions like dementia or post-surgical recovery.",
    },
    {
      question: "Can I meet the caregiver before services begin?",
      answer:
        "Yes, we arrange meet-and-greet sessions via zoom (or) in-person to ensure compatibility between the caregiver and the care recipient.",
    },
    {
      question: "What information do I need to provide when booking?",
      answer:
        "You’ll need basic details about the care recipient (age, health condition, required services) and your preferred schedule.",
    },
    {
      question: "How long does it take to start services after booking?",
      answer:
        "In most cases, services can begin within 24-48 hours. For complex care needs, it may take a little longer to ensure we find the best match.(holidays and weekends may affect availability).",
    },
    // {
    //   question: "What happens if the caregiver is unavailable?",
    //   answer:
    //     "We ensure continuity of care by providing a qualified substitute caregiver if your assigned caregiver is unavailable.",
    // },
    // {
    //   question: "Can I adjust or cancel services after booking?",
    //   answer:
    //     "Yes, you can adjust or cancel services with prior notice as per our terms and conditions.",
    // },
  ];

  const handleToggle = (index) => {
    console.log(index);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-5 lg:px-0 py-[32px] md:py-[64px] lg:py-[128px] lg:w-[1000px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="flex items-center mb-10 flex-col md:hidden">
          <img src={faq} alt="" className="w-64" />
          <p className="text-center font-bold text-[30px] text-pridark mb-2">
            Your Questions Answered
          </p>
          <p className="text-[16px] text-center">
            Check out our Q & A section for quick answers to <br /> common
            questions about our caregiver services and <br /> how to get
            started.
          </p>
        </div>
        {/* ____________________________________________________________________ */}
        <div className="">
          {data.map((faq, index) => (
            <div
              key={index}
              className={`${
                openIndex === index ? "bg-white" : ""
              } shadow-md bg-white rounded-xl mb-10 py-4 flex flex-col items-center justify-center`}
            >
              <div
                className="flex justify-between w-full items-center py-4 px-10 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <button className="ms-5 text-white bg-green-900 px-3 py-2 rounded">
                  {openIndex === index ? (
                    <FaMinus size={10} />
                  ) : (
                    <FaPlus size={10} />
                  )}
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
                style={{
                  transitionProperty: "max-height",
                  overflow: "hidden",
                }}
              >
                <div className="py-4 px-10 text-gray-700">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        {/* _____________________________________________________________________________________ */}
        <div className="flex items-center flex-col hidden md:flex">
          <img src={faq} alt="" className="w-64" />
          <p className="text-[28px] font-bold text-pridark mb-2">
            Your Questions Answered
          </p>
          <p className="text-[16px] text-center">
            Check out our Q & A section for quick answers to <br /> common
            questions about our caregiver services and <br /> how to get
            started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
