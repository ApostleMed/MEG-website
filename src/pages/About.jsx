import AboutBanner from "../components/About/AboutBanner";
import Feature from "../components/About/Feature";
import ForWho from "../components/About/ForWho";
import GoalsAndAspirations from "../components/About/GoalsAndAspirations ";
import OtherService from "../components/About/OtherService";
// import TeamSection from "../components/About/TeamSection";
// import Footer from "../components/Footer";
import Accordion from "../components/Home/Accordian";
import CaregiverSection from "../components/Home/CaregiverSection";
import MiddleSection from "../components/Home/MiddleSection";
// import Collaborate from "../components/Home/Collaborate";
import Testmonial from "../components/Home/testmonial/Testmonial";

function About() {
  return (
    <div>
      <AboutBanner />
      <ForWho />
      <Feature />
      <OtherService />
      <MiddleSection />
    </div>
  );
}

export default About;
