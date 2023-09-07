import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurservicesBody = () => {
  return (
    <Container>
      <Row className="m-5">
        <h4>Available Specialists</h4>
        <Col xs={6} sm-={6} md={6} lg={3} className="mt-3">
          <div>
            <ul style={{ listStyle: "none" }}>
              <li>General practitioner </li>
              <hr />
              <li>Denistry</li>
              <hr />
              <li>Urgent care</li>
              <hr />
              <li>OBGYNs</li>
              <hr />
            </ul>
          </div>
        </Col>
        <Col xs={6} sm-={6} md={6} lg={3} className="mt-3">
          <div>
            <ul style={{ listStyle: "none" }}>
              <li>Psychiatrist</li>
              <hr />
              <li>Pediatric</li>
              <hr />
              <li>Pharmacist </li>
              <hr />
              <li>Dermatologist</li>
              <hr />
            </ul>
          </div>
        </Col>
        <Col xs={6} sm-={6} md={6} lg={3} className="mt-3">
          <ul style={{ listStyle: "none" }}>
            <li>Optometrists</li>
            <hr />
            <li>Orthopedic Surgeons</li>
            <hr />
            <li>Anaesthesiologists </li>
            <hr />
            <li>General Surgeons</li>
            <hr />
          </ul>
        </Col>
        <Col xs={6} sm-={6} md={6} lg={3} className="mt-3">
          <ul style={{ listStyle: "none" }}>
            <li>Veterinarians </li>
            <hr />
            <li>Plastic Surgeon</li>
            <hr />
            <li>Chiropractor</li>
            <hr />
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default OurservicesBody;
