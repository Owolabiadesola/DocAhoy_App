import React from "react";

const HomepageMiddle = () => {
  return (
    <div>
      <h4 class="mx-5" style={{ marginTop: "5rem" }}>
        Build a relationship with your doctor and feel heard
      </h4>
      <div class="row mt-5">
        <div class="col-sm-4">
          <img
            src="/Images/Vector (10).png"
            class="img-fluid float-end"
            alt="topimg"
            style={{
              width: "17rem",
              height: "17rem",
            }}
          />
        </div>
        <div class="col-sm-4">
          <img
            src="/Images/Vector (11).png"
            class="img-fluid float-end"
            alt="topimg"
            style={{
              width: "17rem",
              height: "17rem",
              marginRight: "2rem",
            }}
          />
        </div>
        <div class="col-sm-4">
          <img
            src="/Images/Vector (12).png"
            class="img-fluid float-end"
            alt="topimg"
            style={{
              width: "17rem",
              height: "17rem",
              marginRight: "4rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageMiddle;
