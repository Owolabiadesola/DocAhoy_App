import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const HomepageMiddle = () => {
  return (
    <Container>
      <Row className="mx-5">
        <h4 className="mt-5">
          Build a relationship with your doctor and feel heard
        </h4>
        <Col className="mt-3" xs={4} sm={4} ms={4}>
          <img src="/Images/Vector (10).png" class="img-fluid" alt="topimg" />
        </Col>
        <Col className="mt-3" xs={4} sm={4} ms={4}>
          <img src="/Images/Vector (11).png" class="img-fluid" alt="topimg" />
        </Col>
        <Col className="mt-3" xs={4} sm={4} ms={4}>
          <img src="/Images/Vector (12).png" class="img-fluid" alt="topimg" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomepageMiddle;
