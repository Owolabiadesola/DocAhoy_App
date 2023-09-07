import React from "react";
import NavBarOne from "./NavBarOne";
import LoginBody from "./LoginBody";
import Footer from "./Footer";
const LoginPage = () => {
  return (
    <div
      class="container"
      style={{
        backgroundColor: "#EBF5F5",
        width: "100%",
        maxHeight: "73rem",
        minHeight: "58rem",
      }}
    >
      <NavBarOne />
      <LoginBody />
      <Footer />
    </div>
  );
};

export default LoginPage;
