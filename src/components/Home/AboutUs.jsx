import { useNavigate } from "react-router-dom";
import about from "../../assets/image/AboutUs/aboutone.svg";
import aboutus from "../../assets/image/AboutUs/abouttwo.svg";
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="containers space-y-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 h-[400px] flex flex-col justify-center">
          <h1 className="header-text mb-5">Our Journey & Mission</h1>
          <p className="body-text mb-5">
            Founded in 2024, MEG was established to revolutionize medical and
            healthcare education by bridging the gap between ambition and
            achievement and excellence. Through our Medicine philosophy, we
            cultivate academic brilliance, ethical responsibility, and lifelong
            professional development.
          </p>
          <button className="button w-fit" onClick={() => navigate("/about")}>
            Learn More
          </button>
        </div>
        <div className="hidden md:flex w-full md:w-1/2 justify-end">
          <img src={about} alt="about" className="h-[400px] w-auto" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex justify-start mb-10 md:mb-0">
          <img src={aboutus} alt="about" className="h-[400px] w-auto" />
        </div>
        <div className="w-full md:w-1/2 h-[400px] flex flex-col justify-center">
          <h1 className="header-text mb-5">
            Universities
          </h1>
          <p className="body-text mb-5">
            MEG was created to transform medical education by combining rigorous
            exam preparation with daily practice toolkits and continuous
            professional development. Through our Meducism philosophy, we
            nurture academic excellence, ethical leadership, and lifelong
            learning for future healthcare innovators.
          </p>
          <button onClick={() => navigate("/uni")} className="button w-fit">
            Explore Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;