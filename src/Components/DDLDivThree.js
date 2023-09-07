import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
const DDLDivThree = () => {
  return (
    <Container>
      <Row
        class="row mt-4 mx-5"
        style={{
          backgroundColor: "#ABD7D6",
          maxWidth: "58rem",
          minWidth: "20rem",
          height: "18rem",
          marginTop: "2rem",
          marginLeft: "3rem",
          borderRadius: "7px",
        }}
      >
        <Col xs={3} sm={3} md={3} lg={3}>
          <img
            className="img-fluid"
            src="./Images/Ellipse 16 (5).png"
            alt="div1img"
            style={{
              maxWidth: "13rem",
              height: "13rem",
              margin: "2rem 0 0 1rem",
            }}
          />
        </Col>
        <Col className="mt-2" xs={6} sm={6} md={6} lg={6}>
          <h4>Dr. Seun Awoseye</h4>
          <h6 class="text-light">Psychiatrist</h6>
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
          <p style={{ fontSize: "0.7rem" }}>Senior consultant in psychiatry</p>
          <p style={{ fontSize: "0.7rem" }}>Lekki</p>
          <h6 style={{ fontSize: "0.8rem" }}>Joined 2016</h6>
          <p style={{ fontSize: "0.7rem", color: "white" }}>Fees: 15,000 NGN</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <div class="dropdown1">
            <button
              // Dropdown background styling
              className="mt-3"
              style={{
                backgroundColor: "#EBF5F5",
                borderRadius: "5px",
                border: " 1px black solid ",
                height: "2.3rem",
                margin: "auto",
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
              height: "2rem",
              borderRadius: "5px",
            }}
          >
            <a href="/BookingPageLag3" class="text-decoration-none text-light">
              Book Now
            </a>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default DDLDivThree;
