import about from "../../assets/image/story/story.svg";
import aboutus from "../../assets/image/story/storyTwo.svg";
const OurStory = () => {
  return (
    <div className="containers space-y-20">
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2 h-[400px] flex flex-col justify-center">
          <p className="body-text mb-5">
            At MEG, our journey began in 2025 with a mission to revolutionize
            medical and healthcare education. We bridge the gap between ambition
            and achievement by nurturing academic excellence, ethical
            responsibility, and a commitment to lifelong professional
            development. Our Medicine philosophy informs every initiative,
            ensuring that each student and professional we work with is prepared
            to meet the challenges of tomorrow.
          </p>
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
          <div className="body-text mb-5">
            <p>
              Founded in 2025, MEG was established to revolutionize medical and
              healthcare education by bridging the gap between ambition and
              achievement and excellence. Through our Medicine philosophy, we
              cultivate academic brilliance, ethical responsibility, and
              lifelong professional development.
            </p>
            <br />
            <p>
              Founded in 2025, MEG was established to revolutionize medical and
              healthcare education by bridging the gap between ambition and
              achievement and excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
