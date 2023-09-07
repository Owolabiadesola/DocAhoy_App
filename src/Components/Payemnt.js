import React from "react";
import NavBarTwo from "./NavBarTwo";
import PaymentBody from "./PaymentBody";

const Payemnt = () => {
  return (
    <div
      class="container"
      style={{ border: "2px whitesmoke solid", height: "57rem", width: "100%" }}
    >
      <NavBarTwo />
      <PaymentBody />
    </div>
  );
};

export default Payemnt;
