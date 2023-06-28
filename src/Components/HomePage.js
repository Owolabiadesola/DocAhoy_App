import React from "react";
import NavBarOne from "./NavBarOne";
import HomepageTop from "./HomepageTop";
import HomepageMiddle from "./HomepageMiddle";
import WebFooter from "./WebFooter";
const HomePage = () => {
  return (
    <div
      class="container my-3"
      style={{ backgroundColor: "#EBF5F5", width: "78%", height: "115rem" }}
    >
      <NavBarOne />
      <HomepageTop />
      <HomepageMiddle />
      <WebFooter />
    </div>
  );
};

export default HomePage;
