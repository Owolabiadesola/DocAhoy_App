import React from "react";
import NavBarOne from "./NavBarOne";
import WebTop from "./WebTop";
import WebMiddle from "./WebMiddle";
import WebFooter from "./WebFooter";
const WebsitePage = () => {
  return (
    <div
      class="container my-3"
      style={{
        backgroundColor: "#EBF5F5",
        width: "100%",
        maxHeight: "175rem",
        minHeight: "123rem",
      }}
    >
      <NavBarOne />
      <WebTop />
      <WebMiddle />
      <WebFooter />
    </div>
  );
};

export default WebsitePage;
