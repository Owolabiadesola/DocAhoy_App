import React from "react";
import NavBarOne from "./NavBarOne";
import OurservicesBody from "./OurservicesBody";
import Footer from "./Footer";
const BrowseSpeacialistPage = () => {
  return (
    <div
      class="container my-3"
      style={{ backgroundColor: "#EBF5F5", width: "78%", height: "62rem" }}
    >
      <NavBarOne />
      <OurservicesBody />
      <Footer />
    </div>
  );
};

export default BrowseSpeacialistPage;
