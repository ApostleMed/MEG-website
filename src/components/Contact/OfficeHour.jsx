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
    name: "Thailand Office",
    id: "THA",
    coordinates: [100.5018, 13.7563],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+7)",
    flag: "🇹🇭",
    phone: "+66 762 711 90",
  },
  {
    name: "UK Office",
    id: "UK",
    coordinates: [-0.1276, 51.5074],
    hours: "2:00 AM - 10:00 AM",
    timezone: "(GMT+0)",
    flag: "🇬🇧",
  },
  {
    name: "Hungary Office",
    id: "HUN",
    coordinates: [19.0402, 47.4979],
    hours: "3:00 AM - 11:00 AM",
    timezone: "(GMT+1)",
    flag: "🇭🇺",
  },
  {
    name: "Italy Office",
    id: "ITA",
    coordinates: [12.4964, 41.9028],
    hours: "3:00 AM - 11:00 AM",
    timezone: "(GMT+1)",
    flag: "🇮🇹",
  },
  {
    name: "Poland Office",
    id: "POL",
    coordinates: [21.0122, 52.2297],
    hours: "3:00 AM - 11:00 AM",
    timezone: "(GMT+1)",
    flag: "🇵🇱",
  },
  {
    name: "Malaysia Office",
    id: "MYS",
    coordinates: [101.9758, 4.2105],
    hours: "10:00 AM - 6:00 PM",
    timezone: "(GMT+8)",
    flag: "🇲🇾",
  },
  {
    name: "Nigeria Office",
    id: "NGA",
    coordinates: [8.6753, 9.082],
    hours: "3:00 AM - 11:00 AM",
    timezone: "(GMT+1)",
    flag: "🇳🇬",
  },
  {
    name: "Singapore Office",
    id: "SGP",
    coordinates: [103.8198, 1.3521],
    hours: "10:00 AM - 6:00 PM",
    timezone: "(GMT+8)",
    flag: "🇸🇬",
  },
  {
    name: "China Office",
    id: "CHN",
    coordinates: [116.4074, 39.9042],
    hours: "10:00 AM - 6:00 PM",
    timezone: "(GMT+8)",
    flag: "🇨🇳",
  },
  {
    name: "Germany Office",
    id: "DEU",
    coordinates: [10.4515, 51.1657],
    hours: "3:00 AM - 11:00 AM",
    timezone: "(GMT+1)",
    flag: "🇩🇪",
  },
  {
    name: "Turkey Office",
    id: "TR",
    coordinates: [35.2433, 38.9637],
    hours: "5:00 AM - 1:00 PM",
    timezone: "(GMT+3)",
    flag: "🇹🇷",
  },
  {
    name: "Cambodia Office",
    id: "KHM",
    coordinates: [104.9915, 12.5655],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+7)",
    flag: "🇰🇭",
  },
  {
    name: "Vietnam Office",
    id: "VIE",
    coordinates: [105.8542, 21.0285],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+7)",
    flag: "🇻🇳",
  },
  {
    name: "Laos Office",
    id: "LAO",
    coordinates: [102.4955, 19.8563],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+7)",
    flag: "🇱🇦",
  },
  {
    name: "India Office",
    id: "IND",
    coordinates: [78.9629, 20.5937],
    hours: "6:30 AM - 2:30 PM",
    timezone: "(GMT+5:30)",
    flag: "🇮🇳",
  },
  {
    name: "Finland Office",
    id: "FIN",
    coordinates: [28.45, 68.36],
    hours: "4:00 AM - 12:00 PM",
    timezone: "(GMT+2)",
    flag: "🇫🇮",
  },
  {
    name: "Philippines Office",
    id: "PHL",
    coordinates: [121.774, 12.8797],
    hours: "10:00 AM - 6:00 PM",
    timezone: "(GMT+8)",
    flag: "🇵🇭",
  },
];

function OfficeHour() {
  const [selectedOffice, setSelectedOffice] = useState(null);

  return (
    <div>
      <div className="containers">
        <div className="flex gap-40">
          <p className="header-text font-bold">Office Hours</p>
          <p className="body-text">
            Founded in 2025, MEG was established to revolutionize medical and
            healthcare <br /> education by bridging the gap between ambition and
            achievement and <br /> excellence. Through our Medicine philosophy,
            we cultivate academic brilliance, <br /> ethical responsibility, and
            lifelong professional development.
          </p>
        </div>

        <div className="mt-20 flex gap-8">
          <div className="w-2/3">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 120,
                center: [0, 50],
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
                          console.log(geo);
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
          <div className="w-1/3 p-4 flex items-center justify-center">
            {selectedOffice ? (
              <div className="p-4">
                <div className="font-bold flex flex-col items-center gap-2 mb-3 text-[24px]">
                  <span className="">{selectedOffice.flag}</span>
                  <h3 className="">{selectedOffice.name}</h3>
                  <p className="">{selectedOffice.hours}</p>
                  <p className="">{selectedOffice.timezone}</p>

                  <a
                    href={`tel:${selectedOffice?.phone}`}
                    className="flex items-center button mt-4"
                  >
                    <MdOutlinePhone className="mr-2" size={20} />
                    <span>{selectedOffice?.phone}</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-gray-500">
                Click on a marker to view office hours
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeHour;
