import React from "react";
import NavBarOne from "./NavBarOne";
import SignupBody from "./SignupBody";
import Footer from "./Footer";
const SignupPage = () => {
  return (
    <div
      class="container"
      style={{
        backgroundColor: "#EBF5F5",
        width: "100%",
        maxHeight: "90rem",
        minHeight: "77rem",
      }}
    >
      <NavBarOne />
      <SignupBody />
      <Footer />
    </div>
  );
};

export default SignupPage;
