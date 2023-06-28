import React from "react";
import { RxPerson } from "react-icons/rx";

const NavBarTwo = () => {
  return (
    <nav class="container">
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
        <ls class="nav-item px-1">
          <a href="/SignupPage">
            <button
              style={{
                width: "9rem",
                fontSize: "0.7rem",
                height: "1.5rem",
                border: "none",
                backgroundColor: "#55AEAD",
                borderRadius: "5px",
                color: "white",
              }}
            >
              You're logged in
            </button>
          </a>
        </ls>
        <ls class="nav-item px-4">
          <a href="/PatientProfilePage">
            <RxPerson
              style={{ width: "1.5rem", height: "1.5rem", color: "#55AEAD" }}
            />
          </a>
        </ls>
      </ul>
    </nav>
  );
};

export default NavBarTwo;
