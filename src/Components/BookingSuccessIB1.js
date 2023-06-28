import React from "react";
import NavBarTwo from "./NavBarTwo";
import BookingSuccessAlert from "./BookingSuccessAlert";
import BookingSuccessBody from "./BookingSuccessBody";

const BookingSuccessIB1 = () => {
  return (
    <div
      class="container my-3"
      style={{
        backgroundColor: "white",
        width: "78%",
        height: "57rem",
        border: "1px darkgray solid",
      }}
    >
      <NavBarTwo />
      <BookingSuccessAlert />
      <BookingSuccessBody />
    </div>
  );
};

export default BookingSuccessIB1;
