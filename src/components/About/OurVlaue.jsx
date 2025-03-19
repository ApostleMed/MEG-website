// import React from 'react

function OurValue() {
  return (
    <div>
      <div className="containers">
        <p className="header-text font-bold">Our Core Values</p>
        <div className="flex mt-10">
          <div className="flex flex-wrap gap-20 w-full">
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="header-text">
                <span className="text-[24px] tracking-wide">
                  Academic Excellence
                </span>
              </div>
              <p className="text-[20px] mt-8 leading-8 tracking-wide">
                Achieve mastery in <br /> knowledge and skills proficiency.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="header-text">
                <span className="text-[24px] tracking-wide">
                  Collaborative Learning
                </span>
              </div>
              <p className="text-[20px] mt-8 leading-8 tracking-wide">
                Foster interactive teaching <br /> and peer mentorship to build
                a <br />
                supportive community.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="header-text">
                <span className="text-[24px] tracking-wide">
                  Ethical Integrity
                </span>
              </div>
              <p className="text-[20px] mt-8 leading-8 tracking-wide">
                Uphold unwavering moral <br /> responsibility through self-
                <br />
                reflection and ethical practice.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="header-text">
                <span className="text-[24px] tracking-wide">
                  Resilience & Well-Being
                </span>
              </div>
              <p className="text-[20px] mt-8 leading-8 tracking-wide">
                Cultivate self-care and mental fortitude <br /> essential for
                lifelong success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValue;
