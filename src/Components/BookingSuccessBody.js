import React from "react";

const BookingSuccessBody = () => {
  return (
    <div
      style={{
        width: "37rem",
        height: "37rem",
        border: "1px solid darkgray",
        margin: "2rem 0 0 6rem",
        borderRadius: "5px",
      }}
    >
      <hr />
      <p class="mx-5">
        {" "}
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
        <hr style={{ width: "37rem", marginLeft: "-2rem" }} />
        <hr style={{ width: "37rem", marginLeft: "-2rem" }} />
        <li>
          Booking Date{" "}
          <span style={{ marginLeft: "3rem" }}>
            <b>Tomorrow May !8-11:00AM,Appointment Reservation</b>
          </span>
        </li>
        <hr style={{ width: "37rem", marginLeft: "-2rem" }} />
        <hr style={{ width: "37rem", marginLeft: "-2rem" }} />
        <li>
          Doctor's Name{" "}
          <span style={{ marginLeft: "3rem" }}>Dr. Badmus Lawal</span>
        </li>
        <hr style={{ width: "37rem", marginLeft: "-2rem" }} />
        <hr style={{ width: "37rem", marginLeft: "-2rem" }} />
        <li>
          Waiting Time <span style={{ marginLeft: "4rem" }}>Not Available</span>
        </li>
        <hr style={{ width: "37rem", marginLeft: "-2rem" }} />
        <hr style={{ width: "37rem", marginLeft: "-2rem" }} />
        <li>
          Clinic Address{" "}
          <span style={{ marginLeft: "3rem" }}>
            Lagos Island: Breadfruit street, Marina
          </span>
        </li>
        <hr style={{ width: "37rem", marginLeft: "-2rem" }} />
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
      <img
        src="./Images/blackfemaledoc.png"
        alt="img"
        style={{
          width: "33rem",
          height: "39rem",
          margin: "-40rem 0 0 25.4rem",
        }}
      />
    </div>
  );
};

export default BookingSuccessBody;
