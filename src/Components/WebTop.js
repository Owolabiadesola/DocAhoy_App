import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class WebTop extends Component {
  render() {
    return (
      <Container fluid-md>
        <Row className="px-5 mt-5">
          <Col sm={12} md={6} className=" ps-5 pt-4">
            <div>
              <h3 className="pe-5">
                <b>
                  The Best Health Care Services is Near You, Book An Appointment
                  Today!
                </b>
              </h3>
              <p className="my-5">
                We have the best well trained doctors and effective at treating
                patients and following up with your health and well bring
                matters to us
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
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div>
              <img src="/Images/image1.png" class="img-fluid" alt="topimg" />
            </div>
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
          <img
            src="/Images/Frame 298.png"
            alt="img"
            className="img-fluid mt-4"
          />
        </Row>
      </Container>
    );
  }
}
