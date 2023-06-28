import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPIBTwoBody from "./BPIBTwoBody";
import Footer from "./Footer";

const BookingPageIB2 = () => {
  return (
    <div
      class="container my-3"
      style={{
        backgroundColor: "white",
        width: "78%",
        height: "77rem",
        border: "1px darkgray solid",
      }}
    >
      <NavBarTwo />
      <BPIBTwoBody />
      <Footer />
    </div>
  );
};

export default BookingPageIB2;
