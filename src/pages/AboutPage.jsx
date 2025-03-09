import Collaborate from "../components/Home/Collaborate";
import CTAsecton from "../components/Home/CTAsecton";
import Testmonial from "../components/Home/testmonial/Testmonial";
import AboutBanner from "../components/About/AbtBanner";
import MissionVision from "../components/About/MissionVision";
import OurStory from "../components/About/OurStory";
import OurValue from "../components/About/OurVlaue";
// import ServiceBanner from "../components/Service/ServiceBanner";
// import Services from "../components/Service/Services";

function AboutPage() {
  return (
    <div>
      <AboutBanner />
      <OurStory />
      <OurValue />
      <MissionVision />
      <Collaborate />
      <CTAsecton />
    </div>
  );
}

export default AboutPage;
