import React from "react";
import NavBarTwo from "./NavBarTwo";
import PaymentFailureBody from "./PaymentFailureBody";

const PaymentFailure = () => {
  return (
    <div
      class="container my-2"
      style={{ backgroundColor: "#EBF5F5", width: "65rem", height: "39rem" }}
    >
      <NavBarTwo />
      <PaymentFailureBody />
    </div>
  );
};

export default PaymentFailure;
