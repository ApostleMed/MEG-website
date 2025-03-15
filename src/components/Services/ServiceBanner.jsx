import { motion } from "framer-motion";
import bg from "./../../assets/image/aboutbanner.svg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";

const ServiceBanner = ({ service }) => {
  return (
    <div>
      <div
        className="min-h-[100vh] hidden md:block"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${bg})`,
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="containers"
        >
          <div className="-translate-y-1/8 lg:-translate-y-1/4">
            <h1
              className="text-[32px] playfair font-bold mb-3"
              style={{ textShadow: "0px 2px 2px white" }}
            >
              {service?.title}
            </h1>
            <div
              className="flex gap-5 text-accent mb-10 font-bold"
              style={{ textShadow: "0px 2px 0px white" }}
            >
              <div className="flex items-center gap-2">
                <IoMdAlarm size={20} />
                <span className="">{service?.time || "45 Minutes"}</span>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineAttachMoney size={20} />
                <p className="">{service?.price || "Free Consultation"}</p>
              </div>
            </div>
            <p
              className="body-text leading-9 mb-10 text-gray-200 w-3/5"
              style={{ textShadow: "0px 1px 0px white" }}
            >
              {service?.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center bg-white  gap-2 border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                <MdOutlineLocalPhone size={20} />
                +66 762 711 90
              </button>
              <a
                href="https://calendly.com/mededuguild/pathway?month=2025-03"
                className="button"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="min-h-[100vh] block md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="containers"
        >
          <div className="">
            <h1
              className="text-[32px] playfair font-bold mb-3"
              style={{ textShadow: "0px 2px 2px white" }}
            >
              {service?.title}
            </h1>
            <div
              className="flex gap-5 text-accent mb-10 font-bold"
              style={{ textShadow: "0px 2px 0px white" }}
            >
              <div className="flex items-center gap-2">
                <IoMdAlarm size={20} />
                <span className="">{service?.time || "45 Minutes"}</span>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineAttachMoney size={20} />
                <p className="">{service?.price || "Free Consultation"}</p>
              </div>
            </div>
            <p
              className="body-text leading-9 mb-10 text-gray-200 w-full"
              style={{ textShadow: "0px 1px 0px white" }}
            >
              {service?.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-full font-semibold md:hover:scale-105 justify-center active:scale-95 duration-300">
                <MdOutlineLocalPhone size={20} />
                +66 762 711 90
              </button>
              <button className="button justify-center active:scale-95">
                Book a Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceBanner;
