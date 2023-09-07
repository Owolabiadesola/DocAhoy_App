import React from "react";
import { ImCheckmark } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";

const PaymentSuccessBody = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <ImCheckmark
              style={{
                backgroundColor: "white",
                color: "#1f605f",
                width: "8rem",
                height: "8rem",
                padding: "3rem",
                borderRadius: "50%",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <h4
              className="my-4"
              style={{ margin: "auto", textAlign: "center" }}
            >
              Payment Successful
            </h4>
            <p style={{ margin: "auto", textAlign: "center" }}>
              Thank you for choosing DocAhoy! Check Email for payment Receipt
            </p>
            <button
              className="my-4"
              style={{
                width: "20rem",
                height: "2.5rem",
                backgroundColor: "#1f605f",
                border: "none",
                borderRadius: "3px",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href="/HomePage"
                style={{ textDecoration: "none", color: "white" }}
              >
                Back Home
              </a>
            </button>
            <a href="/PaymentFailure">f</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccessBody;
