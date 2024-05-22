import React from "react";
import SmHero from "../components/SmHero";
import Brands from "../components/Brands";
import { logo } from "../assets/images";
import { Col, Container, Row } from "react-bootstrap";

export default function Blogs() {
  return (
    <section>
      <SmHero img={logo} title="Blog" location="Blog" />
      <section className="soon py-5">
        <Container className="py-5">
            <Row className="py-5">
            <Col md="12"><h1 className="text-center text-white py-5">Blogs Not Available</h1></Col>
            </Row>
        </Container>
      </section>
      <Brands />
    </section>
  );
}
