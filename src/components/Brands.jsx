import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { protection, quality, support } from "../assets/icons";

export default function Brands() {
  return (
    <section className="brandSection">
      <Container className="py-5">
        <Row className="py-5">
          <Col md="3">
            <div className="d-flex align-items-center gap-2">
              <span>
                <img src={quality} alt="" className="img-fluid" width={40} />
              </span>
              <div className="">
                <h5 className="p-0 m-0 fw-semibold">High Quality</h5>
                <span className="text-muted">crafted from top materials</span>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="d-flex align-items-center gap-2">
              <span>
                <img src={protection} alt="" className="img-fluid" width={40} />
              </span>
              <div className="">
                <h5 className="p-0 m-0 fw-semibold">Warranty Protection</h5>
                <span className="text-muted">Over 2 years</span>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="d-flex align-items-center gap-2">
              <span>
                <img src={protection} alt="" className="img-fluid" width={40} />
              </span>
              <div className="">
                <h5 className="p-0 m-0 fw-semibold">Free Shipping</h5>
                <span className="text-muted">Order Over 150 $</span>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="d-flex align-items-center gap-2">
              <span>
                <img src={support} alt="" className="img-fluid" width={40} />
              </span>
              <div className="">
                <h5 className="p-0 m-0 fw-semibold">24 / 7 Support</h5>
                <span className="text-muted">Dedicated Support</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
