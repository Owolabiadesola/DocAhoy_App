import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPIBOneBody from "./BPIBOneBody";
import Footer from "./Footer";

const BookingPageIB1 = () => {
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
      <BPIBOneBody />
      <Footer />
    </div>
  );
};

export default BookingPageIB1;
