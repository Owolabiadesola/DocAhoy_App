import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPLagTwoBody from "./BPLagTwoBody";
import Footer from "./Footer";

const BookingPageLag2 = () => {
  return (
    <div
      class="container my-3"
      style={{
        backgroundColor: "white",
        width: "78%",
        height: "76rem",
        border: "1px darkgray solid",
      }}
    >
      <NavBarTwo />
      <BPLagTwoBody />
      <Footer />
    </div>
  );
};

export default BookingPageLag2;
