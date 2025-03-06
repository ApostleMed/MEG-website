import { motion } from "framer-motion";
import bg from "./../../assets/image/aboutbanner.svg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";

const AboutBanner = () => {
  return (
    <div
      className="min-h-[100vh]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "600px",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[1100px] mx-auto flex flex-col justify-center min-h-[100vh]"
      >
        <h1 className="text-[32px] playfair font-bold mb-3">
          Medical Education Pathway Consultation
        </h1>
        <div className="flex gap-5 text-accent mb-10 font-bold">
          <div className="flex items-center gap-2">
            <IoMdAlarm size={20} />
            <span className="mt-1">45 Minutes</span>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineAttachMoney size={20} />
            <p className="mt-1">Free Consultation</p>
          </div>
        </div>
        <p className="body-text leading-9 mb-10 text-gray-200">
          Founded in 2025, MEG was established to revolutionize medical and{" "}
          <br /> healthcare education by bridging the gap between ambition and{" "}
          <br /> achievement and excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:scale-105 transition-colors">
            <MdOutlineLocalPhone size={20} />
            +66 762 711 90
          </button>
          <button className="button">Book a Consultation</button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutBanner;
