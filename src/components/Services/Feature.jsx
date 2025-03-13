// import React from 'react'

function Feature({ features }) {
  return (
    <div>
      <div className="containers">
        <p className="header-text font-bold mt-20">Features</p>
        <div className="flex mt-10">
          <div className="flex gap-10 md:gap-12 flex-wrap">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-10 rounded-2xl shadow-md border border-gray-200 w-full sm:w-72"
              >
                <div className="font-bold text-white w-10 h-10 flex items-center justify-center bg-primary rounded-full">
                  <span className="text-[20px]">{feature.id}</span>
                </div>
                <p className="text-[20px] mt-8">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
