import React from "react";
import NavBarTwo from "./NavBarTwo";
import SignupSuccessAlert from "./SignupSuccessAlert";
import SignupSuccessBody from "./SignupSuccessBody";
import Footer from "./Footer";

const SignUpSuccessPage = () => {
  return (
    <div
      class="container my-3"
      style={{ backgroundColor: "#EBF5F5", width: "78%", height: "65rem" }}
    >
      <NavBarTwo />
      <SignupSuccessAlert />
      <SignupSuccessBody />
      <Footer />
    </div>
  );
};

export default SignUpSuccessPage;
