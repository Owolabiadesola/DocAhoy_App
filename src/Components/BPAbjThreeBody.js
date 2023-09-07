import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";

const BPAbjThreeBody = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
          <section
            class="m-5 "
            style={{
              maxWidth: "29rem",
              height: "16rem",
              backgroundColor: "#EBF5F5",
              border: "1px solid #D9D9D9",
              borderRadius: "5px",
            }}
          >
            <img
              src="./Images/Frame 39.png"
              alt="div1img"
              style={{
                margin: "1rem 0 0 1rem",
                width: "10rem",
                height: "10rem",
              }}
            />
            <div style={{ margin: "-11rem 0 0 12rem" }}>
              <h5>Dr. Bruno Rodrigez</h5>
              <h6>Psychiatrist</h6>
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
                style={{
                  fontSize: "10px",
                  marginLeft: "6rem",
                  marginTop: "-2rem",
                }}
              >
                (Overall Rating From 5 Visitors)
              </p>
              <p style={{ fontSize: "0.7rem" }}>
                Senior consultant in psychiatry
              </p>
            </div>
            <button
              className="my-4"
              style={{
                backgroundColor: "#ABD7D6",
                border: "1px solid #ABD7D6",
                height: "2.5rem",
                width: "25rem",
                margin: "auto",
              }}
            >
              November 10 -1:00 PM, <b>Appointment Reservation</b>
            </button>
          </section>
        </Col>
        <Col className="mt-5" xs={12} sm={12} md={12} lg={6}>
          <div
            style={{
              margin: "auto",
              width: "27rem",
              height: "35rem",
              border: "1px black solid",
              borderRadius: "5px",
            }}
          >
            <p
              style={{
                backgroundColor: "#1F605F",
                width: "27rem",
                textAlign: "center",
                borderRadius: "5px 5px 0 0",
              }}
            >
              <b> Service Booking</b>
            </p>
            <p style={{ fontSize: "0.8rem", textAlign: "center" }}>
              Please complete the following form to create your booking
            </p>
            <input
              placeholder="Patient Name"
              class="mx-4 mt-3"
              style={{ width: "23rem", height: "2.5rem" }}
            />
            <input
              placeholder="Mobile Number"
              class="mx-4 mt-4"
              style={{ width: "23rem", height: "2.5rem" }}
            />
            <input
              placeholder="Email Address (Optional)"
              class="mx-4 mt-4"
              style={{ width: "23rem", height: "2.5rem" }}
            />
            <h6 class="mt-5 mx-4">Amount</h6>
            <input
              placeholder="Examination Fee                                            15,000"
              class="mx-4 mt-4"
              style={{ width: "23rem", height: "2.5rem" }}
            />
            <input
              placeholder="Total                                                               15,000"
              class="mx-4 mt-4"
              style={{ width: "23rem", height: "2.5rem" }}
            />
            <span>
              <button
                style={{
                  backgroundColor: "#1F605F",
                  width: "7rem",
                  height: "2rem",
                  margin: "3rem 0 0 5rem",
                  border: "none",
                  borderRadius: "3px",
                }}
              >
                <a
                  href="/BookingSuccessIB1"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Book
                </a>
              </button>
            </span>
            <span>
              <button
                style={{
                  width: "7rem",
                  height: "2rem",
                  backgroundColor: "#CC3636",
                  margin: "3rem 0 0 1rem",
                  border: "none",
                  borderRadius: "3px",
                }}
              >
                <a
                  href="/DoctorsinAbuja"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Cancel
                </a>
              </button>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BPAbjThreeBody;
