import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function SmHero(props) {
  return (
    <section id="shopBg">
      <Container className="mt-5 pt-2">
        <Row>
          <Col md="12" className="mt-5 pt-5">
            <div className="text-center py-2">
              <img src={props.img} alt="" className="img-fluid" width={50} />
            </div>
            <h1 className="m-0 text-center">{props.title}</h1>
            <p className="m-0 text-center fs-16">
              <span>
                Home {">"} {props.location}
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
