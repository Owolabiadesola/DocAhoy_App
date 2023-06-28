import React from "react";
import NavBarTwo from "./NavBarTwo";
import BPAbjThreeBody from "./BPAbjThreeBody";
import Footer from "./Footer";

const BokingPageAbj3 = () => {
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
      <BPAbjThreeBody />
      <Footer />
    </div>
  );
};

export default BokingPageAbj3;
