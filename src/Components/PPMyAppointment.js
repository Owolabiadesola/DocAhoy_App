import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const PPMyAppointment = () => {
  return (
    <div
      class="container my-2"
      style={{ backgroundColor: "#EBF5F5", width: "70%", height: "39rem" }}
    >
      <div
        style={{
          backgroundColor: "grey",
          width: "50rem",
          height: "1.7rem",
          position: "absolute",
          margin: "3rem 0 0 3rem",
        }}
      >
        <a href="/PatientProfilePage" style={{ color: "black" }}>
          {" "}
          <FaLongArrowAltLeft
            class="mx-3"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </a>
        <b>
          <p style={{ margin: "-1.5rem 0 0 15rem" }}>My Appointment</p>
        </b>
      </div>
      <img
        src="/Images/Frame 143.png"
        alt="img"
        style={{ width: "52rem", height: "32rem", margin: "7rem 0 0 3rem" }}
      />
      <div></div>
    </div>
  );
};

export default PPMyAppointment;
