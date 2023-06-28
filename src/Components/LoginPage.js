import React from "react";
import NavBarOne from "./NavBarOne";
import LoginBody from "./LoginBody";
import Footer from "./Footer";
const LoginPage = () => {
  return (
    <div
      class="container my-3"
      style={{ backgroundColor: "#EBF5F5", width: "78%", height: "73rem" }}
    >
      <NavBarOne />
      <LoginBody />
      <Footer />
    </div>
  );
};

export default LoginPage;
