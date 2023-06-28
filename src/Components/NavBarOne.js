import React from "react";
import "../Styles/NavoneDD.css";
//import { RxPerson } from "react-icons/rx";

const NavBarOne = () => {
  return (
    <nav class="container ">
      <h4 class="fs-4 py-5" style={{ marginLeft: "5rem" }}>
        <b
          class="px-3 py-1 fs-3"
          style={{
            border: "1px solid #1F605F",
            borderRadius: "80%",
            color: "#1F605F",
          }}
        >
          DA!
        </b>
        <span style={{ color: "#1F605F" }}>D</span>
        ocAhoy!
      </h4>
      <ul class="nav " style={{ marginLeft: "27rem", marginTop: "-5rem" }}>
        <ls class="nav-item px-4 ">
          <a
            href="/Homepage"
            class="text-decoration-none"
            style={{ color: "#329D9C" }}
          >
            <b>Home</b>
          </a>
        </ls>
        <ls class="nav-item px-3">
          <a
            href="/BrowseSpeacialistPage"
            class="text-decoration-none"
            style={{ color: "#329D9C" }}
          >
            <b>Our services</b>
          </a>
        </ls>
        <ls class="nav-item px-4">
          <a href="/" class="text-decoration-none" style={{ color: "#329D9C" }}>
            <b> About us</b>
          </a>
        </ls>
        <ls class="nav-item px-4">
          <a
            href="/SignupPage"
            class="text-decoration-none"
            style={{ color: "#329D9C" }}
          >
            <b>Sign Up</b>
          </a>
        </ls>
        <ls>
          <div class="dropdown">
            <button
              class="btn dropdown-toggle mx-4"
              type="button"
              style={{
                backgroundColor: "#EBF5F5",
                color: "black",
                padding: "5px",
                fontSize: "16px",
                height: "2rem",
                cursor: "pointer",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            >
              Log In
            </button>
            {/* Dropdown content */}
            <div class="dropdown-content">
              <p style={{ fontSize: "1rem", height: "2rem" }}>
                <a href="/LoginPage" class="text-decoration-none text-dark">
                  Patient's Login
                </a>
              </p>
              <p style={{ fontSize: "1rem", height: "2rem" }}>
                <a href="/LoginPage" class="text-decoration-none text-dark">
                  Doctor's Login
                </a>
              </p>
            </div>
          </div>
        </ls>
      </ul>
    </nav>
  );
};

export default NavBarOne;
