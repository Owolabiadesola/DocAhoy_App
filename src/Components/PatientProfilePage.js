import React from "react";
import NavBarTwo from "./NavBarTwo";
import PatientProfileBody from "./PatientProfileBody";

const PatientProfilePage = () => {
  return (
    <div
      class="container my-2"
      style={{ backgroundColor: "#EBF5F5", width: "78%", height: "40rem" }}
    >
      <NavBarTwo />
      <PatientProfileBody />
    </div>
  );
};

export default PatientProfilePage;
