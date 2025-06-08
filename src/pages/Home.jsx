import AboutUs from "../components/Home/AboutUs";
import Collaborate from "../components/Home/Collaborate";
import HeroBanner from "../components/Home/HeroBanner";
import MiddleSection from "../components/Home/MiddleSection";
import Services from "../components/Home/Services";
import CTAsecton from "../components/Home/CTAsecton";
function Home() {
  return (
    <div className=" mx-auto">
      <HeroBanner />
      <AboutUs />
      <MiddleSection />
      <Collaborate />
      <CTAsecton />
    </div>
  );
}

export default Home;
