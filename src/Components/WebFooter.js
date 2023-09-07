import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
export default class WebFooter extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <img
              src="/Images/Group 60.png"
              alt="img"
              className="img-fluid mt-5"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
