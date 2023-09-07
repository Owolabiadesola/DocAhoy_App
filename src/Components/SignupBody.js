import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
const SignupBody = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <p
            style={{
              backgroundColor: "#55AEAD",
              color: "white",
              maxWidth: "33rem",
              margin: "auto",
              borderRadius: "10px 10px 0 0",
              textAlign: "center",
            }}
          >
            Sign Up
          </p>
          <div
            class="form"
            style={{
              maxWidth: "33rem",
              minHeight: "50rem",
              height: "30rem",
              backgroundColor: "white",
              margin: "auto",
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
            <hr
              class="mt-5"
              style={{ MaxWidth: "15.5rem", color: "darkgray", margin: "auto" }}
            />
            <p
              style={{
                border: "1px solid darkgray",
                margin: "auto",
                borderRadius: "50%",
                color: "darkgray",
                padding: " 0.2rem 0.5rem",
                width: "2rem",
              }}
            >
              or
            </p>

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
              <input type="checkbox" style={{ margin: "0 0 0 4rem" }} />
              <label style={{ margin: "0 0 0 0.5rem", fontSize: "0.9rem" }}>
                Female
              </label>
            </span>
            <span>
              <input type="checkbox" style={{ margin: "0 0 0 1rem" }} />
              <label style={{ margin: "0 0 0 0.5rem", fontSize: "0.9rem" }}>
                Male
              </label>
            </span>
            <br />
            <label class="mt-4 mx-5" for="birth date">
              Birth Date
            </label>
            <input
              type="date"
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
            <p
              class="mt-5"
              style={{
                margin: "auto",
                fontSize: "0.79rem",
                textAlign: "center",
              }}
            >
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
                margin: "auto",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <a
                href="/SignUpSuccessPage"
                class="text-decoration-none text-light"
                style={{
                  fontSize: "0.8rem",

                  padding: " 1px",
                }}
              >
                Join Now
              </a>
            </button>
            <hr
              style={{
                maxWidth: "33rem",
                color: "darkgray",
              }}
            />
            <p
              style={{
                margin: "auto",
                justifyContent: "center",
                display: "flex",
                fontSize: "0.9rem",
              }}
            >
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
        </Col>
      </Row>
    </Container>
  );
};

export default SignupBody;
