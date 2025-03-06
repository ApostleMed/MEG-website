import about from "../../assets/image/AboutUs/aboutone.svg";
import aboutus from "../../assets/image/AboutUs/abouttwo.svg";
const AboutUs = () => {
  return (
    <div className="containers space-y-20">
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2 h-[400px] flex flex-col justify-center">
          <h1 className="header-text mb-5">Our Journey & Mission</h1>
          <p className="body-text mb-5">
            Founded in 2025, MEG was established to revolutionize medical and
            healthcare education by bridging the gap between ambition and
            achievement and excellence. Through our Medicine philosophy, we
            cultivate academic brilliance, ethical responsibility, and lifelong
            professional development.
          </p>
          <button className="button w-fit">Learn More</button>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src={about} alt="about" className="h-[400px] w-auto" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2 flex justify-start">
          <img src={aboutus} alt="about" className="h-[400px] w-auto" />
        </div>
        <div className="w-1/2 h-[400px] flex flex-col justify-center">
          <h1 className="header-text mb-5">
            University Partnership & Programs
          </h1>
          <p className="body-text mb-5">
            Founded in 2025, MEG was established to revolutionize medical and
            healthcare education by bridging the gap between ambition and
            achievement and excellence. Through our Medicine philosophy, we
            cultivate academic brilliance, ethical responsibility, and lifelong
            professional development.
          </p>
          <button className="button w-fit">Explore Programs</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
