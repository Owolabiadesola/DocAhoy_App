import React from "react";
import NavBarOne from "./NavBarOne";
import SignupBody from "./SignupBody";
import Footer from "./Footer";
const SignupPage = () => {
  return (
    <div
      class="container my-3"
      style={{ backgroundColor: "#EBF5F5", width: "78%", height: "90rem" }}
    >
      <NavBarOne />
      <SignupBody />
      <Footer />
    </div>
  );
};

export default SignupPage;
