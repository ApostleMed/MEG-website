import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";

const unis = [
  { university: "Yerevan State Medical University", country: "Armenia" },
  {
    university: "University of Traditional Medicine Armenia",
    country: "Armenia",
  },
  { university: "Yerevan Haybusak University", country: "Armenia" },
  { university: "Ross University School of Medicine", country: "Barbados" },
  {
    university: "Sarajevo School of Science and Technology",
    country: "Bosnia and Herzegovina",
  },
  {
    university: "University of East Sarajevo Faculty of Medicine",
    country: "Bosnia and Herzegovina",
  },
  {
    university: "University of East Sarajevo Faculty of Medicine",
    country: "Bosnia and Herzegovina",
  },
  { university: "University of Mostar", country: "Bosnia and Herzegovina" },
  {
    university:
      "Prof Dr Assen Zlatarov University Faculty of Medicine - Burgas",
    country: "Bulgaria",
  },
  { university: "Pleven Medical University", country: "Bulgaria" },
  { university: "Varna Medical University", country: "Bulgaria" },
  {
    university: "University of Sofia St Kliment Ohridski",
    country: "Bulgaria",
  },
  { university: "Plovdiv Medical University", country: "Bulgaria" },
  { university: "Sofia Medical University", country: "Bulgaria" },
  { university: "Trakia University", country: "Bulgaria" },
  { university: "University of Zagreb", country: "Croatia" },
  { university: "University of Split", country: "Croatia" },
  { university: "University of Rijeka", country: "Croatia" },
  { university: "European University Cyprus", country: "Cyprus" },
  { university: "University of Nicosia Medical School", country: "Cyprus" },
  { university: "University of Ostrava", country: "Czech Republic" },
  { university: "Masaryk University", country: "Czech Republic" },
  { university: "Charles University Prague", country: "Czech Republic" },
  {
    university: "Charles University Faculty of Medicine in Pilsen",
    country: "Czech Republic",
  },
  {
    university: "Charles University Faculty of Pharmacy in Hradec Králové",
    country: "Czech Republic",
  },
  {
    university: "Charles University Faculty of Medicine in Hradec Králové",
    country: "Czech Republic",
  },
  { university: "Palacky University in Olomouc", country: "Czech Republic" },
  {
    university: "Charles University Third Faculty of Medicine",
    country: "Czech Republic",
  },
  {
    university: "Charles University Second Faculty of Medicine",
    country: "Czech Republic",
  },
  {
    university: "Charles University First Faculty of Medicine",
    country: "Czech Republic",
  },
  { university: "University of Tartu", country: "Estonia" },
  { university: "Estonian University of Life Sciences", country: "Estonia" },
  {
    university: "Alte University International School of Medicine in Tbilisi",
    country: "Georgia",
  },
  { university: "Tbilisi State Medical University", country: "Georgia" },
  { university: "Kutaisi University", country: "Georgia" },
  { university: "Ilia State University", country: "Georgia" },
  { university: "Georgian National University SEU", country: "Georgia" },
  { university: "Georgian American University", country: "Georgia" },
  { university: "East European University", country: "Georgia" },
  { university: "David Tvildiani Medical University", country: "Georgia" },
  { university: "Akaki Tsereteli State University", country: "Georgia" },
  { university: "University of Georgia (UoG)", country: "Georgia" },
  { university: "Caucasus International University", country: "Georgia" },
  {
    university: "Petre Shotadze Tbilisi Medical Academy (TMA)",
    country: "Georgia",
  },
  { university: "European University in Tbilisi Georgia", country: "Georgia" },
  {
    university: "St. George's University School of Medicine",
    country: "Grenada",
  },
  { university: "University of Szeged", country: "Hungary" },
  { university: "University of Pecs", country: "Hungary" },
  { university: "University of Debrecen Medical School", country: "Hungary" },
  {
    university: '"University of Veterinary Medicine, Budapest"',
    country: "Hungary",
  },
  { university: "Semmelweis University of Medicine", country: "Hungary" },
  { university: "McDaniel College Budapest", country: "Hungary" },
  { university: "University of Pavia", country: "Italy" },
  { university: "Vita-Salute San Raffaele University", country: "Italy" },
  { university: "University of Siena", country: "Italy" },
  {
    university: "University of Milano-Bicocca School of Medicine and Surgery",
    country: "Italy",
  },
  { university: "University of Messina", country: "Italy" },
  { university: "University of Bari Aldo Moro", country: "Italy" },
  { university: "Sapienza University of Rome", country: "Italy" },
  {
    university: "Saint Camillus International University of Health Sciences",
    country: "Italy",
  },
  { university: "Milan International Medical School", country: "Italy" },
  { university: "Campus Bio-Medico University of Rome", country: "Italy" },
  {
    university: "Università Cattolica Del Sacro Cuore Bolzano Campus",
    country: "Italy",
  },
  { university: "Humanitas University Milan", country: "Italy" },
  {
    university: "Università Cattolica del Sacro Cuore Rome Campus",
    country: "Italy",
  },
  { university: "Riga Stradins University (RSU)", country: "Latvia" },
  { university: "Vilnius University", country: "Lithuania" },
  {
    university: "Lithuanian University of Health Sciences (LSMU)",
    country: "Lithuania",
  },
  {
    university: "MediCampus Europeo - Faculty of Medicine in Malta",
    country: "Malta",
  },
  {
    university:
      "The State University of Medicine and Pharmacy Nicolae Testemitanu",
    country: "Moldova",
  },
  { university: "Near East University", country: "Northern Cyprus" },
  {
    university: "Wroclaw University of Environmental and Life Sciences",
    country: "Poland",
  },
  { university: "Wroclaw Medical University", country: "Poland" },
  {
    university: "University of Warmia and Mazury in Olsztyn",
    country: "Poland",
  },
  {
    university: '"University of Rzeszów, Faculty of Medicine"',
    country: "Poland",
  },
  {
    university:
      "The Faculty of Veterinary Medicine at the Warsaw University of Life Sciences (WULS-SGGW)",
    country: "Poland",
  },
  { university: "Medical University of Lublin", country: "Poland" },
  { university: "Medical University of Gdańsk", country: "Poland" },
  {
    university: "Jan Kochanowski University School of Medicine in Kielce",
    country: "Poland",
  },
  { university: "Jagiellonian University Medical College", country: "Poland" },
  {
    university: "Pomeranian Medical University in Szczecin",
    country: "Poland",
  },
  {
    university: "Nicolaus Copernicus University – Collegium Medicum",
    country: "Poland",
  },
  {
    university: "Andrzej Frycz Modrzewski Krakow University",
    country: "Poland",
  },
  { university: "Academy of Silesia", country: "Poland" },
  { university: "Academy of Silesia", country: "Poland" },
  { university: "Poznan University of Medical Sciences", country: "Poland" },
  { university: "Medical University of Warsaw", country: "Poland" },
  { university: "Medical University of Lodz", country: "Poland" },
  { university: "Medical University of Silesia", country: "Poland" },
  { university: "Medical University of Bialystok", country: "Poland" },
  {
    university:
      '"George Emil Palade University of Medicine, Pharmacy, Sciences and Technology of Târgu Mureș"',
    country: "Romania",
  },
  { university: "Victor Babes University of Medicine", country: "Romania" },
  { university: "Vasile Goldis Western University", country: "Romania" },
  {
    university: "Iuliu Hatieganu University of Medicine and Pharmacy",
    country: "Romania",
  },
  { university: "Grigore T. Popa University of Medicine", country: "Romania" },
  { university: "Dunarea de Jos University of Galati", country: "Romania" },
  { university: "Ovidius University Constanta", country: "Romania" },
  { university: "Oradea Medical University", country: "Romania" },
  {
    university:
      "Banat University of Agricultural Sciences & Veterinary Medicine",
    country: "Romania",
  },
  {
    university: "University of Medicine & Pharmacy Craiova",
    country: "Romania",
  },
  { university: "Titu Maiorescu University", country: "Romania" },
  {
    university: "Carol Davila University of Medicine & Pharmacy",
    country: "Romania",
  },
  {
    university: "University of Targu Mures Medical Campus Hamburg (UMCH)",
    country: "Romania/Germany",
  },
  { university: "University of Belgrade", country: "Serbia" },
  { university: "University of Novi Sad", country: "Serbia" },
  {
    university: "The University of Veterinary Medicine and Pharmacy in Kosice",
    country: "Slovakia",
  },
  { university: "Slovak Medical University", country: "Slovakia" },
  { university: "Comenius University in Bratislava", country: "Slovakia" },
  {
    university: "Jessenius Faculty of Medicine at Comenius University",
    country: "Slovakia",
  },
  { university: "Pavol Jozef Safarik University", country: "Slovakia" },
  { university: "CEU San Pablo University", country: "Spain" },
  { university: "European University of Madrid", country: "Spain" },
  {
    university: "The Catholic University of Murcia Cartagena Campus",
    country: "Spain",
  },
  { university: "Acibadem University", country: "Turkey" },
  { university: "Lugansk State Medical University (LSMU)", country: "Ukraine" },
  {
    university:
      "Kharkiv Institute of Medicine and Biomedical Sciences in Western Ukraine",
    country: "Ukraine",
  },
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
