import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPAbjOneBody from "./BPAbjOneBody";
import Footer from "./Footer";

const BookingPageAbj1 = () => {
  return (
    <div
      class="container"
      style={{
        backgroundColor: "white",
        width: "100%",
        maxHeight: "90rem",
        border: "1px darkgray solid",
      }}
    >
      <NavBarTwo />
      <BPAbjOneBody />
      <Footer />
    </div>
  );
};

export default BookingPageAbj1;
