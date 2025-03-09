import Feature from "../components/Services/Feature";
import ForWho from "../components/Services/ForWho";
import OtherService from "../components/Services/OtherService";
import MiddleSection from "../components/Home/MiddleSection";
import ServiceBanner from "../components/Services/ServiceBanner";
import { useParams } from "react-router-dom";

const services = [
  {
    id: 1,
    banner: {
      title: "Medical Education Pathway Consultation",
      image: "",
      description: `Founded in 2025, MEG was established to revolutionize medical and
        healthcare education by bridging the gap between ambition and
        achievement and excellence.`,
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
  {
    id: 2,
    banner: {
      title: "Application Excellence Package",
      price: "400 USD",
      time: "4 Weeks",
      image: "",
      description: `Get Accepted! We offer detailed academic evaluations, essay review (2 rounds), strategic roadmaps, and mock interviews to maximize your application success`,
    },
    forWho: ` Get detailed academic feedback, a strategic roadmap, essay review, and mock interviews - everything you need to impress admissions committees and expert guidance on your application, including academic evaluation, a strategic roadmap, personalized essay review, and mock interviews to build confidence`,
    features: [
      {
        id: 1,
        title: "Detailed evaluation of academic records",
      },
      {
        id: 2,
        title: `Strategic roadmap for application success`,
      },
      {
        id: 3,
        title: `Personal statement & essay review (2 rounds)`,
      },
      {
        id: 4,
        title: ` Mock interviews with feedback`,
      },
    ],
  },
  {
    id: 3,
    banner: {
      title: " Medical School Entrance BootCamp (MSEB)",
      image: "",
      description: `Designed for ambitious students aiming for top medical schools, MSEB is a fully immersive training program that builds the academic, strategic, and professional skills needed to excel in medical school entrance exams and interviews`,
      price: "3,000 USD",
      time: " 3-5 months",
    },
    features: [
      {
        id: 1,
        title: "Rigorous Academic Training",
      },
      {
        id: 2,
        title: `Exam Simulation & Strategy`,
      },
      {
        id: 3,
        title: `Personalized Coaching & Mentorship`,
      },
      {
        id: 4,
        title: ` Interview Mastery`,
      },
      {
        id: 5,
        title: `Application & Essay Guidance`,
      },
      {
        id: 6,
        title: `Community & Peer Learning`,
      },
      {
        id: 7,
        title: `Holistic Development`,
      },
    ],
    forWho: `Are you a high school student (Year 11 or 12) or a recent graduate with your sights set on medical school? Do you aspire to excel on challenging medical entrance exams? This program is specifically tailored for future doctors and healthcare professionals who want to gain a competitive advantage in the application process`,
  },
];

function ServicePage() {
  const { id } = useParams();
  const service = services.find((s) => s.id == id);
  return (
    <div>
      <ServiceBanner service={service.banner} />
      <ForWho forWho={service.forWho} />
      <Feature features={service.features} />
      <OtherService id={id} />
      <MiddleSection />
    </div>
  );
}

export default ServicePage;
