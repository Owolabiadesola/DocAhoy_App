import React from "react";
import NavBarTwo from "./NavBarTwo";
import DDIDivOne from "./DDIDivOne";
import DDIDivTwo from "./DDIDivTwo";
import DDIDivThree from "./DDIDivThree";
import Footer from "./Footer";

const DoctorsinIbadan = () => {
  return (
    <div
      class="container"
      style={{
        backgroundColor: "#EBF5F5",
        width: "100%",
        maxHeight: "108rem",
        minHeight: "90rem",
      }}
    >
      <NavBarTwo />
      <DDIDivOne />
      <DDIDivTwo />
      <DDIDivThree />
      <Footer />
    </div>
  );
};

export default DoctorsinIbadan;
