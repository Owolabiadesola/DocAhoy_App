import React from "react";
import { AiFillStar } from "react-icons/ai";
import "../Styles/DDLDivOne.css";

const DDLDivOne = () => {
  return (
    <div>
      <span>
        <img
          src="/Images/Frame 294.png"
          alt="img"
          style={{ margin: "3rem 0 0 5rem" }}
        />
      </span>
      <span>
        <img
          src="/Images/image 21.png"
          alt="img"
          style={{
            width: "50rem",
            height: "5rem",
            margin: "-3.5rem 0 0 10rem",
          }}
        />
      </span>
      <div
        class="row mt-4 mx-5"
        style={{
          backgroundColor: "#ABD7D6",
          width: "58rem",
          height: "18rem",
          marginTop: "2rem",
          marginLeft: "3rem",
          borderRadius: "7px",
        }}
      >
        <div class="col-sm-4">
          <img
            src="./Images/Ellipse 16 (2).png"
            alt="div1img"
            style={{ width: "13rem", height: "13rem", margin: "2rem 0 0 1rem" }}
          />
        </div>
        <div class="col-sm-4 mt-4">
          {" "}
          <h4>Dr. Adejoke Omodele</h4>
          <h6 class="text-light">General Physician</h6>
          <ul style={{ color: "#55AEAD", marginLeft: "-2rem" }}>
            {/* Star icons */}
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
          </ul>
          <p
            style={{ fontSize: "10px", marginLeft: "6rem", marginTop: "-2rem" }}
          >
            (Overall Rating From 5 Visitors)
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            General practitioner speciallized in paediatric general <br />
            practice and Adult General Practice
          </p>
          <p style={{ fontSize: "0.7rem" }}>Victoria Island</p>
          <h6 style={{ fontSize: "0.8rem" }}>Joined Recently</h6>
          <p style={{ fontSize: "0.7rem", color: "white" }}>Fees: 15,000 NGN</p>
        </div>
        <div class="col-sm-4">
          <div class="dropdown1">
            <button
              // Dropdown background styling
              style={{
                backgroundColor: "#EBF5F5",
                borderRadius: "5px",
                border: " 1px black solid ",
                height: "2.3rem",
                margin: "2rem 0 0 5rem",
              }}
              class="btn dropdown-toggle"
              type="button"
            >
              {/* Dropdown caption */}
              Available Time
            </button>
            {/* Dropdown content */}
            <div class="dropdown-content1">
              <p style={{ fontSize: "1 rem", height: "2rem" }}>8am-9am</p>
              <p style={{ fontSize: "1rem", height: "2rem" }}>9am-10am</p>
              <p style={{ fontSize: "1rem", height: "2rem" }}>10am-11am</p>
              <p style={{ fontSize: "1rem", height: "2rem" }}>11am-12noon</p>
              <p style={{ fontSize: "1rem", height: "2rem" }}>1pm-2pm</p>
              <p style={{ fontSize: "1rem", height: "2rem" }}>2pm-3pm</p>
            </div>
          </div>
          <button
            style={{
              backgroundColor: "#55AEAD",
              border: "1px #55AEAD solid",
              color: "white",
              marginTop: "9rem",
              marginLeft: "7rem",
              height: "2rem",
              borderRadius: "5px",
            }}
          >
            <a href="/BookingPageLag1" class="text-decoration-none text-light">
              Book Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DDLDivOne;
