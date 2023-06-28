import React from "react";
import NavBarTwo from "./NavBarTwo";
import DDIDivOne from "./DDIDivOne";
import DDIDivTwo from "./DDIDivTwo";
import DDIDivThree from "./DDIDivThree";
import Footer from "./Footer";

const DoctorsinIbadan = () => {
  return (
    <div
      class="container my-3"
      style={{ backgroundColor: "#EBF5F5", width: "78%", height: "106rem" }}
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
