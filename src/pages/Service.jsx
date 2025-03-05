import Testmonial from "../components/Home/testmonial/Testmonial";
import ServiceBanner from "../components/Service/ServiceBanner";
import Services from "../components/Service/Services";

function ServicePage() {
  return (
    <div>
      <ServiceBanner />
      <Services id="services" />
      <Testmonial />
      {/* <Footer classData={"bg-footer"} /> */}
    </div>
  );
}

export default ServicePage;
