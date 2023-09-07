import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPLagOneBody from "./BPLagOneBody";
import Footer from "./Footer";

const BookingPageLag1 = () => {
  return (
    <div
      class="container"
      style={{
        backgroundColor: "white",
        width: "100%",
        maxHeight: "87rem",
        border: "1px darkgray solid",
      }}
    >
      <NavBarTwo />
      <BPLagOneBody />
      <Footer />
    </div>
  );
};

export default BookingPageLag1;
