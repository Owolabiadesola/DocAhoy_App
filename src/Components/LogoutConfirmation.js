import React from "react";
import NavBarTwo from "./NavBarTwo";
import { VscLayoutMenubar } from "react-icons/vsc";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { MdOutlineRateReview } from "react-icons/md";
import { TbSettings2 } from "react-icons/tb";

export default function LogoutConfirmation() {
  return (
    <div
      class="container my-3"
      style={{ backgroundColor: "#EBF5F5", width: "78%", height: "40rem" }}
    >
      <NavBarTwo />
      <div class="container mt-5 mx-5">
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
      <div
        class="alert text-light"
        role="alert"
        style={{
          backgroundColor: "#2e9795",
          width: "40rem",
          height: "10rem",
          margin: "-15rem 0 0 10rem",
        }}
      >
        <p class="mx-5 mt-2" style={{ fontSize: "1.2rem" }}>
          Logout Confirmation
        </p>
        <p class="mx-5" style={{ fontSize: "0.9rem" }}>
          Are you sure you want to Exit?
        </p>
        <span>
          <a
            class="text-light"
            href="/LoginPage"
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              margin: "0 0 0 30rem",
            }}
          >
            Yes
          </a>
          <span>
            <a
              class="text-light"
              href="/PatientProfilePage"
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                margin: "0 0 0 3rem",
              }}
            >
              No
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}
