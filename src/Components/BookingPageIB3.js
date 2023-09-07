import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPIBThreeBody from "./BPIBThreeBody";
import Footer from "./Footer";

const BookingPageIB3 = () => {
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
      <BPIBThreeBody />
      <Footer />
    </div>
  );
};

export default BookingPageIB3;
