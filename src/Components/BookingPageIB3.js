import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPIBThreeBody from "./BPIBThreeBody";
import Footer from "./Footer";

const BookingPageIB3 = () => {
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
      <BPIBThreeBody />
      <Footer />
    </div>
  );
};

export default BookingPageIB3;
