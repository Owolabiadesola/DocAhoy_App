import React from "react";

const OurservicesBody = () => {
  return (
    <div class="mt-5 mx-5">
      <h4>Available Specialists</h4>
      <hr />
      <div class="row mt-4 mx-1">
        <div class="col-sm-3 mt-2">
          <ul style={{ listStyle: "none" }}>
            <li>General practitioner </li>
            <hr />
            <li>Denistry</li>
            <hr />
            <li>Urgent care</li>
            <hr />
            <li>OBGYNs</li>
            <hr />
          </ul>
        </div>
        <div class="col-sm-3 mt-2">
          <ul style={{ listStyle: "none" }}>
            <li>Psychiatrist</li>
            <hr />
            <li>Pediatric</li>
            <hr />
            <li>Pharmacist </li>
            <hr />
            <li>Dermatologist</li>
            <hr />
          </ul>
        </div>
        <div class="col-sm-3 mt-2">
          <ul style={{ listStyle: "none" }}>
            <li>Optometrists</li>
            <hr />
            <li>Orthopedic Surgeons</li>
            <hr />
            <li>Anaesthesiologists </li>
            <hr />
            <li>General Surgeons</li>
            <hr />
          </ul>
        </div>
        <div class="col-sm-3 mt-2">
          <ul style={{ listStyle: "none" }}>
            <li>Veterinarians </li>
            <hr />
            <li>Plastic Surgeon</li>
            <hr />
            <li>Chiropractor</li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurservicesBody;
