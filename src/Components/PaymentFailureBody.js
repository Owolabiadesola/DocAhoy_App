import React from "react";
import { ImCross } from "react-icons/im";

const PaymentFailureBody = () => {
  return (
    <div>
      <ImCross
        style={{
          backgroundColor: "white",
          color: "#cc3636",
          width: "8rem",
          height: "8rem",
          padding: "3rem",
          borderRadius: "50%",
          margin: "8rem 0 0 25rem",
        }}
      />
      <h4 style={{ margin: "1rem 0 0 24rem" }}>Oppppppppps!</h4>
      <p style={{ margin: "1rem 0 0 24rem" }}>Something Went Wrong</p>
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
        <a href="/Payemnt" style={{ textDecoration: "none", color: "white" }}>
          Try Again
        </a>
      </button>
    </div>
  );
};

export default PaymentFailureBody;
