import React from "react";
import { VscLayoutMenubar } from "react-icons/vsc";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { MdOutlineRateReview } from "react-icons/md";
import { TbSettings2 } from "react-icons/tb";
import { Container, Row, Col } from "react-bootstrap";

const PatientProfileBody = () => {
  return (
    <Container>
      <Row>
        <div
          style={{
            backgroundColor: "#55AEAD",
            Maxwidth: "53rem",
            height: "1.7rem",
            margin: "auto",
            borderRadius: "7px 7px 0 0",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          <b>
            <p class="mx-3">My DocAhoy! Account</p>
          </b>
        </div>
        <Col xs={12} sm={12} md={12} lg={12} className="mx-5">
          <div className="mt-5 mx-3" style={{ display: "flex" }}>
            <VscLayoutMenubar
              class=""
              style={{ width: "2.5rem", height: "2.5rem", color: "#a8d1d1" }}
            />
            <p className="mx-4 mt-2" style={{ fontWeight: "500" }}>
              My Appointments
            </p>
            <a href="/PPMyAppointment">
              <RiArrowDropRightLine
                style={{
                  width: "1.7rem",
                  height: "1.7rem",
                  color: "1F605F",
                }}
                className="mt-2"
              />
            </a>
          </div>
          <div className="mt-2 mx-3" style={{ display: "flex" }}>
            <MdOutlineMoveToInbox
              class="mt-3"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                color: "#a8d1d1",
              }}
            />

            <p className="mt-4 mx-4" style={{ fontWeight: "500" }}>
              Inbox
            </p>
            <a href="/PPMyInbox">
              <RiArrowDropRightLine
                style={{
                  width: "1.7rem",
                  height: "1.7rem",
                  color: "1F605F",
                }}
                className="mt-4"
              />
            </a>
          </div>
          <br />
          <div className="mt-2 mx-3" style={{ display: "flex" }}>
            <ImSearch
              style={{ width: "2rem", height: "2rem", color: "#a8d1d1" }}
            />

            <p className="mx-4" style={{ fontWeight: "500" }}>
              Top Serched Specialists
            </p>
            <a href="/BrowseSpeacialistPage">
              <RiArrowDropRightLine
                style={{
                  width: "1.7rem",
                  height: "1.7rem",
                  color: "1F605F",
                }}
              />
            </a>
          </div>
          <br />
          <div className="mt-2 mx-3" style={{ display: "flex" }}>
            <MdOutlineRateReview
              style={{ width: "2.5rem", height: "2.5rem", color: "#a8d1d1" }}
            />

            <p className="mx-3" style={{ fontWeight: "500" }}>
              Pending Doctor Reviews
            </p>
            <RiArrowDropRightLine
              style={{
                width: "1.7rem",
                height: "1.7rem",
                color: "1F605F",
              }}
            />
          </div>
          <br />
          <div className="mt-2 mx-3" style={{ display: "flex" }}>
            <TbSettings2
              style={{ width: "2.5rem", height: "2.5rem", color: "#a8d1d1" }}
            />
            <p className="mx-3" style={{ fontWeight: "500" }}>
              Account Management
            </p>
            <RiArrowDropRightLine
              style={{
                width: "1.7rem",
                height: "1.7rem",
                color: "1F605F",
              }}
            />
          </div>
        </Col>
        <button
          class="btn my-3"
          style={{
            maxWidth: "60rem",
            height: "2.5rem",
            backgroundColor: "#a8d1d1",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="/LogoutConfirmation" class="btn text dark ">
            Log Out
          </a>
        </button>
      </Row>
    </Container>
  );
};

export default PatientProfileBody;
