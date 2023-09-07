import React from "react";
import NavBarOne from "./NavBarOne";
import OurservicesBody from "./OurservicesBody";
import Footer from "./Footer";
const BrowseSpeacialistPage = () => {
  return (
    <div
      class="container"
      style={{
        backgroundColor: "#EBF5F5",
        width: "100%",
        height: "60rem",
        minHeight: "70rem",
      }}
    >
      <NavBarOne />
      <OurservicesBody />
      <Footer />
    </div>
  );
};

export default BrowseSpeacialistPage;
