import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const LoginSuccessBody = () => {
  return (
    <div>
      <h4 class="mt-5 mx-5">Find Doctors and Specialists by City</h4>
      <div class="row mt-4 mx-1">
        <div class="col-sm-3 mt-2">
          <ul style={{ listStyle: "none" }}>
            <li>
              <a
                href="/DoctorsinLagos"
                style={{ textDecoration: "none", color: "#161F1F" }}
              >
                Lagos
              </a>
            </li>
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
            <li>
              <a
                href="/DoctorsinAbuja"
                style={{ textDecoration: "none", color: "#161F1F" }}
              >
                Abuja
              </a>
            </li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
            <li>
              {" "}
              <a
                href="/DoctorsinIbadan"
                style={{ textDecoration: "none", color: "#161F1F" }}
              >
                Ibadan
              </a>
            </li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
          </ul>
        </div>
        <div class="col-sm-3 mt-2">
          <ul style={{ listStyle: "none" }}>
            <li>Uyo </li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
            <li>Kano</li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
            <li>Jos</li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
          </ul>
        </div>
        <div class="col-sm-3 mt-2">
          <ul style={{ listStyle: "none" }}>
            <li>Port harcourt </li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
            <li>Enugu</li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
            <li>Kaduna</li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
          </ul>
        </div>
        <div class="col-sm-3 mt-2">
          <ul style={{ listStyle: "none" }}>
            <li>Calabar </li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
            <li>Owerri</li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
            <li>Owerri</li>{" "}
            <span>
              <RiArrowDropDownLine
                style={{
                  margin: "-3rem 0 0 9rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </span>
            <hr style={{ marginTop: "-0.4rem" }} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccessBody;
