import React from "react";
import { AiFillStar } from "react-icons/ai";

const BPIBOneBody = () => {
  return (
    <div>
      <section
        class="mx-5 mt-3"
        style={{
          width: "30rem",
          height: "16rem",
          backgroundColor: "#EBF5F5",
          border: "1px solid #D9D9D9",
          borderRadius: "5px",
        }}
      >
        <img
          src="./Images/Frame 36.png"
          alt="div1img"
          style={{ margin: "1rem 0 0 1rem" }}
        />
        <div style={{ margin: "-10rem 0 0 14rem" }}>
          <h5>Dr. Badmus Lawal</h5>
          <h6>General Physician</h6>
          <ul style={{ color: "#55AEAD", marginLeft: "-2rem" }}>
            {/* Star icons */}
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
          </ul>
          <p
            style={{
              fontSize: "10px",
              marginLeft: "6rem",
              marginTop: "-2rem",
            }}
          >
            (Overall Rating From 5 Visitors)
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            General practitioner speciallized in paediatric general <br />
            practice and Adult General Practice
          </p>
        </div>
        <button
          style={{
            backgroundColor: "#ABD7D6",
            border: "1px solid #ABD7D6",
            height: "2.5rem",
            margin: "0 0 0 1rem",
          }}
        >
          Tomorrow May 18 -11:00 AM, <b>Appointment Reservation</b>
        </button>
      </section>
      <div
        style={{
          margin: "-16rem 0 0 35rem",
          width: "27rem",
          height: "35rem",
          border: "1px black solid",
          borderRadius: "5px",
        }}
      >
        <p
          style={{
            backgroundColor: "#1F605F",
            width: "27rem",
            textAlign: "center",
            borderRadius: "5px 5px 0 0",
          }}
        >
          <b> Service Booking</b>
        </p>
        <p style={{ fontSize: "0.8rem", textAlign: "center" }}>
          Please complete the following form to create your booking
        </p>
        <input
          placeholder="Patient Name"
          class="mx-4 mt-3"
          style={{ width: "23rem", height: "2.5rem" }}
        />
        <input
          placeholder="Mobile Number"
          class="mx-4 mt-4"
          style={{ width: "23rem", height: "2.5rem" }}
        />
        <input
          placeholder="Email Address (Optional)"
          class="mx-4 mt-4"
          style={{ width: "23rem", height: "2.5rem" }}
        />
        <h6 class="mt-5 mx-4">Amount</h6>
        <input
          placeholder="Examination Fee                                            15,000"
          class="mx-4 mt-4"
          style={{ width: "23rem", height: "2.5rem" }}
        />
        <input
          placeholder="Total                                                               15,000"
          class="mx-4 mt-4"
          style={{ width: "23rem", height: "2.5rem" }}
        />
        <span>
          <button
            style={{
              backgroundColor: "#1F605F",
              width: "7rem",
              height: "2rem",
              margin: "3rem 0 0 5rem",
              border: "none",
              borderRadius: "3px",
            }}
          >
            <a
              href="/BookingSuccessIB1"
              style={{ color: "white", textDecoration: "none" }}
            >
              Book
            </a>
          </button>
        </span>
        <span>
          <button
            style={{
              width: "7rem",
              height: "2rem",
              backgroundColor: "#CC3636",
              margin: "3rem 0 0 1rem",
              border: "none",
              borderRadius: "3px",
            }}
          >
            <a
              href="/DoctorsinIbadan"
              style={{ color: "white", textDecoration: "none" }}
            >
              Cancel
            </a>
          </button>
        </span>
      </div>
    </div>
  );
};

export default BPIBOneBody;
