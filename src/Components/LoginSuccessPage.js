import React from "react";
import NavBarTwo from "./NavBarTwo";
import LoginSuccessAlert from "./LoginSuccessAlert";
import LoginSuccessBody from "./LoginSuccessBody";
import Footer from "./Footer";

export default function LoginSuccessPage() {
  return (
    <div
      class="container my-3"
      style={{ backgroundColor: "#EBF5F5", width: "78%", height: "60rem" }}
    >
      <NavBarTwo />
      <LoginSuccessAlert />
      <LoginSuccessBody />
      <Footer />
    </div>
  );
}
