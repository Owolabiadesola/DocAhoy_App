import React from "react";
import { ImCross } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";

const PaymentFailureBody = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <ImCross
              style={{
                backgroundColor: "white",
                color: "#cc3636",
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
              Oppppppppps!
            </h4>
            <p style={{ margin: "auto", textAlign: "center" }}>
              Something Went Wrong
            </p>
            <button
              className="mt-4"
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
                href="/Payemnt"
                style={{ textDecoration: "none", color: "white" }}
              >
                Try Again
              </a>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentFailureBody;
