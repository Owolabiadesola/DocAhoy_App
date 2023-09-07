import React from "react";
import NavBarOne from "./NavBarOne";
import HomepageTop from "./HomepageTop";
import HomepageMiddle from "./HomepageMiddle";
import WebFooter from "./WebFooter";
const HomePage = () => {
  return (
    <div
      class="container my-3"
      style={{
        backgroundColor: "#EBF5F5",
        width: "100%",
        maxHeight: "176rem",
        minHeight: "100rem",
      }}
    >
      <NavBarOne />
      <HomepageTop />
      <HomepageMiddle />
      <WebFooter />
    </div>
  );
};

export default HomePage;
