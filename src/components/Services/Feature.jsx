// import React from 'react'

function Feature({ features }) {
  return (
    <div>
      <div className="containers pb-[64px]">
        <p className="header-text font-bold mt-20">Features</p>
        <div className="flex mt-10">
          <div className="flex gap-20 flex-wrap w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 w-72 p-10 rounded-2xl shadow-md border border-gray-200 w-full sm:w-auto"
              >
                <div className="font-bold text-white w-10 h-10 flex items-center justify-center bg-primary rounded-full">
                  <span className="text-[20px]">{feature.id}</span>
                </div>
                <p className="text-[20px] mt-8">
                  {feature.title}
                  roadmap.
                </p>
              </div>
            ))}

            {/* <div className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
