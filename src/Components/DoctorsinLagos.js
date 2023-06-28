import React from "react";
import NavBarTwo from "./NavBarTwo";
import DDLDivOne from "./DDLDivOne";
import DDLDivTwo from "./DDLDivTwo";
import DDLDivThree from "./DDLDivThree";
import Footer from "./Footer";

const DoctorsinLagos = () => {
  return (
    <div
      class="container my-3"
      style={{ backgroundColor: "whitesmoke", width: "78%", height: "106rem" }}
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
