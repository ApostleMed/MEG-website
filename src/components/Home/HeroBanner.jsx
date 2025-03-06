import { motion } from "framer-motion";
import bg from "./../../assets/image/herobanner.avif";

const HeroBanner = () => {
  return (
    <div
      className="min-h-[100vh] text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${bg})`,
        backgroundSize: "cover",
        // backgroundPositionY: ,
        backgroundPosition: "0 25%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl absolute bottom-10 left-[180px]"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl playfair font-bold mb-10">
          "Inspire, Equip, and Empower"
        </h1>
        <p className="text-[20px] leading-9 font-bold mb-10 text-gray-200">
          Shaping a World Where Healthcare Knowledge Is Universal, and Being a{" "}
          <br />
          Healer Is a Moral Duty
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Join Our Community
          </button>
          <button className="button">Book a Consultation</button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
