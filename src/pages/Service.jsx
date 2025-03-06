import Collaborate from "../components/Home/Collaborate";
import CTAsecton from "../components/Home/CTAsecton";
import Testmonial from "../components/Home/testmonial/Testmonial";
import MissionVision from "../components/Service/MissionVision";
import OurStory from "../components/Service/OurStory";
import OurValue from "../components/Service/OurVlaue";
import ServiceBanner from "../components/Service/ServiceBanner";
// import Services from "../components/Service/Services";

function ServicePage() {
  return (
    <div>
      <ServiceBanner />
      <OurStory />
      <OurValue />
      <MissionVision />
      <Collaborate />
      <CTAsecton />
    </div>
  );
}

export default ServicePage;
