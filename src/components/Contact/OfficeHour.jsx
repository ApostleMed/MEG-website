import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const offices = [
  {
    name: "Thailand Office",
    coordinates: [100.5018, 13.7563],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+7)",
    flag: "🇹🇭",
  },
  {
    name: "UK Office",
    coordinates: [-0.1276, 51.5074],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+0)",
    flag: "🇬🇧",
  },
  {
    name: "Australia Office",
    coordinates: [151.2093, -33.8688],
    hours: "9:00 AM - 5:00 PM",
    timezone: "(GMT+11)",
    flag: "🇦🇺",
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
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#CCCCCC"
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
                  ))
                }
              </Geographies>
              {offices.map((office) => (
                <Marker
                  key={office.name}
                  coordinates={office.coordinates}
                  onClick={() => setSelectedOffice(office)}
                >
                  <circle
                    r={10}
                    fill="#F4B41A"
                    stroke="red"
                    strokeWidth={1}
                    style={{ cursor: "pointer" }}
                  />
                </Marker>
              ))}
            </ComposableMap>
          </div>
          <div className="w-1/3 p-4">
            {selectedOffice ? (
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{selectedOffice.flag}</span>
                  <h3 className="text-xl font-semibold">
                    {selectedOffice.name}
                  </h3>
                </div>
                <p className="text-gray-700">Hours: {selectedOffice.hours}</p>
                <p className="text-gray-600">{selectedOffice.timezone}</p>
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
