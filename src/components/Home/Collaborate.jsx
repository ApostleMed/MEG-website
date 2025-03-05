// Collaborate.js

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

function Number({ n }) {
  const [ref, inView] = useInView();
  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.span ref={ref}>{number.to((n) => n.toFixed(0))}</animated.span>
  );
}

const Collaborate = () => {
  return (
    <div className="mx-auto px-5 py-4 lg:px-0 lg:px-0 pt-[28px] md:pt-[32px] lg:pt-[64px] lg:w-[1000px] sm:py-6 md:py-8 mt-1 sm:mt-2 md:mt-5">
      <div className="mb-10 flex flex-col md:flex-row items-center justify-center bg-primary text-white rounded-lg md:shadow-lg md:py-10">
        <div className="md:flex">
          <div className="mb-4 md:mb-0 text-white py-5 md:px-10 md:p-0 rounded-3xl">
            <h3 className="text-[16px] md:text-[12px] lg:text-[16px] font-semibold">
              Registered Caregivers
            </h3>
            <p className="sm:text-[32px] md:text-[18px] lg:text-[32px] mt-2 font-bold">
              {" "}
              <Number n={60} />+ Caregivers
            </p>
          </div>
          <div className="mb-4 md:mb-0 text-white py-5 md:px-10 md:p-0 rounded-3xl">
            <h3 className="text-[18px] md:text-[11px] lg:text-[18px] font-bold">
              Successful Served Duties
            </h3>
            <p className="sm:text-[32px] md:text-[18px] lg:text-[32px] mt-2 font-bold">
              <Number n={200} />+ Duties
            </p>
          </div>
          <div className="mb-4 md:mb-0 text-white py-5 md:px-10 md:p-0 rounded-3xl">
            <h3 className="text-[18px] md:text-[12px] lg:text-[18px] font-bold">
              Trusted by Families
            </h3>
            <p className="sm:text-[32px] md:text-[18px] lg:text-[32px] mt-2 font-bold">
              <Number n={10} />+ Families
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
