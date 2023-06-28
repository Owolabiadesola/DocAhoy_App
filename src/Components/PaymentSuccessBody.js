import React from "react";
import { ImCheckmark } from "react-icons/im";

const PaymentSuccessBody = () => {
  return (
    <div>
      <ImCheckmark
        style={{
          backgroundColor: "white",
          color: "#1f605f",
          width: "8rem",
          height: "8rem",
          padding: "3rem",
          borderRadius: "50%",
          margin: "8rem 0 0 25rem",
        }}
      />
      <h4 style={{ margin: "1rem 0 0 22rem" }}>Payment Successful</h4>
      <p style={{ margin: "1rem 0 0 15rem" }}>
        Thank you for choosing DocAhoy! Check Email for payment Receipt
      </p>
      <button
        style={{
          width: "20rem",
          height: "2.5rem",
          backgroundColor: "#1f605f",
          border: "none",
          borderRadius: "3px",
          margin: "2rem 0 0 19rem",
        }}
      >
        <a href="/HomePage" style={{ textDecoration: "none", color: "white" }}>
          Back Home
        </a>
      </button>
      <a href="/PaymentFailure">F</a>
    </div>
  );
};

export default PaymentSuccessBody;
