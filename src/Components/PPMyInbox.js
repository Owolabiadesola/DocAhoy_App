import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdOutlineMoveToInbox } from "react-icons/md";

const PPMyInbox = () => {
  return (
    <div
      class="container my-2"
      style={{ backgroundColor: "#EBF5F5", width: "70%", height: "37rem" }}
    >
      <div
        style={{
          backgroundColor: "grey",
          width: "50rem",
          height: "1.7rem",
          position: "absolute",
          margin: "3rem 0 0 3rem",
        }}
      >
        <a href="/PatientProfilePage" style={{ color: "black" }}>
          <FaLongArrowAltLeft
            class="mx-3"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </a>
        <b>
          <p style={{ margin: "-1.5rem 0 0 15rem" }}>My Inbox</p>
        </b>
      </div>
      <div
        style={{
          margin: "12rem 0 0 5rem",
          position: "absolute",
        }}
      >
        <MdOutlineMoveToInbox
          class="mt-3"
          style={{
            width: "9rem",
            height: "9rem",
            color: "#a8d1d1",
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "50%",
            marginLeft: "17rem",
          }}
        />
        <h3 class="mt-4" style={{ marginLeft: "9rem" }}>
          You Do Not Have Any Messages
        </h3>
        <p style={{ marginLeft: "14rem" }}>
          Here you will see all messages we sent
        </p>
      </div>
    </div>
  );
};

export default PPMyInbox;
