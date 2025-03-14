import React from "react";

function MiddleSection() {
  return (
    <div className="bg-accent">
      <div className="mx-auto py-[64px] px-5 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
          <p className="header-text text-white hidden lg:block">
            Become Part of <br /> Our Legacy
          </p>
          <p className="text-[27px] md:text-4xl font-bold playfair text-white mb-5 block lg:hidden">
            Become Part of Our Legacy
          </p>
          <p className="text-[14px] md:text-[20px] md:text-center lg:text-left text-white leading-9">
            Join our scholarly community and connect with <br /> peers, mentors,
            and experts in medical <br /> education today.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZRlGr4mVrxYHuNluSFm5Liq-NcmL_C8hzgCdqO3lxSE51Kg/viewform"
            target="_blank"
            className="button mt-5 lg:mt-0 w-full sm:w-auto justify-center"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
