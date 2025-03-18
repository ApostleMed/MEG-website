import about from "../../assets/image/story/story.svg";
import aboutus from "../../assets/image/story/storyTwo.svg";
import { Element } from "react-scroll";
const OurStory = () => {
  return (
    <Element name="our-story">
      <div className="containers space-y-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-[400px] flex flex-col justify-center">
            <p className="body-text mb-5">
              The Medical Education Guild (MEG) is a pioneering global
              initiative dedicated to transforming healthcare education through
              our unique philosophy of Meducism. We empower aspiring youths to
              become elite, ethical healthcare professionals by offering
              rigorous academic training, personalized mentorship, and
              innovative NFT-based credentialing. Our programs—ranging from
              intensive exam preparation bootcamps to daily practice
              toolkits—ensure that students are holistically prepared for the
              challenges of medical school and beyond.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img src={about} alt="about" className="h-[400px] w-auto" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 justify-center flex md:justify-start">
            <img src={aboutus} alt="about" className="h-[400px] w-auto" />
          </div>
          <div className="md:w-1/2 h-[400px] flex flex-col justify-center">
            <div className="body-text mb-5">
              <p>
                At MEG, our mission is to revolutionize the future of healthcare
                by instilling a universal commitment to lifelong learning and
                compassionate care. We cultivate academic excellence,
                collaborative learning, ethical integrity, and resilience to
                bridge the gap between ambition and achievement.
              </p>
              <br />
              <p>
                By creating a supportive community of future healers, we aim to
                make healthcare a universal moral obligation, transforming both
                individual careers and the well-being of communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default OurStory;
