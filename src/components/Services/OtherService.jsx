import React from "react";

function OtherService({ id }) {
  return (
    <div className="bg-gray-100 pb-[64px]">
      <div className="containers">
        <p className="header-text text-center">Ready to Get Started?</p>
        <div className="flex justify-center mt-10">
          <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-md">
            <h3 className="header-text mb-4">
              Have Questions About Your Medical Education Journey?
            </h3>
            <p className="body-text mb-6">
              Book a consultation with our experienced advisors and get
              personalized guidance for your medical education pathway.
            </p>
            <a
              href="https://calendly.com/mededuguild/pathway?month=2025-03"
              className="bg-accent inline-block px-8 py-3 text-[16px] rounded-full text-white transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherService;