// import Footer from "../components/Footer";
import AboutUs from "../components/Home/AboutUs";
import Accordion from "../components/Home/Accordian";
import CaregiverSection from "../components/Home/CaregiverSection";
// import SimpleCareSolutions from "../components/Home/care/SimpleCareSoluutions";
import Collaborate from "../components/Home/Collaborate";
import HeroBanner from "../components/Home/HeroBanner";
import MiddleSection from "../components/Home/MiddleSection";
import Mission from "../components/Home/Mission";
import Services from "../components/Home/Services";
// import Steps from "../components/Home/StepPage";
import Testmonial from "../components/Home/testmonial/Testmonial";
import CTAsecton from "../components/Home/CTAsecton";
function Home() {
  return (
    <div className=" mx-auto">
      <HeroBanner />
      <AboutUs />
      <MiddleSection />
      <Services />
      <Collaborate />
      <CTAsecton />
      {/* <Mission />
      <Testmonial />
      <CaregiverSection />
      <Accordion /> */}
    </div>
  );
}

export default Home;
