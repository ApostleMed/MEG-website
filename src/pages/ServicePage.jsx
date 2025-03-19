import Feature from "../components/Services/Feature";
import ForWho from "../components/Services/ForWho";
import OtherService from "../components/Services/OtherService";
import MiddleSection from "../components/Home/MiddleSection";
import ServiceBanner from "../components/Services/ServiceBanner";
import { useParams } from "react-router-dom";
import bg from "../assets/image/service/bg.avif";

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
      description: `For Secondary/High School Students/Graduates  exploring medical education`,
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
      button: "Book a Consultation",
      title: "Application Excellence Package",
      price: "5 USD per month",
      time: "4 Weeks",
      image:
        "https://images.pexels.com/photos/8085932/pexels-photo-8085932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: `Get Accepted! We offer detailed academic evaluations, essay review (2 rounds), strategic roadmaps, and mock interviews to maximize your application success`,
    },
    forWho: ` Get detailed academic feedback, a strategic roadmap, essay review, and mock interviews - everything you need to impress admissions committees and expert guidance on your application, including academic evaluation, a strategic roadmap, personalized essay review, and mock interviews to build confidence`,
    features: [
      {
        id: 1,
        title:
          "Access daily quizzes and full-length practice exams, all proctored to maintain test integrity.",
        header: "Daily Proctored Exams",
      },
      {
        id: 2,
        title: `Receive immediate scoring and detailed performance analytics to pinpoint your strengths and areas for improvement.`,
        header: "Instant Feedback",
      },
      {
        id: 3,
        title: `Gain consistent practice and strategic insights that boost your confidence and readiness for exam day`,
        header: "Exam Preparedness",
      },
    ],
  },
  {
    id: 3,
    banner: {
      title: " Medical School Entrance BootCamp (MSEB)",
      image:
        "https://images.pexels.com/photos/9489910/pexels-photo-9489910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: `Designed for ambitious students aiming for top medical schools, MSEB is a fully immersive training program that builds the academic, strategic, and professional skills needed to excel in medical school entrance exams and interviews`,
      price: "5,000 USD",
      time: " 3-5 months",
      location: "Thailand",
      schedule: "Flexible schedules available",
    },
    features: [
      {
        id: 1,
        title:
          " Master essential subjects including biology, chemistry, physics, and logical reasoning tailored for medical school entrance exams.",
        header: "Rigorous Academic Training ",
      },
      {
        id: 2,
        title: `Practice with real past exam questions, time management techniques, and scoring strategies to maximize success.`,
        header: "Exam Simulation & Strategy ",
      },
      {
        id: 3,
        title: `Learn from top medical students and healthcare professionals, gaining insider knowledge on excelling in medical school applications.`,
        header: "Personalized Coaching & Mentorship ",
      },
      {
        id: 4,
        title: `Intensive training on MMI, panel interviews, and scenario-based assessments to build confidence and professionalism.`,
        header: "Interview Mastery ",
      },
      {
        id: 5,
        header: `Application & Essay Guidance `,
        title:
          "Craft compelling personal statements and application documents with expert feedback.",
      },
      {
        id: 6,
        title:
          "Engage in interactive discussions, case studies, and teamwork exercises that simulate real medical school environments.",
        header: `Community & Peer Learning`,
      },
      {
        id: 7,
        title: `Enhance problem-solving skills, critical thinking, ethical reasoning, and stress management techniques essential for a medical career.`,
        header: "Holistic Development",
      },
    ],
    forWho: `Are you a high school student (Year 11 or 12) or a recent graduate with your sights set on medical school? Do you aspire to excel on challenging medical entrance exams? This program is specifically tailored for future doctors and healthcare professionals who want to gain a competitive advantage in the application process`,
  },
  {
    id: 4,
    banner: {
      button: "Contact Us",
      title: " Accommodation & Boarding Services",
      image:
        "https://images.pexels.com/photos/4413745/pexels-photo-4413745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: `For students traveling from other regions or countries, fully equipped accommodation and boarding school services are available. Options include:`,
    },
    features: [
      {
        id: 1,
        title: "Shared or private rooms with study-friendly environments.",
      },
      {
        id: 2,
        title: `Full meal plans catering to various dietary preferences.`,
      },
      {
        id: 3,
        title: `Study lounges & collaborative spaces for academic engagement.`,
      },
      {
        id: 4,
        title: `24/7 support & security ensuring a safe and comfortable stay.`,
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
