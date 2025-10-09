// Collaborate.js

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import logo1 from "./../../assets/image/logo/ApostleMed.jpg";
import logo2 from "./../../assets/image/logo/cucas.png";
import logo3 from "./../../assets/image/logo/genesis.png";
import logo4 from "./../../assets/image/logo/imec.jpg";
import logo5 from "./../../assets/image/logo/interhecs.jpg";
import logo6 from "./../../assets/image/logo/medilink.png";
import logo7 from "./../../assets/image/logo/youthedumyanmar.png";
import logo8 from "./../../assets/image/logo/msm.jpeg";
import veritasLogo from "./../../assets/image/logo/veritas-aescula.png";
import prosperityLogo from "./../../assets/image/logo/prosperity-pathway.png";
import canNewtonLogo from "./../../assets/image/logo/can-newton.png";

const logo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, veritasLogo, prosperityLogo, canNewtonLogo];

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
            <Number n={9} />+
          </p>
          <h3 className="playfair mt-2">
            Collaborated partner <br /> organizations
          </h3>
        </div>
      </div>

      <div className="mt-40">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {logo.map((logo, index) => (
            <div key={index} className="w-32 h-32 flex items-center justify-center">
              <img
                src={logo}
                alt={`partner-logo-${index}`}
                className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
