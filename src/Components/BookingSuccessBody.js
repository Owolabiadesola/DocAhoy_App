import React from "react";

const BookingSuccessBody = () => {
  return (
    <div
      style={{
        maxWidth: "37rem",
        height: "40rem",
        border: "1px solid darkgray",
        margin: "auto",
        borderRadius: "5px",
      }}
    >
      <hr />
      <p class="mx-5" style={{ fontWeight: "500" }}>
        We notified Dr. Badmus Lawal of your booking, <br />
        Examination Fees: 15,000 NGN <br />
        Clinic Number: 07033316157
      </p>
      <hr />
      <h5 style={{ textAlign: "center" }}>
        <b>Booking Details</b>
      </h5>
      <hr />
      <ul style={{ listStyle: "none" }}>
        <li>
          Patient's Name{" "}
          <span style={{ marginLeft: "3rem" }}>Faith Tope Oluwatobi</span>
        </li>
        <hr style={{ maxWidth: "37rem", marginLeft: "-2rem" }} />
        <hr style={{ maxWidth: "37rem", marginLeft: "-2rem" }} />
        <li>
          Booking Date{" "}
          <span style={{ marginLeft: "3rem" }}>
            <b>Tomorrow May 8am-11:00AM,Appointment Reservation</b>
          </span>
        </li>
        <hr style={{ maxWidth: "37rem", marginLeft: "-2rem" }} />
        <hr style={{ maxWidth: "37rem", marginLeft: "-2rem" }} />
        <li>
          Doctor's Name{" "}
          <span style={{ marginLeft: "3rem" }}>Dr. Badmus Lawal</span>
        </li>
        <hr style={{ maxWidth: "37rem", marginLeft: "-2rem" }} />
        <hr style={{ maxWidth: "37rem", marginLeft: "-2rem" }} />
        <li>
          Waiting Time <span style={{ marginLeft: "4rem" }}>Not Available</span>
        </li>
        <hr style={{ maxWidth: "37rem", marginLeft: "-2rem" }} />
        <hr style={{ maxWidth: "37rem", marginLeft: "-2rem" }} />
        <li>
          Clinic Address{" "}
          <span style={{ marginLeft: "3rem" }}>
            Lagos Island: Breadfruit street, Marina
          </span>
        </li>
        <hr style={{ maxWidth: "37rem", marginLeft: "-2rem" }} />
      </ul>
      <button
        style={{
          width: "8rem",
          height: "2rem",
          backgroundColor: "#1F605F",
          border: "none",
          borderRadius: "5px",
          margin: "0 0 0 13rem",
        }}
      >
        <a href="/Payemnt" class="text-light text-decoration-none" style={{}}>
          Payment
        </a>
      </button>
    </div>
  );
};

export default BookingSuccessBody;
