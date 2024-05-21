import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { logo } from "../assets/images";

export default function Footer() {
  return (
    <footer>
      <Container className="py-4">
        <Row className="g-3">
          <Col md="12" className="text-center py-2">
            <div className="d-inline-flex align-items-center gap-1">
              <img src={logo} alt="" className="img-fluid" width={100} />
              <span className="fs-22">Furniro</span>
            </div>
          </Col>
        </Row>
        <Row className="g-2 mt-2">
          <Col md="2">
            <h4>Products</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Landing Page
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  PopUp Builder
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Web Design
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Content
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Integrations
                </a>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h4>Use Cases</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Web Designers
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Marketers
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Small Business
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Website Builder
                </a>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h4>Resources</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Web Designers
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Marketers
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Small Business
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Website Builder
                </a>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h4>Company</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Web Designers
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Marketers
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Small Business
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#">
                  Website Builder
                </a>
              </li>
            </ul>
          </Col>
          <Col md="4">
            <Form>
              <Form.Control className="mb-2" type="text" placeholder="First Name" />
              <Form.Control className="mb-2" type="text" placeholder="Last Name" />
              <Form.Control className="mb-2" type="number" placeholder="Phone" />
              <Form.Control type="email" placeholder="Email" />
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
