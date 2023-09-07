import React from "react";
import NavBarTwo from "./NavBarTwo";
import DDLDivOne from "./DDLDivOne";
import DDLDivTwo from "./DDLDivTwo";
import DDLDivThree from "./DDLDivThree";
import Footer from "./Footer";

const DoctorsinLagos = () => {
  return (
    <div
      class="container "
      style={{
        backgroundColor: "whitesmoke",
        width: "100%",
        maxHeight: "108rem",
        minHeight: "93rem",
      }}
    >
      <NavBarTwo />
      <DDLDivOne />
      <DDLDivTwo />
      <DDLDivThree />
      <Footer />
    </div>
  );
};

export default DoctorsinLagos;
