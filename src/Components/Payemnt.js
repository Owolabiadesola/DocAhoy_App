import React from "react";
import NavBarTwo from "./NavBarTwo";
import PaymentBody from "./PaymentBody";

const Payemnt = () => {
  return (
    <div
      class="container mx-5 my-3"
      style={{ border: "1px whitesmoke solid", height: "39rem" }}
    >
      <NavBarTwo />
      <PaymentBody />
    </div>
  );
};

export default Payemnt;
