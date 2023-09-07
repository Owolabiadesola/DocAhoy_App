import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
const PPMyInbox = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div
            class="container"
            style={{
              backgroundColor: "#EBF5F5",
              width: "100%",
              height: "37rem",
            }}
          >
            <div
              className="mt-1"
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
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                />
              </a>
              <b>
                <p style={{ margin: "0.1rem 0 0 15rem" }}>My Inbox</p>
              </b>
            </div>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <MdOutlineMoveToInbox
                class="mt-5"
                style={{
                  width: "9rem",
                  height: "9rem",
                  color: "#a8d1d1",
                  backgroundColor: "white",
                  padding: "1.5rem",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div>
              <h3 class="mt-5" style={{ margin: "auto", textAlign: "center" }}>
                You Do Not Have Any Messages
              </h3>
              <p
                className="mt-5"
                style={{
                  margin: "auto",
                  textAlign: "center",
                  fontWeight: "400",
                }}
              >
                Here you will see all messages we sent
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PPMyInbox;
