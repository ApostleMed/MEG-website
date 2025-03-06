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
    </div>
  );
};

export default Collaborate;
