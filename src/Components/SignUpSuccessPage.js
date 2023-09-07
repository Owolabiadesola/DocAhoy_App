import React from "react";
import NavBarTwo from "./NavBarTwo";
import SignupSuccessAlert from "./SignupSuccessAlert";
import SignupSuccessBody from "./SignupSuccessBody";
import Footer from "./Footer";

const SignUpSuccessPage = () => {
  return (
    <div
      class="container"
      style={{
        backgroundColor: "#EBF5F5",
        width: "100%",
        maxHeight: "65rem",
        minHeight: "63rem",
      }}
    >
      <NavBarTwo />
      <SignupSuccessAlert />
      <SignupSuccessBody />
      <Footer />
    </div>
  );
};

export default SignUpSuccessPage;
