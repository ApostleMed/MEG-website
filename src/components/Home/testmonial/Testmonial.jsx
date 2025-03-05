import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion"; // Import motion
import testing from "./../../../assets/image/home/testing.svg";

const testimonials = [
  {
    quote: "The support we received was incredible!",
    description:
      "Our caregiver was attentive and knowledgeable, making those early weeks so much easier. We felt confident leaving our newborn in such caring hands.",
    name: "Ko Ko Oo",
    service: "Newborn care Service",
  },
  {
    quote: "The support we received",
    description:
      "Our caregiver was attentive and knowledgeable, making those early weeks so much easier. We felt confident leaving our newborn in such caring hands.",
    name: "Khin Khin",
    service: "Newborn care Service",
  },
  // Add more testimonials as needed
];

const Testmonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setReverse(true);
  };

  const previousTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setReverse(false);
  };

  const { quote, description, service } = testimonials[currentIndex];

  return (
    <div className="mx-auto px-5 lg:px-0 py-[32px] md:py-[64px] lg:py-[128px] lg:w-[1000px] ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/3">
          <img src={testing} alt="Testing" className="w-full" />
          <p className="text-pridark font-bold text-[28px] md:text-[24px] lg:text-[28px] text-center">
            Stories from Families Like Yours
          </p>
        </div>
        <div className="bg-white md:w-2/3 md:px-5 py-5 mt-5 lg:mt-0 rounded-3xl md:ms-5 lg:ms-20">
          <div className="md:flex justify-between items-center">
            <button
              onClick={previousTestimonial}
              className="hidden rounded-full md:block mx-2 px-4 py-4 bg-sub rounded active:scale-90"
            >
              <IoIosArrowBack className="" size={20} />
            </button>
            <motion.div
              className="mb-5 md:mb-0 p-5 lg:px-10 md:bg-white md:h-[250px]"
              key={currentIndex} // Use key to trigger animation on index change
              initial={{ opacity: 0, x: reverse ? 50 : -50 }} // Initial state based on reverse
              animate={{ opacity: 1, x: 0 }} // Animate to this state
              exit={{ opacity: 0, x: reverse ? -50 : 50 }} // Exit state based on reverse
              transition={{ duration: 1, transition: "ease" }} // Transition duration
            >
              <div className="text-[20px] text-pridark font-bold mb-4">
                <p>{quote}</p>
              </div>
              <p className="text-[16px]">{description}</p>
              <div className="md:flex justify-between pt-5">
                <p className="text-primary fon-bold">{service}</p>
              </div>
            </motion.div>
            <button
              onClick={previousTestimonial}
              className="md:hidden mx-2 px-4 py-4 bg-sub text-pridark rounded-full md:hover:bg-green-700 md:hover:text-white active:scale-90"
            >
              <IoIosArrowBack size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="md:block mx-2 px-4 py-4 bg-sub text-pridark rounded-full md:hover:bg-green-700 md:hover:text-white active:scale-90"
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-8 h-2 mx-1 cursor-pointer rounded-md ${
                  index === currentIndex ? "bg-pridark" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
