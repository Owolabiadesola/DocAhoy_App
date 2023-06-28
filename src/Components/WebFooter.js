import React, { Component } from "react";

export default class WebFooter extends Component {
  render() {
    return (
      <div>
        <footer>
          <hr style={{ margin: "6rem 0 0 2.5rem", width: "90%" }} />
          <div class="row  mx-5">
            <div class="col-md-3">
              <h6 class="mt-4" style={{ color: "#236E6D" }}>
                DocAhoy!
              </h6>
              <br />
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-2rem",
                  fontSize: "0.9rem",
                  lineHeight: "2.5rem",
                }}
              >
                <li>Home</li>
                <li>Our Services</li>
                <li>About us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Make An Appointment</li>
              </ul>
            </div>
            <div class="col-md-2">
              <h6
                class="mt-4"
                style={{ marginLeft: "-3rem", color: "#236E6D" }}
              >
                Hmo Insurance
              </h6>
              <br />
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-5rem",
                  fontSize: "0.9rem",
                  lineHeight: "2.5rem",
                }}
              >
                <li>Axa Mansard</li>
                <li>Reliance</li>
                <li>Nhis</li>
                <li>Hygeia</li>
                <li>Avon</li>
                <li>Metro Health</li>
                <li>Alico</li>
                <li>IHMS</li>
              </ul>
            </div>
            <div class="col-md-2">
              <h6
                class="mt-4"
                style={{ marginLeft: "-3.5rem", color: "#236E6D" }}
              >
                Top Specialties
              </h6>
              <br />
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-5.5rem",
                  fontSize: "0.85rem",
                  lineHeight: "2.5rem",
                }}
              >
                <li>Primary Health Care</li>
                <li>Urgent Care</li>
                <li>Dentist</li>
                <li>Cardiologist</li>
                <li>Ear, Nose, Throat</li>
                <li>Neurologist</li>
                <li>Peadiatrician</li>
                <li>Urologist</li>
                <li>Orthopedic Surgeon</li>
              </ul>
            </div>
            <div class="col-md-2">
              <h6
                class="mt-4"
                style={{ marginLeft: "-2.5rem", color: "#236E6D" }}
              >
                Locations
              </h6>
              <br />
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-5rem",
                  fontSize: "0.9rem",
                  lineHeight: "2.5rem",
                }}
              >
                <li>Lagos</li>
                <li>Port Harcourt</li>
                <li>Ondo</li>
                <li>Calabar</li>
                <li>Enugu</li>
                <li>Kaduna</li>
                <li>Jos</li>
                <li>Owerri</li>
                <li>Ibadan</li>
              </ul>
            </div>
            <div class="col-md-3">
              <h6
                class="mt-4"
                style={{ marginLeft: "-5rem", color: "#236E6D" }}
              >
                Are you a Top Doctor or Health Service
              </h6>
              <br />
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-7rem",
                  fontSize: "0.9rem",
                  lineHeight: "2.5rem",
                }}
              >
                <li>List your Practice on DocAhoy</li>
                <li>Learn about DocAhoy for Health Systems</li>
                <li>Become DocAhoy's Partner</li>
                <br />
                <br />
                <li>
                  <h6 style={{ color: "#236E6D" }}> Get the DocAhoyApp</h6>
                </li>
                <li>
                  <img
                    class="img-fluid  "
                    src="/Images/Frame 29 (1).png"
                    alt="img"
                    style={{ width: "9rem", height: "2.3rem" }}
                  />
                </li>
                <li>
                  <img
                    class="img-fluid  "
                    src="/Images/Frame 29.png"
                    alt="img"
                    style={{ width: "9rem", height: "2.3rem" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
