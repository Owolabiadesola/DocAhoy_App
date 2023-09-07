import React from "react";
import NavBarTwo from "./NavBarTwo";
import PaymentFailureBody from "./PaymentFailureBody";

const PaymentFailure = () => {
  return (
    <div
      class="container"
      style={{ backgroundColor: "#EBF5F5", width: "100%", height: "39rem" }}
    >
      <NavBarTwo />
      <PaymentFailureBody />
    </div>
  );
};

export default PaymentFailure;
