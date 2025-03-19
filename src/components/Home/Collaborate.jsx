// Collaborate.js

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import logo1 from "./../../assets/image/logo/ApostleMed.jpg";
import logo2 from "./../../assets/image/logo/cucas.png";
import logo3 from "./../../assets/image/logo/genesis.png";
import logo4 from "./../../assets/image/logo/imec.jpg";
import logo5 from "./../../assets/image/logo/interhecs.jpg";
import logo6 from "./../../assets/image/logo/medilink.png";

const logo = [logo1, logo2, logo3, logo4, logo5, logo6];

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
    <div className="containers">
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center">
          <p className="text-accent text-[48px] font-bold">
            <Number n={90} />+
          </p>
          <h3 className="playfair mt-2">
            students have been <br /> guided globally
          </h3>
        </div>
        <div className="text-center">
          <p className="text-accent text-[48px] font-bold">
            <Number n={100} />%
          </p>
          <h3 className="playfair mt-2">
            acceptance rate into top <br /> medical schools worldwide
          </h3>
        </div>
        <div className="text-center">
          <p className="text-accent text-[48px] font-bold">
            <Number n={5} />+
          </p>
          <h3 className="playfair mt-2">
            Collaborated partner <br /> organizations
          </h3>
        </div>
      </div>

      <div className="mt-40">
        <div className="flex flex-wrap justify-center gap-10">
          {logo.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="w-32 h-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
