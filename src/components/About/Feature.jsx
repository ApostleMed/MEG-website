// import React from 'react

function Feature() {
  return (
    <div>
      <div className="containers pb-[64px]">
        <p className="header-text font-bold mt-20">Features</p>
        <div className="flex mt-10">
          <div className="flex justify-between w-full">
            <div className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200">
              <div className="font-bold text-white w-10 h-10 flex items-center justify-center bg-primary rounded-full">
                <span className="text-[20px]">1</span>
              </div>
              <p className="text-[20px] mt-8">
                Personalized 1-on-1 <br /> consultation.
              </p>
            </div>

            <div className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200">
              <div className="font-bold text-white w-10 h-10 flex items-center justify-center bg-primary rounded-full">
                <span className="text-[20px]">2</span>
              </div>
              <p className="text-[20px] mt-8">
                Overview of entrance <br /> requirements & <br /> preparation
                roadmap.
              </p>
            </div>

            <div className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200">
              <div className="font-bold text-white w-10 h-10 flex items-center justify-center bg-primary rounded-full">
                <span className="text-[20px]">3</span>
              </div>
              <p className="text-[20px] mt-8">
                Guidance on medical <br /> school selection & <br /> eligibility
                assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
