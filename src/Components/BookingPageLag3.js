import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPLagThreeBody from "./BPLagThreeBody";
import Footer from "./Footer";

const BookingPageLag3 = () => {
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
      <BPLagThreeBody />
      <Footer />
    </div>
  );
};

export default BookingPageLag3;
