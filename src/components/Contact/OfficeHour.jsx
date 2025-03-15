import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { MdOutlinePhone } from "react-icons/md";

const offices = [
  {
    name: "Thailand",
    id: "THA",
    coordinates: [100.5018, 13.7563],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+7)",
    flag: "https://cdn.iconscout.com/icon/free/png-512/free-thailand-flag-icon-download-in-svg-png-gif-file-formats--background-asia-asian-travel-nature-flags-pack-icons-2998640.png?f=webp&w=512",
    // phone: "+66 762 711 90",
  },
  {
    name: "UK",
    id: "GBR",
    coordinates: [-0.1276, 51.5074],
    hours: "2:00 AM - 10:00 AM",
    timezone: "(GMT+0)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/england-flag-icon-download-in-svg-png-gif-file-formats--kingdom-uk-united-country-world-flags-pack-maps-and-navigation-icons-3195943.png?f=webp&w=512",
  },
  {
    name: "Hungary",
    id: "HUN",
    coordinates: [19.0402, 47.4979],
    hours: "3:00 AM - 11:00 AM",
    timezone: "(GMT+1)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/hungary-4575805-3793021.png?f=webp&w=512",
  },
  {
    name: "Italy",
    id: "ITA",
    coordinates: [12.4964, 41.9028],
    hours: "3:00 AM - 11:00 AM",
    timezone: "(GMT+1)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/italy-2184995-1828115.png?f=webp&w=512",
  },
  {
    name: "Poland",
    id: "POL",
    coordinates: [21.0122, 52.2297],
    hours: "3:00 AM - 11:00 AM",
    timezone: "(GMT+1)",
    flag: "https://cdn.iconscout.com/icon/free/png-512/free-poland-flag-icon-download-in-svg-png-gif-file-formats--world-logo-european-polish-landmark-flags-pack-icons-2998595.png?f=webp&w=512",
  },
  {
    name: "Malaysia",
    id: "MYS",
    coordinates: [101.9758, 4.2105],
    hours: "10:00 AM - 6:00 PM",
    timezone: "(GMT+8)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/malaysia-2730470-2266080.png?f=webp&w=512",
  },
  {
    name: "Nigeria",
    id: "NGA",
    coordinates: [8.6753, 9.082],
    hours: "3:00 AM - 11:00 AM",
    timezone: "(GMT+1)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/nigeria-flag-icon-download-in-svg-png-gif-file-formats--country-national-flags-vol-4-pack-culture-religion-festivals-icons-11214272.png?f=webp&w=512",
  },
  {
    name: "Singapore",
    id: "SGP",
    coordinates: [103.8198, 1.3521],
    hours: "10:00 AM - 6:00 PM",
    timezone: "(GMT+8)",
    flag: "https://cdn.iconscout.com/icon/free/png-512/free-singapore-flag-icon-download-in-svg-png-gif-file-formats--delicious-logo-food-indian-tasty-flags-pack-icons-2998618.png?f=webp&w=512",
  },
  {
    name: "China",
    id: "CHN",
    coordinates: [116.4074, 39.9042],
    hours: "10:00 AM - 6:00 PM",
    timezone: "(GMT+8)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/china-4233091-3510790.png?f=webp&w=512",
  },
  {
    name: "Germany",
    id: "DEU",
    coordinates: [10.4515, 51.1657],
    hours: "3:00 AM - 11:00 AM",
    timezone: "(GMT+1)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/germany-2184997-1828116.png?f=webp&w=512",
  },
  {
    name: "Turkey",
    id: "TUR",
    coordinates: [35.2433, 38.9637],
    hours: "5:00 AM - 1:00 PM",
    timezone: "(GMT+3)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/turkey-flag-icon-download-in-svg-png-gif-file-formats--flags-country-world-pack-maps-and-navigation-icons-3195954.png?f=webp&w=512",
  },
  {
    name: "Cambodia",
    id: "KHM",
    coordinates: [104.9915, 12.5655],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+7)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/cambodia-3008831-2498620.png?f=webp&w=512",
  },
  {
    name: "Vietnam",
    id: "VIE",
    coordinates: [105.8542, 21.0285],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+7)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/vietnam-2184975-1828138.png?f=webp&w=512",
  },
  {
    name: "Laos",
    id: "LAO",
    coordinates: [102.4955, 19.8563],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+7)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/laos-4422504-3664130.png?f=webp&w=512",
  },
  {
    name: "India",
    id: "IND",
    coordinates: [78.9629, 20.5937],
    hours: "6:30 AM - 2:30 PM",
    timezone: "(GMT+5:30)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/india-flag-3916897-3244699.png?f=webp&w=512",
  },
  {
    name: "Finland",
    id: "FIN",
    coordinates: [28.45, 68.36],
    hours: "4:00 AM - 12:00 PM",
    timezone: "(GMT+2)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/finland-2730503-2266113.png?f=webp&w=512",
  },
  {
    name: "Philippines",
    id: "PHL",
    coordinates: [121.774, 12.8797],
    hours: "10:00 AM - 6:00 PM",
    timezone: "(GMT+8)",
    flag: "https://cdn.iconscout.com/icon/premium/png-512-thumb/philipine-4575822-3793038.png?f=webp&w=512",
  },
];

