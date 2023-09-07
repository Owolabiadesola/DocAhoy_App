import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
const LoginBody = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <p
            style={{
              backgroundColor: "#55AEAD",
              maxWidth: "25.5rem",
              margin: "auto",
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
              margin: "auto",
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
            <input
              type="password"
              style={{ width: "22rem", marginLeft: "2rem" }}
            />
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
            <br />
            <br />
            <hr style={{ width: "25rem", margin: "auto" }} />
            <br />
            <p
              style={{
                border: "1px solid darkgray",
                borderRadius: "50%",
                color: "darkgray",
                padding: " 0.2rem 0.5rem",
                width: "2rem",
                margin: "auto",
              }}
            >
              or
            </p>
            <br />
            <button
              className="btn btn-borderless"
              style={{
                backgroundColor: "#55AEAD",
                color: "white",
                width: "17rem",
                height: "2rem",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FaFacebookF style={{ width: "1rem", height: "1.1rem" }} />{" "}
              <span class="px-4">Continue with Facebook</span>
            </button>
            <br />
            <p
              style={{ textAlign: "center", margin: "auto", color: "#1F605F" }}
            >
              New User ?{" "}
              <a href="/SignupPage" style={{ margin: "", color: "#1F605F" }}>
                Sign Up
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginBody;
