// import React from 'react';
import contact1 from "./../../assets/image/contact/contact1.svg";
import contact2 from "./../../assets/image/contact/contact2.svg";
import contact3 from "./../../assets/image/contact/contact3.svg";
import icon1 from "./../../assets/image/contact/phone_icon.svg";
import icon2 from "./../../assets/image/contact/message_icon.svg";
import icon3 from "./../../assets/image/contact/mail-icon.svg";

const ContactSection = () => {
  return (
    <div className="pt-[64px] px-5 lg:px-0 lg:w-[1000px] mx-auto mt-[80px] sm:mt-[100px] md:mt-[120px] lg:mt-[150px] min-h-[100vh]">
      <div className="">
        {/* Talk to a Care Manager Section */}
        <div className="bg-sub w-full rounded-3xl px-5 sm:px-20 md:px-8 py-8 flex flex-col md:flex-row gap-5 items-center">
          <div className="md:w-1/3 md:hidden">
            <img
              src={contact1} // Replace with your actual image URL
              alt="Care Manager Illustration"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="md:text-[20px] lg:text-[28px] font-semibold text-pridark mb-4">
              Talk to a Care Manager
            </h2>
            <p className="sourcesans lg:text-[20px] mb-4">
              Our office hours are Monday to Friday, 9 AM to 5 PM. We're here to
              assist you with any questions or support you need.
            </p>
            <button className="w-full lg:w-auto text-[20px] justify-center bg-white hover:scale-105 hover:shadow-lg text-primary open-sans font-bold py-4 lg:py-6 lg:px-10 rounded-full inline-flex items-center">
              <span className="me-5">Call a Care Advisor</span>
              <img src={icon1} />
            </button>
          </div>
          <div className="md:w-1/3 hidden md:block">
            <img
              src={contact1} // Replace with your actual image URL
              alt="Care Manager Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Talk to a Care Manager Section */}
        <div className="bg-sub w-full rounded-3xl px-5 sm:px-20 md:px-8 py-8 flex flex-col md:flex-row gap-5 items-center my-10">
          <div className="md:w-1/2">
            <img
              src={contact2} // Replace with your actual image URL
              alt="Care Manager Illustration"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="md:text-[20px] lg:text-[28px] font-semibold text-pridark mb-4">
              Discuss Your Needs
            </h2>
            <p className="sourcesans lg:text-[20px] mb-4">
              Let’s start with a conversation. We’ll ask thoughtful questions,
              listen closely, and craft a plan with ongoing adjustments to
              ensure it always works for you.
            </p>
            <button className="w-full lg:w-auto text-[20px] justify-center bg-white hover:scale-105 hover:shadow-lg text-primary open-sans font-bold py-4 lg:py-6 lg:px-10 rounded-full inline-flex items-center">
              <span className="me-5">Leave a Message</span>
              <img src={icon2} />
            </button>
          </div>
        </div>

        {/* Talk to a Care Manager Section */}
        <div className="bg-sub w-full rounded-3xl px-5 sm:px-20 md:px-8 py-8 md:py-10 flex flex-col md:flex-row gap-5 items-center">
          <div className="md:w-1/2 md:hidden">
            <img
              src={contact3} // Replace with your actual image URL
              alt="Care Manager Illustration"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="md:text-[20px] lg:text-[28px] font-semibold text-pridark mb-4">
              Together, We Can Make a Difference in Caregiving
            </h2>
            <p className="sourcesans lg:text-[20px] mb-4">
              Your partnership helps us empower caregivers and transform lives
            </p>
            <button className="w-full lg:w-auto text-[20px] justify-center bg-white hover:scale-105 hover:shadow-lg text-primary open-sans font-bold py-4 lg:py-6 lg:px-10 rounded-full inline-flex items-center">
              <span className="me-5">Send a email</span>
              <img src={icon3} className="w-6 h-6" />
            </button>
          </div>
          <div className="md:w-1/2 hidden md:block">
            <img
              src={contact3} // Replace with your actual image URL
              alt="Care Manager Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
