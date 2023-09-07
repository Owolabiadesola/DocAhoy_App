import React from "react";
import NavBarTwo from "./NavBarTwo";
import LoginSuccessAlert from "./LoginSuccessAlert";
import LoginSuccessBody from "./LoginSuccessBody";
import Footer from "./Footer";

export default function LoginSuccessPage() {
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
      <LoginSuccessAlert />
      <LoginSuccessBody />
      <Footer />
    </div>
  );
}
