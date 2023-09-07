import React from "react";
import NavBarTwo from "./NavBarTwo";
import BookingSuccessAlert from "./BookingSuccessAlert";
import BookingSuccessBody from "./BookingSuccessBody";

const BookingSuccessIB1 = () => {
  return (
    <div
      class="container"
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "61rem",
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
