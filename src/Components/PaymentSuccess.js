import React from "react";
import NavBarTwo from "./NavBarTwo";
import PaymentSuccessBody from "./PaymentSuccessBody";

const PaymentSuccess = () => {
  return (
    <div
      class="container my-2"
      style={{ backgroundColor: "#EBF5F5", width: "65rem", height: "39rem" }}
    >
      <NavBarTwo />
      <PaymentSuccessBody />
    </div>
  );
};

export default PaymentSuccess;
