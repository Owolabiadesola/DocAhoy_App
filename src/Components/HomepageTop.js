import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const HomepageTop = () => {
  return (
    <Container>
      <Row>
        <Col className="m-5" xs={12} sm={12} md={6}>
          <h2>
            <b>Welcome!!!</b>
          </h2>
          <p className="mt-4" style={{ fontSize: "1.3rem" }}>
            Home for quality primary care, more accessible than ever before
          </p>
          <button
            type="button"
            class="btn mt-3 text-light"
            style={{ backgroundColor: "#55AEAD", width: "9rem" }}
          >
            <a href="/SignupPage" class="text-decoration-none text-light">
              Get Started
            </a>
          </button>
        </Col>
        <Col className="mt-5">
          <img
            src="/Images/Vector (9).png"
            className="img-fluid"
            alt="topimg"
          />
        </Col>
      </Row>
      <Row className="px-5">
        <h4 className=" mt-5 mb-3 ">Top-searched Specialties</h4>
        <Col xs={3} sm={3} md={3}>
          <div>
            <img src="/Images/Frame2.png" class="img-fluid" alt="heart" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3}>
          <div>
            <img src="/Images/Frame3.png" class="img-fluid" alt="dentist" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3}>
          <div>
            <img src="/Images/Frame4.png" class="img-fluid" alt="uterus" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3}>
          <div>
            <img src="/Images/Frame5.png" class="img-fluid" alt="skin" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} className=" mt-3">
          <div>
            <img src="/Images/Frame6.png" class="img-fluid" alt="brain" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} className=" mt-3">
          <div>
            <img
              src="/Images/Frame7.png"
              class="img-fluid"
              alt="medical heart"
            />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} className=" mt-3">
          <div>
            <img src="/Images/Frame8.png" class="img-fluid" alt="eye" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} className=" mt-3">
          <div>
            <img
              src="/Images/Frame9.png"
              class="img-fluid"
              alt="mental health"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomepageTop;