function OfficeHour() {
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);
  // console.log(selectedOffice);

  return (
    <div>
      <div className="containers">
        <div className="flex flex-col md:flex-row gap-10 md:gap-40">
          <p className="header-text font-bold">Office Hours</p>
          <p className="body-text">
            Founded in 2025, MEG was established to revolutionize medical and
            healthcare <br /> education by bridging the gap between ambition and
            achievement and <br /> excellence. Through our Medicine philosophy,
            we cultivate academic brilliance, <br /> ethical responsibility, and
            lifelong professional development.
          </p>
        </div>

        <div className="mt-20 w-full hidden lg:flex">
          <div className="w-2/3">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 150,
                center: [50, 50],
              }}
            >
              <Geographies geography="./features.json">
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryName = geo.id;
                    const fillColor =
                      offices.find((office) => office.id === countryName)
                        ?.id === countryName
                        ? "#DAA520"
                        : "#CCCCCC";
                    return (
                      <Geography
                        key={geo.rsmKey}
                        onClick={() => {
                          // console.log("geo", geo);
                        }}
                        geography={geo}
                        fill={fillColor}
                        stroke="#D6D6DA"
                        style={{
                          default: {
                            outline: "none",
                          },
                          hover: {
                            fill: "#DAA520",
                            outline: "none",
                            cursor: "pointer",
                          },
                          pressed: {
                            fill: "#E5E5E5",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
              {offices.map((office) => (
                <Marker
                  key={office.name}
                  coordinates={office.coordinates}
                  onClick={() => setSelectedOffice(office)}
                >
                  <circle
                    r={5}
                    fill="#F4B41A"
                    stroke="red"
                    strokeWidth={1}
                    style={{ cursor: "pointer" }}
                  />
                </Marker>
              ))}
              {/* <Marker coordinates={[0, 0]}> */}
            </ComposableMap>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            {selectedOffice ? (
              <div className="p-4">
                <div className="font-bold flex flex-col items-center gap-2 mb-3 text-[24px]">
                  <img src={selectedOffice.flag} className="w-8 h-8" />
                  <h3 className="">{selectedOffice.name}</h3>
                  <p className="">{selectedOffice.hours}</p>
                  <p className="">{selectedOffice.timezone}</p>

                  {/* <a
                    href={`tel:${selectedOffice?.phone}`}
                    className="flex items-center button mt-4"
                  >
                    <MdOutlinePhone className="mr-2" size={20} />
                    <span>{selectedOffice?.phone}</span>
                  </a> */}
                </div>
              </div>
            ) : (
              <div className="text-gray-500">
                Click on a marker to view office hours
              </div>
            )}
          </div>
        </div>

        {/* table     */}
        <div className="w-full mt-10 block lg:hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300 text-md">
                <th className="px-4 py-2 text-lg">Office</th>
                <th className="px-4 py-2 text-lg">Contact</th>
              </tr>
            </thead>
            <tbody>
              {offices.map((office) => (
                <tr key={office.name} className="border-b-2 border-gray-300">
                  <td className="px-4 py-2 text-center">{office.name}</td>
                  <td className="px-4 py-2 text-center">
                    <p className="mb-2"> {office.hours}</p>

                    {/* <a
                      href={`tel:${office?.phone}`}
                      className="font-medium text-accent"
                    >
                      <BiPhone className="inline mr-1" />
                      {office?.phone}
                    </a> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OfficeHour;
