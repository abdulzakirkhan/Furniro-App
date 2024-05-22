import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SmHero from "../components/SmHero";
import { logo } from "../assets/images";
import { location, phone, time } from "../assets/icons";
import Brands from "../components/Brands";

export default function Contact() {
  return (
    <section>
      <SmHero img={logo} title="Contact Us" location="Contact Us" />
      <Container className="mt-5 pt-2">
        <Row className="row">
          <Col
            md="12"
            className="text-center d-flex flex-column align-items-center px-5"
          >
            <h1>Get In Touch With Us</h1>
            <p className="fs-14 w-75 px-5 text-muted">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </Col>
          <Col md="12" className="py-5">
            <Row className="g-3 shadow rounded-4 py-5">
              <Col md="3">
              <div className="d-flex flex-column gap-2">
              <div className="d-flex gap-2">
              <div className="">
              <img src={location} alt="" className="img-fluid" width={20} />
              </div>
              <div className="">
              <h4>Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
              </div>

              <div className="d-flex gap-2">
              <div className="">
              <img src={phone} alt="" className="img-fluid" width={20} />
              </div>
              <div className="">
              <h4>Phone</h4>
              <p className="m-0">Mobile: +(84) 546-6789</p>
              <p className="m-0">Hotline: +(84) 456-6789</p>
              </div>
              </div>


              <div className="d-flex gap-2">
              <div className="">
              <img src={time} alt="" className="img-fluid" width={22} />
              </div>
              <div className="">
              <h4>Working Time</h4>
              <p className="m-0">Monday-Friday: 9:00 - 22:00
              Saturday-Sunday: 9:00 - 21:00</p>
              </div>
              </div>

              </div>
              </Col>
              <Col md="6">
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column sm="8">
                    Your Name
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="text" placeholder="Name" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                  <Form.Label column sm="8">
                    Email Address
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="text" placeholder="Email" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                  <Form.Label column sm="8">
                    Subject
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="text" placeholder="Subject"  />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                  <Form.Label column sm="8">
                    Message
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control as="textarea" className="textarea" rows={4} placeholder="Subject"  />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                  <Col sm="8">
                     <Button type="submit" className="border-0 custbtn rounded-1 formbtn">Send</Button>
                  </Col>
                </Form.Group>
              </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Brands />
    </section>
  );
}
