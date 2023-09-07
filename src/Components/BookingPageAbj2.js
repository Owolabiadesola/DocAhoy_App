import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPAbjTwoBody from "./BPAbjTwoBody";
import Footer from "./Footer";

const BookingPageAbj2 = () => {
  return (
    <div
      class="container my-3"
      style={{
        backgroundColor: "white",
        width: "100%",
        maxHeight: "90rem",
        border: "1px darkgray solid",
      }}
    >
      <NavBarTwo />
      <BPAbjTwoBody />
      <Footer />
    </div>
  );
};

export default BookingPageAbj2;
