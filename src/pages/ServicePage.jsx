import Feature from "../components/Services/Feature";
import ForWho from "../components/Services/ForWho";
import OtherService from "../components/Services/OtherService";
import MiddleSection from "../components/Home/MiddleSection";
import ServiceBanner from "../components/Services/ServiceBanner";
import { useParams } from "react-router-dom";
// import bg from "../assets/image/service/bg.avif";

const services = [
  {
    id: 1,
    banner: {
      title: "Medical Education Pathway Consultation",
      price: "100USD",
      time: "45 Minutes",
      foc: "(FOC for LDCs)",
      image:
        "https://images.pexels.com/photos/7699502/pexels-photo-7699502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: `For Secondary/High School Students/Graduates exploring medical education and Organizations/Institutions that want to establish exceptional aspiring healthcare and medical student recruitment activities`,
    },
    forWho: `Designed for ambitious students aiming for top medical schools, MSEB is a fully
      immersive training program that builds the academic, strategic, and professional
      skills needed to excel in medical school entrance exams and interviews`,
    features: [
      {
        id: 1,
        title: "Personalized 1-on-1 consultation.",
      },
      {
        id: 2,
        title: `Overview of entrance
      requirements &
      preparation roadmap.`,
      },
      {
        id: 3,
        title: `Guidance on medical
      school selection &
      eligibility assessment.`,
      },
    ],
  },
];

function ServicePage() {
  const { id } = useParams();
  const service = services.find((s) => s.id == id);
  return (
    <div>
      <ServiceBanner service={service.banner} />
      {service?.forWho && <ForWho forWho={service.forWho} />}
      <Feature features={service.features} />
      <OtherService id={id} />
      <MiddleSection />
    </div>
  );
}

export default ServicePage;