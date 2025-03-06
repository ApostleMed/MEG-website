import React from "react";

function MiddleSection() {
  return (
    <div className="bg-accent">
      <div className="w-[1100px] mx-auto py-[45px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="header-text text-white">
            Become Part of <br /> Our Legacy
          </p>
          <p className="text-[20px] text-white leading-9">
            Join our scholarly community and connect with <br /> peers, mentors,
            and experts in medical <br /> education today.
          </p>
          <button className="button">Join Our Community</button>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
