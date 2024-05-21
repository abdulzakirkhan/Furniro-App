import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SliderSwiper from "./SliderSwiper";
export default function Slider() {
  return (
    <section id="slider">
      <Container className="py-3">
        <Row className="align-items-center">
          <Col md="5">
            <h1 className="heading">50 + Beautiful rooms inspiration</h1>
            <p className="fs-15 text-muted">
              Our Designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <Button className="custbtn border-0 rounded-0">Explore More</Button>
          </Col>
          <Col md="7">
            <SliderSwiper />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
