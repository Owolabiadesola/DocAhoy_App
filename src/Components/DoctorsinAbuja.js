import React from "react";
import NavBarTwo from "./NavBarTwo";
import DDADivOne from "./DDADivOne";
import DDADivTwo from "./DDADivTwo";
import DDADivThree from "./DDADivThree";
import Footer from "./Footer";

const DoctorsinAbuja = () => {
  return (
    <div
      class="container my-3"
      style={{ backgroundColor: "#EBF5F5", width: "78%", height: "106rem" }}
    >
      <NavBarTwo />
      <DDADivOne />
      <DDADivTwo />
      <DDADivThree />
      <Footer />
    </div>
  );
};

export default DoctorsinAbuja;
