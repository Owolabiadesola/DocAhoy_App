import React, { Component } from "react";

export default class WebTop extends Component {
  render() {
    return (
      <div class="container mt-5 mx-5">
        <h3 class="">
          <b>
            The Best Health Care <br /> Services is Near You, Book <br />
            An Appointment Today!
          </b>
        </h3>
        <img
          src="/Images/image1.png"
          class="img-fluid float-end"
          alt="topimg"
          style={{ width: "18rem", height: "18rem", margin: "-9rem 5rem 0 0" }}
        />
        <p class="mt-5">
          We have the best well trained doctors and effective at <br />
          treating patients and following up with your health <br />
          and well bring matters to us
        </p>
        <button
          type="button"
          class="btn mt-3 text-light"
          style={{ backgroundColor: "#55AEAD", width: "9rem" }}
        >
          <a href="/SignupPage" class="text-decoration-none text-light">
            Get Started
          </a>
        </button>
        <div class="row my-5 gx-1">
          <h4>Top-searched Specialties</h4>
          <div class="col-sm-3 mt-5">
            <img
              src="/Images/Frame2.png"
              class="img-fluid"
              alt="heart"
              style={{ width: "13rem", height: "8rem" }}
            />
          </div>
          <div class="col-sm-3 mt-5">
            <img
              src="/Images/Frame3.png"
              class="img-fluid"
              alt="dentist"
              style={{ width: "13rem", height: "8rem", marginLeft: "-1rem" }}
            />
          </div>
          <div class="col-sm-3 mt-5">
            <img
              src="/Images/Frame4.png"
              class="img-fluid"
              alt="uterus"
              style={{ width: "13rem", height: "8rem", marginLeft: "-2rem" }}
            />
          </div>
          <div class="col-sm-3 mt-5">
            <img
              src="/Images/Frame5.png"
              class="img-fluid"
              alt="skin"
              style={{ width: "13rem", height: "8rem", marginLeft: "-3rem" }}
            />
          </div>
        </div>
        <div class="row gx-1" style={{ marginTop: "-3rem" }}>
          <div class="col-sm-3 mt-5">
            <img
              src="/Images/Frame6.png"
              class="img-fluid"
              alt="brain"
              style={{ width: "13rem", height: "8rem" }}
            />
          </div>
          <div class="col-sm-3 mt-5">
            <img
              src="/Images/Frame7.png"
              class="img-fluid"
              alt="medical heart"
              style={{ width: "13rem", height: "8rem", marginLeft: "-1rem" }}
            />
          </div>
          <div class="col-sm-3 mt-5">
            <img
              src="/Images/Frame8.png"
              class="img-fluid"
              alt="eye"
              style={{ width: "13rem", height: "8rem", marginLeft: "-2rem" }}
            />
          </div>
          <div class="col-sm-3 mt-5">
            <img
              src="/Images/Frame9.png"
              class="img-fluid"
              alt="mental health"
              style={{ width: "13rem", height: "8rem", marginLeft: "-3rem" }}
            />
          </div>
        </div>
        <img
          src="/Images/Frame 298.png"
          alt="img"
          class="img-fluid mt-5"
          style={{ width: "100%", marginLeft: "-3rem" }}
        />
      </div>
    );
  }
}
