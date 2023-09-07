import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
export default class SignupSuccessAlert extends Component {
  // Alert
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      display: true,
    };
  }
  handleClick() {
    this.setState({
      display: false,
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <div>
              {this.state.display && (
                <div
                  className={
                    "alert alert-" +
                    this.props.type +
                    " alert-dismissible mt10 "
                  }
                >
                  {this.props.message}
                  {/* Styling the Alert */}
                  <button
                    type="button"
                    className="close "
                    onClick={this.handleClick}
                    data-dismiss="alert"
                    aria-label="Close"
                    style={{
                      backgroundColor: "#55AEAD",
                      border: "1px solid #55AEAD",
                      margin: "auto",
                      borderRadius: "3px",
                      paddingTop: "-4rem",
                    }}
                  >
                    <span
                      class="text-white"
                      style={{ marginLeft: "17rem" }}
                      aria-hidden="true"
                    >
                      &times;
                    </span>
                    <span
                      style={{
                        fontSize: "0.6rem",
                        lineHeight: "0.1px",
                        textAlign: "start",
                        color: "white",
                      }}
                    >
                      {/* Alert caption */}
                      <p
                        style={{
                          fontSize: "0.8rem",
                          paddingLeft: " 2rem",
                          marginTop: "-5px",
                        }}
                      >
                        Success
                      </p>
                      <p style={{ paddingLeft: "2rem" }}>
                        Your account has been successfully created
                      </p>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
