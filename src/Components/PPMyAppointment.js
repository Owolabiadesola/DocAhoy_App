import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
const PPMyAppointment = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div
            class=""
            style={{
              backgroundColor: "#EBF5F5",
              width: "100%",
              height: "39rem",
            }}
          >
            <div
              style={{
                backgroundColor: "grey",
                minWidth: "25rem",
                maxWidth: "65rem",
                height: "1.7rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a href="/PatientProfilePage" style={{ color: "black" }}>
                <FaLongArrowAltLeft
                  class="mx-3"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
              </a>
              <b>
                <p className="mx-5">My Appointment</p>
              </b>
            </div>
            <img
              className="mt-5"
              src="/Images/Frame 143.png"
              alt="img"
              style={{
                width: "100%",
                height: "32rem",
                margin: "auto",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PPMyAppointment;
