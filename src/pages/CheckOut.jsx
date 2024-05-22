import React from "react";
import SmHero from "../components/SmHero";
import Brands from "../components/Brands";
import { logo } from "../assets/images";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function CheckOut() {
  return (
    <section>
      <SmHero img={logo} title="Check Out" location="Check out" />
      <Container className="py-5">
        <Row className="py-5">
          <Col md="6">
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <div column sm="6" className="w-50">
                  <Form.Label>First Name</Form.Label>
                  <div sm="">
                    <Form.Control type="text" placeholder="First Name" />
                  </div>
                </div>
                <div column sm="6" className="w-50">
                  <Form.Label sm="">
                    Last Name
                  </Form.Label>
                  <div sm="">
                    <Form.Control type="text" placeholder="Last Name" />
                  </div>
                </div>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                  <Form.Label column sm="12">
                    Street Address
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control type="text" placeholder="Add" />
                  </Col>
                </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                  <Form.Label column sm="12">
                    Town City
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control type="text" placeholder="Town City" />
                  </Col>
                </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                  <Form.Label column sm="12">
                    Zip Code
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control type="number" placeholder="19922" />
                  </Col>
                </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                  <Form.Label column sm="12">
                    Email Address
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control type="email" placeholder="abcd@gmail.com" />
                  </Col>
                </Form.Group>
                <Button type="submit" className="custbtn border-0 rounded-0">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Brands />
    </section>
  );
}
