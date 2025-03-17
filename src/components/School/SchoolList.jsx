import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";

const unis = [
  { university: "University of Oxford", country: "United Kingdom" },
  { university: "University of Cambridge", country: "United Kingdom" },
  { university: "Technical University of Munich", country: "Germany" },
  { university: "ETH Zurich", country: "Switzerland" },
  { university: "Tsinghua University", country: "China" },
  { university: "Peking University", country: "China" },
  { university: "Fudan University", country: "China" },
  { university: "Shanghai Jiao Tong University", country: "China" },
];

function SchoolList() {
  const categoryArray = [...new Set(unis.map((item) => item.country))];
  const [selectedCountry, setSelectedCountry] = useState(categoryArray[0]);
  const [filteredUnis, setFilteredUnis] = useState(unis);

  const handleFilter = (country) => {
    setSelectedCountry(country);
    setFilteredUnis(
      unis.filter((university) => university.country === country)
    );
  };

  useEffect(() => {
    handleFilter(selectedCountry);
  }, [selectedCountry]);

  console.log(categoryArray);

  return (
    <div className="containers">
      <div className="flex items-center gap-5 mb-14">
        <p className="bg-primary w-12 h-12 text-lg rounded-full text-white flex justify-center items-center">
          125
        </p>
        <p className="header-text">Universities</p>
      </div>
      <div className="flex flex-wrap gap-4 mb-14">
        {categoryArray.map((category, index) => (
          <button
            onClick={() => handleFilter(category)}
            className={`border border-primary text-primary rounded-full px-4 py-1 ${
              selectedCountry === category ? "bg-primary text-white" : ""
            }`}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 lg:gap-20">
        {filteredUnis.map((university, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg py-10 px-10 w-full"
          >
            <FaGraduationCap size={30} />
            <p
              className="body-text mt-5 font-bold"
              style={{ color: "#00152B" }}
            >
              {university.university}
            </p>
            {/* <p>{university.country}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchoolList;
