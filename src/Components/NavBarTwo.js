import React from "react";
import { RxPerson } from "react-icons/rx";

const NavBarTwo = () => {
  return (
    <nav className="navbar navbar-expand-lg pt-4">
      <div className="container-fluid ">
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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <div class="dropdown-content1"></div>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <ls class="nav-item px-4 mx-2">
              <a
                href="/Homepage"
                class="text-decoration-none"
                style={{ color: "#329D9C" }}
              >
                <b>Home</b>
              </a>
            </ls>
            <ls class="nav-item px-3 mx-3">
              <a
                href="/BrowseSpeacialistPage"
                class="text-decoration-none"
                style={{ color: "#329D9C" }}
              >
                <b>Our services</b>
              </a>
            </ls>
            <ls class="nav-item px-4 mx-3">
              <a
                href="/"
                class="text-decoration-none"
                style={{ color: "#329D9C" }}
              >
                <b> About us</b>
              </a>
            </ls>
            <ls class="nav-item mx-5">
              <a href="#">
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
            <ls>
              <a href="/PatientProfilePage">
                <RxPerson
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    color: "#55AEAD",
                  }}
                />
              </a>
            </ls>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarTwo;
