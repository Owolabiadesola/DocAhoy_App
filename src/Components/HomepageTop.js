import React from "react";

const HomepageTop = () => {
  return (
    <div>
      <div class="mt-5 mx-5">
        <h2>
          <b>Welcome!!!</b>
        </h2>
        <img
          src="/Images/Vector (9).png"
          class="img-fluid float-end"
          alt="topimg"
          style={{ width: "18rem", height: "18rem", margin: "-3rem 9rem 0 0" }}
        />
        <p style={{ fontSize: "1.5rem", marginTop: "3rem" }}>
          Home for quality primary care, more <br /> accessible than ever before
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
      </div>

      <div class="row my-5 mx-5"></div>

      <div class="row m-5 gx-1">
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
            style={{ width: "13rem", height: "8rem", marginLeft: "0.5rem" }}
          />
        </div>
        <div class="col-sm-3 mt-5">
          <img
            src="/Images/Frame4.png"
            class="img-fluid"
            alt="uterus"
            style={{ width: "13rem", height: "8rem", marginLeft: "1rem" }}
          />
        </div>
        <div class="col-sm-3 mt-5">
          <img
            src="/Images/Frame5.png"
            class="img-fluid"
            alt="skin"
            style={{ width: "13rem", height: "8rem", marginLeft: "1.5rem" }}
          />
        </div>
      </div>
      <div class="row gx-1 mx-5" style={{ marginTop: "-3rem" }}>
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
            style={{ width: "13rem", height: "8rem", marginLeft: "0.5rem" }}
          />
        </div>
        <div class="col-sm-3 mt-5">
          <img
            src="/Images/Frame8.png"
            class="img-fluid"
            alt="eye"
            style={{ width: "13rem", height: "8rem", marginLeft: "1rem" }}
          />
        </div>
        <div class="col-sm-3 mt-5">
          <img
            src="/Images/Frame9.png"
            class="img-fluid"
            alt="mental health"
            style={{ width: "13rem", height: "8rem", marginLeft: "1.5rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageTop;
