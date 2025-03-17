import React from "react";
import SchoolBanner from "../components/School/SchoolBanner";
import CTAsecton from "../components/Home/CTAsecton";
import SchoolList from "../components/School/SchoolList";

function SchoolPage() {
  return (
    <div>
      <SchoolBanner />
      <CTAsecton />
      <SchoolList />
    </div>
  );
}

export default SchoolPage;
