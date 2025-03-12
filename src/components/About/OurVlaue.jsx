// import React from 'react

function OurValue() {
  return (
    <div>
      <div className="containers">
        <p className="header-text font-bold">Our Core Values</p>
        <div className="flex mt-10">
          <div className="flex flex-wrap gap-5 w-full">
            <div className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200">
              <div className="header-text">
                <span className="text-[24px] tracking-wide">Integrity</span>
              </div>
              <p className="text-[20px] mt-8 leading-8 tracking-wide">
                Upholding honesty <br /> and transparency in <br /> all our
                endeavors.
              </p>
            </div>

            <div className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200">
              <div className="header-text">
                <span className="text-[24px] tracking-wide">History</span>
              </div>
              <p className="text-[20px] mt-8 leading-8 tracking-wide">
                Celebrating our storied <br /> legacy as the foundation of{" "}
                <br /> innovative approaches.
              </p>
            </div>

            <div className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200">
              <div className="header-text">
                <span className="text-[24px] tracking-wide">Ethics</span>
              </div>
              <p className="text-[20px] mt-8 leading-8 tracking-wide">
                Committing to <br /> the highest moral <br /> standards in
                education and <br />
                professional development.
              </p>
            </div>

            <div className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200">
              <div className="header-text">
                <span className="text-[24px] tracking-wide">
                  Professionalism
                </span>
              </div>
              <p className="text-[20px] mt-8 leading-8 tracking-wide">
                Demonstrating excellence <br /> through every interaction and{" "}
                <br /> service.
              </p>
            </div>

            <div className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200">
              <div className="header-text">
                <span className="text-[24px] tracking-wide">Mentorship</span>
              </div>
              <p className="text-[20px] mt-8 leading-8 tracking-wide">
                Guiding and inspiring
                <br /> the next generation
                <br /> of medical
                <br />
                professionals.
              </p>
            </div>

            <div className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200">
              <div className="header-text">
                <span className="text-[24px] tracking-wide">
                  Medical Education
                </span>
              </div>
              <p className="text-[20px] mt-8 leading-8 tracking-wide">
                Dedicating ourselves <br /> to advancing medical <br />{" "}
                knowledge and practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValue;
