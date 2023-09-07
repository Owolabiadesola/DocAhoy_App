import React from "react";
import NavBarTwo from "./NavBarTwo";
import DDADivOne from "./DDADivOne";
import DDADivTwo from "./DDADivTwo";
import DDADivThree from "./DDADivThree";
import Footer from "./Footer";

const DoctorsinAbuja = () => {
  return (
    <div
      class="container "
      style={{
        backgroundColor: "#EBF5F5",
        width: "100%",
        maxHeight: "108rem",
        minHeight: "90rem",
      }}
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
