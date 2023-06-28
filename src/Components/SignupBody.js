import React from "react";
import { FaFacebookF } from "react-icons/fa";
const SignupBody = () => {
  return (
    <div class=" container mt-5 mx-5">
      <p
        style={{
          backgroundColor: "#55AEAD",
          color: "white",
          width: "33rem",
          marginLeft: "11rem",
          borderRadius: "10px 10px 0 0",
          textAlign: "center",
        }}
      >
        Sign Up
      </p>
      <div
        class="form"
        style={{
          width: "33rem",
          height: "43rem",
          backgroundColor: "white",
          margin: "-1rem 0 0 11rem",
          borderRadius: "0 0 9px 9px",
        }}
      >
        <button
          className="btn btn-borderless"
          style={{
            backgroundColor: "#55AEAD",
            color: "white",
            width: "17rem",
            height: "2rem",
            margin: " 1.8rem 0 0 7rem",
          }}
        >
          <FaFacebookF style={{ width: "1rem", height: "1.1rem" }} />{" "}
          <span class="px-4">Continue with Facebook</span>
        </button>
        <hr class="mt-5" style={{ width: "15.5rem", color: "darkgray" }} />
        <p
          style={{
            border: "1px solid darkgray",
            margin: "-2rem 0 0 15.5rem",
            borderRadius: "50%",
            color: "darkgray",
            padding: " 0.2rem 0.5rem",
            width: "2rem",
          }}
        >
          or
        </p>
        <hr
          class=""
          style={{
            width: "15.5rem",
            margin: "-1rem 0 0 17.5rem",
            color: "darkgray",
          }}
        />
        <label class="mt-5 mx-5" for="your name">
          Your Name
        </label>
        <input
          type="text"
          placeholder="First Name and Last Name"
          style={{
            width: "18rem",
            height: "1.7rem",
            fontSize: "0.8rem",
            margin: "0 0 0 1.7rem",
          }}
        />
        <br />
        <label class="mt-4 mx-5" for="number">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="Mobile Number"
          style={{ width: "18rem", height: "1.7rem", fontSize: "0.8rem" }}
        />
        <br />
        <label class="mt-4 mx-5">Email Address</label>
        <input
          type="text"
          placeholder="example@domain.com"
          style={{
            width: "18rem",
            height: "1.7rem",
            fontSize: "0.8rem",
            margin: "0 0 0 0.5rem",
          }}
        />
        <label class="mt-4 mx-5" for="gender">
          Gender
        </label>
        <span>
          <input type="radio" style={{ margin: "0 0 0 4rem" }} />
          <label style={{ margin: "0 0 0 0.5rem", fontSize: "0.9rem" }}>
            Female
          </label>
        </span>
        <span>
          <input type="radio" style={{ margin: "0 0 0 1rem" }} />
          <label style={{ margin: "0 0 0 0.5rem", fontSize: "0.9rem" }}>
            Male
          </label>
        </span>
        <br />
        <label class="mt-4 mx-5" for="birth date">
          Birth Date
        </label>
        <input
          type="DOB"
          style={{
            width: "18rem",
            height: "1.7rem",
            fontSize: "0.8rem",
            margin: "0 0 0 2.5rem",
          }}
        />
        <br />
        <label class="mt-4 mx-5" for="password">
          Password
        </label>
        <input
          type="password"
          style={{
            width: "18rem",
            height: "1.7rem",
            fontSize: "0.8rem",
            margin: "0 0 0 2.8rem",
          }}
        />
        <p class="mt-4" style={{ margin: "0 0 0 12rem", fontSize: "0.79rem" }}>
          By signing up you agree to our{" "}
          <a href="/" style={{ color: "#55AEAD" }}>
            Terms of use
          </a>
        </p>

        <button
          type="button"
          class="btn mt-3 text-light"
          style={{
            backgroundColor: "#55AEAD",
            width: "6rem",
            height: "2.3rem",
            margin: "1.5rem 0 0 15rem",
          }}
        >
          <a
            href="/SignUpSuccessPage"
            class="text-decoration-none text-light"
            style={{ fontSize: "0.8rem", margin: "-1rem 0 0 0" }}
          >
            Join Now
          </a>
        </button>
        <hr
          style={{
            width: "26rem",
            color: "darkgray",
            margin: "1.5rem 0 0 3rem",
          }}
        />
        <p style={{ fontSize: "0.9rem", margin: "1rem 0 0 10rem" }}>
          Already Registered in DocAhoy?{" "}
          <a
            href="/LoginPage"
            style={{
              color: "#55AEAD",
              textDecoration: "none",
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupBody;
