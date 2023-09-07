import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const WebMiddle = () => {
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Row className="mt-5 mx-5">
        <h4>Top-rated Doctors</h4>

        <Col
          className="mt-4 p-3 mx-2"
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{
            border: "1px solid #55AEAD",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "5px",
            width: "9rem",
            height: "12rem",
          }}
        >
          <img
            style={{ width: "4rem", height: "4rem" }}
            class="img-fluid mt-2"
            src="/Images/Frame 36.png"
            alt="img"
          />
          <p
            className="mt-3"
            style={{
              fontSize: "0.8rem",
              color: "#55AEAD",
              fontWeight: "500",
            }}
          >
            Badmus Lawal
          </p>
          <p
            className="mt-4"
            style={{
              fontSize: "0.9rem",
              color: "#55AEAD",
              fontWeight: "500",
            }}
          >
            General Practitioner
          </p>
        </Col>
        <Col
          className="mt-4 p-3"
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{
            marginLeft: "1rem",
            border: "1px solid #55AEAD",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "5px",
            width: "9rem",
            height: "12rem",
          }}
        >
          <img
            style={{ width: "4rem", height: "4rem" }}
            class="img-fluid mt-2"
            src="/Images/Frame 37.png"
            alt="img"
          />
          <p
            className="mt-3"
            style={{
              fontSize: "0.8rem",
              color: "#55AEAD",
              fontWeight: "500",
            }}
          >
            Usman Musa
          </p>
          <p
            className="mt-4"
            style={{
              fontSize: "0.9rem",
              color: "#55AEAD",
              fontWeight: "500",
            }}
          >
            Neuro-Surgeon
          </p>
        </Col>
        <Col
          className="mt-4 p-3"
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{
            marginLeft: "1.5rem",
            border: "1px solid #55AEAD",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "5px",
            width: "9rem",
            height: "12rem",
          }}
        >
          <img
            style={{ width: "4rem", height: "4rem" }}
            class="img-fluid mt-2"
            src="/Images/Frame 38.png"
            alt="img"
          />
          <p
            className="mt-3"
            style={{
              fontSize: "0.8rem",
              color: "#55AEAD",
              fontWeight: "500",
            }}
          >
            Mautinez James
          </p>
          <p
            className="mt-4"
            style={{
              fontSize: "0.9rem",
              color: "#55AEAD",
              fontWeight: "500",
            }}
          >
            Dermatologist
          </p>
        </Col>
        <Col
          className="mt-4 p-3"
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{
            marginLeft: "1.5rem",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "5px",
            width: "9rem",
            height: "12rem",
            border: "1px solid #55AEAD",
          }}
        >
          <img
            style={{ width: "4rem", height: "4rem" }}
            class="img-fluid mt-2"
            src="/Images/Frame 39.png"
            alt="img"
          />
          <p
            className="mt-3"
            style={{
              fontSize: "0.8rem",
              color: "#55AEAD",
              fontWeight: "500",
            }}
          >
            Bruno Rodrigez
          </p>
          <p
            className="mt-4"
            style={{
              fontSize: "0.9rem",
              color: "#55AEAD",
              fontWeight: "500",
            }}
          >
            Psychiatrist
          </p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <img
            style={{ width: "60rem", height: "15rem" }}
            src="/Images/Frame 289.png"
            alt="img"
            className="img-fluid mt-5"
          />
          <img
            style={{ width: "60rem", height: "15rem" }}
            src="/Images/Frame 292.png"
            alt="img"
            className="img-fluid mt-5"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WebMiddle;
