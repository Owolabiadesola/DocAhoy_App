import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPLagThreeBody from "./BPLagThreeBody";
import Footer from "./Footer";

const BookingPageLag3 = () => {
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
      <BPLagThreeBody />
      <Footer />
    </div>
  );
};

export default BookingPageLag3;
