import React from "react";
import NavBarTwo from "./NavBarTwo";
import PatientProfileBody from "./PatientProfileBody";

const PatientProfilePage = () => {
  return (
    <div
      class="container"
      style={{
        backgroundColor: "#EBF5F5",
        Width: "100%",
        maxHeight: "45rem",
      }}
    >
      <NavBarTwo />
      <PatientProfileBody />
    </div>
  );
};

export default PatientProfilePage;
