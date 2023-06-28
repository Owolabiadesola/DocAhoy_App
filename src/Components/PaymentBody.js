import React from "react";
import { CiWarning } from "react-icons/ci";
import { MdRadioButtonChecked } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
const PaymentBody = () => {
  return (
    <div
      class="my-4 "
      style={{
        width: "40rem",
        height: "28rem",
        border: "1px whitesmoke solid",
        margin: "1rem 0 0 14rem",
        borderRadius: "10px",
      }}
    >
      <section
        style={{
          backgroundColor: "rgb(136, 219, 219)",
          borderRadius: "11px 11px 0 0 ",
          height: "3rem",
        }}
      >
        <MdRadioButtonChecked
          style={{
            width: "1.9rem",
            height: "1.9rem",
            color: "#1f605f",
            margin: "0.5rem 0 0 1rem",
          }}
        />
        <span>
          <h6 style={{ margin: "-2rem 0 0 4rem" }}>Credit & Debit Cards</h6>
          <p style={{ margin: "0 0 0 4rem", fontSize: "0.8rem" }}>
            Transaction fee may apply
          </p>
        </span>
        <span>
          <img
            src="/Images/mastercard.png"
            alt="img"
            style={{
              width: "2.5rem",
              height: "2rem",
              margin: "-4rem  0 0 23rem",
            }}
          />
        </span>
        <span>
          <img
            src="/Images/visa.png"
            alt="img"
            style={{
              width: "2.5rem",
              height: "1rem",
              margin: "-3.5rem  0 0 2rem",
            }}
          />
        </span>
        <span>
          <img
            src="/Images/verve1.png"
            alt="img"
            style={{
              width: "5rem",
              height: "1.5rem",
              margin: "-3.5rem  0 0 2rem",
            }}
          />
        </span>
      </section>
      <h6 class="mt-4 mx-4">Cardholder Name</h6>
      <input class="mt-3 mx-4" type="text" style={{ width: "37rem" }} />
      <h6 class="mt-4 mx-4">Card Number</h6>
      <input class="mt-3 mx-4" type="text" style={{ width: "37rem" }} />
      <img
        src="/Images/mastercard.png"
        alt="img"
        style={{
          width: "1.2rem",
          height: "1rem",
          margin: "0rem  0 0 -4rem",
        }}
      />
      <h6 style={{ margin: "-1.5rem  0 0 2rem" }}>5992</h6>
      <h6 class="mt-4 mx-4">Card Details</h6>
      <span>
        <input
          class="mt-2 mx-4"
          placeholder="Mm"
          style={{ width: "7rem", textAlign: "center" }}
        />
      </span>
      <span>
        <input
          placeholder="Yyyy"
          style={{ width: "7rem", textAlign: "center" }}
        />
      </span>
      <h6 style={{ margin: "-3.6rem 0 0 19rem" }}>CVV</h6>
      <input style={{ width: "7rem", margin: "0.5rem 0 0 19rem" }} />{" "}
      <CiWarning /> 3 Digits <br />
      <input
        class="form-check-input"
        type="checkbox"
        style={{ margin: "2rem 0 0 1.5rem" }}
      />
      <p style={{ fontSize: "0.8rem", margin: "-1.2rem 0 0 3rem" }}>
        I have Read and Accepeted the{" "}
        <a href="/" style={{ color: "rgb(136, 219, 219)" }}>
          {" "}
          Terms of Use,
        </a>{" "}
        <a href="/" style={{ color: "rgb(136, 219, 219)" }}>
          Rules of Flight
        </a>{" "}
        and{" "}
        <a href="/" style={{ color: "rgb(136, 219, 219)" }}>
          Privacy Policy
        </a>
      </p>
      <button
        class="mt-4 mx-4"
        style={{
          width: "35rem",
          backgroundColor: "#1f605f",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {" "}
        <a href="/PaymentSuccess" class="btn text-decoration-none text-light ">
          {" "}
          Confirm Payment{" "}
        </a>
      </button>
      <input
        style={{
          height: "2.8rem",
          width: "35rem",
          margin: "1rem 0 0 1.5rem",
        }}
      />
      <BsFillCircleFill
        style={{
          width: "1.9rem",
          height: "1.9rem",
          color: "whitesmoke",
          margin: "-4rem 0 0 2.5rem",
        }}
      />
      <span>
        <h6 style={{ margin: "-4rem 0 0 7rem" }}>Cash Payment</h6>
        <p style={{ margin: "0 0 0 7rem", fontSize: "0.8rem" }}>
          No additional cost
        </p>
      </span>
    </div>
  );
};

export default PaymentBody;
