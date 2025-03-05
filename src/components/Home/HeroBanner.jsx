import { motion } from "framer-motion";
import herobanner from "./../../assets/image/home/caremle.svg";
import { MdSupportAgent } from "react-icons/md";
import bg from "./../../assets/image/contact/bg.jpg";

// import { GradualSpacing } from "../animaition/GradualSpacing";

const HeroBanner = () => {
  return (
    <div
      className="pt-10 px-5 mx-auto min-h-[100vh] flex justify-center items-end"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col md:flex-row justify-center items-end mt-20 md:mt-10 mx-auto">
        <motion.div
          className="w-1/2 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={herobanner} alt="Hero Banner" className="" />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="ml-0 md:ml-5 md:mb-[15vh]">
            <h2 className="text-[24px] lg:text-[38px] open-sans text-pridark font-bold ">
              Need Daycare Support? <br /> Let’s Find the Perfect Fit!
            </h2>
            <motion.p
              initial={{ opacity: 0, x: -200 }} // Image enters with a slight slide up
              animate={{ opacity: 1, x: 0 }} // Final state
              exit={{ opacity: 0, x: 200 }} // Exit animation
              transition={{ duration: 1, delay: 0.5 }} // Transition duration
              className="text-[20px] sourcesans lg:text-[28px] font-bold mt-2 md:mt-5"
            >
              Free consultation with a care expert—no pressure, just guidance.
            </motion.p>
            <a
              href="https://m.me/197568866770556?source=qr_link_share"
              target="_blank"
              className="inline-flex items-center mt-10 bg-primary text-[20px] md:text-[16px] lg:text-[20px] font-bold text-white py-6 px-10 rounded-full hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out "
            >
              <span className="open-sans"> Book Your Caregiving Service</span>
              <MdSupportAgent
                className="inline-block lg:ml-4 md:ml-2 lg:ml-4"
                size={24}
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={herobanner} alt="Hero Banner" className="" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
