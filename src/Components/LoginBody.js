import React from "react";
import { FaFacebookF } from "react-icons/fa";

const LoginBody = () => {
  return (
    <div class=" container mt-5 mx-5">
      <p
        style={{
          backgroundColor: "#55AEAD",
          width: "25.5rem",
          marginLeft: "13rem",
          borderRadius: "10px 10px 0 0",
          textAlign: "center",
          borderTop: "1px solid black",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
        }}
      >
        Login
      </p>
      <div
        class="form"
        style={{
          width: "25.5rem",
          height: "31rem",
          backgroundColor: "white",
          margin: "-1rem 0 0 13rem",
          borderRadius: "0 0 9px 9px",
          borderBottom: "1px solid black",
          borderRight: "1px solid black",
          borderLeft: "1px solid black",
        }}
      >
        <label
          class="mt-4"
          for="mobile or email"
          style={{ marginLeft: "2rem" }}
        >
          Mobile or Email{" "}
          <span style={{ color: "red", fontSize: "1.2rem" }}>*</span>
        </label>
        <br />
        <input type="text" style={{ width: "22rem", marginLeft: "2rem" }} />
        <br />
        <label style={{ margin: "3rem 0 0 2rem" }} for="password">
          Password
        </label>
        <span style={{ color: "red", fontSize: "1.2rem" }}> *</span>
        <br />
        <input type="password" style={{ width: "22rem", marginLeft: "2rem" }} />
        <button
          type="button"
          class="btn mt-3 text-light"
          style={{
            backgroundColor: "#CC3636",
            width: "22rem",
            marginLeft: "2rem",
          }}
        >
          <a
            href="/LoginSuccessPage"
            class="text-decoration-none text-light"
            style={{ fontSize: "0.8rem" }}
          >
            Login
          </a>
        </button>
        <br />
        <input
          class="form-check-input"
          type="checkbox"
          style={{ margin: "0.3rem 0 0 2rem" }}
        />{" "}
        <span
          style={{
            margin: "0.5rem 0 0 0",
            fontSize: "0.9rem",
            color: "darkgray",
          }}
        >
          Remember me
        </span>
        <span>
          <a href="/" style={{ color: "#1F605FD9", marginLeft: "5rem" }}>
            Forgot ypou password
          </a>
        </span>
      </div>
      <hr style={{ width: "12rem", margin: "-10rem 0 0 13rem" }} />
      <p
        style={{
          border: "1px solid darkgray",
          margin: "-1rem 0 0 25rem",
          borderRadius: "50%",
          color: "darkgray",
          padding: " 0.2rem 0.5rem",
          width: "2rem",
        }}
      >
        or
      </p>
      <hr
        style={{
          width: "11.5rem",
          margin: "-1rem 0 0 27rem",
        }}
      />
      <button
        className="btn btn-borderless"
        style={{
          backgroundColor: "#55AEAD",
          color: "white",
          width: "17rem",
          height: "2rem",
          margin: " 2rem 0 0 17rem",
        }}
      >
        <FaFacebookF style={{ width: "1rem", height: "1.1rem" }} />{" "}
        <span class="px-4">Continue with Facebook</span>
      </button>
      <p style={{ margin: " 2rem 0 0 19rem", color: "#1F605F" }}>
        New User ?{" "}
        <a href="/SignupPage" style={{ marginLeft: "4rem", color: "#1F605F" }}>
          {" "}
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginBody;
