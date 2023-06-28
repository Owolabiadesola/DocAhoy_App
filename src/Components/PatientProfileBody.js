import React from "react";
import { VscLayoutMenubar } from "react-icons/vsc";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { MdOutlineRateReview } from "react-icons/md";
import { TbSettings2 } from "react-icons/tb";
const PatientProfileBody = () => {
  return (
    <div class="mt-5 mx-5">
      <div
        style={{
          backgroundColor: "#55AEAD",
          width: "53rem",
          height: "1.7rem",
          borderRadius: "7px 7px 0 0",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <b>
          <p class="mx-3">My DocAhoy! Account</p>
        </b>
      </div>
      <div class="">
        <VscLayoutMenubar
          class="mt-5"
          style={{ width: "2.5rem", height: "2.5rem", color: "#a8d1d1" }}
        />

        <p style={{ margin: "-2rem 0 0 4rem" }}>My Appointments</p>
        <a href="/PPMyAppointment">
          <RiArrowDropRightLine
            style={{
              width: "1.7rem",
              height: "1.7rem",
              margin: "-3rem 0 0 50rem",
              color: "1F605F",
            }}
          />
        </a>
        <br />
        <MdOutlineMoveToInbox
          class="mt-3"
          style={{ width: "2.5rem", height: "2.5rem", color: "#a8d1d1" }}
        />

        <p style={{ margin: "-2rem 0 0 4rem" }}>Inbox</p>
        <a href="/PPMyInbox">
          <RiArrowDropRightLine
            style={{
              width: "1.7rem",
              height: "1.7rem",
              margin: "-3rem 0 0 50rem",
              color: "1F605F",
            }}
          />
        </a>
        <br />
        <ImSearch
          class="mt-3"
          style={{ width: "2rem", height: "2rem", color: "#a8d1d1" }}
        />

        <p style={{ margin: "-2rem 0 0 4rem" }}>Top Serched Specialists</p>
        <a href="/BrowseSpeacialistPage">
          <RiArrowDropRightLine
            style={{
              width: "1.7rem",
              height: "1.7rem",
              margin: "-3rem 0 0 50rem",
              color: "1F605F",
            }}
          />
        </a>
        <br />
        <MdOutlineRateReview
          class="mt-3"
          style={{ width: "2.5rem", height: "2.5rem", color: "#a8d1d1" }}
        />

        <p style={{ margin: "-2rem 0 0 4rem" }}>Pending Doctor Reviews</p>

        <RiArrowDropRightLine
          style={{
            width: "1.7rem",
            height: "1.7rem",
            margin: "-3rem 0 0 50rem",
            color: "1F605F",
          }}
        />

        <br />
        <TbSettings2
          class="mt-3"
          style={{ width: "2.5rem", height: "2.5rem", color: "#a8d1d1" }}
        />

        <p style={{ margin: "-2rem 0 0 4rem" }}>Account Management</p>

        <RiArrowDropRightLine
          style={{
            width: "1.7rem",
            height: "1.7rem",
            margin: "-3rem 0 0 50rem",
            color: "1F605F",
          }}
        />
      </div>
      <button
        class="btn"
        style={{
          width: "45rem",
          height: "2.5rem",
          backgroundColor: "#a8d1d1",
          margin: "2rem 0 0 5rem",
        }}
      >
        <a href="/LogoutConfirmation" class="btn text dark ">
          Log Out
        </a>
      </button>
    </div>
  );
};

export default PatientProfileBody;
