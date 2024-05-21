import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { p1, p2, p3 } from "../assets/images";

export default function Products() {
  return (
    <section>
      <Container className="pb-4">
        <Row>
          <Col md="12" className="text-center py-2">
            <h1>Produts</h1>
          </Col>
          <Col md="3">
            <Card className="border-0 bg">
              <Card.Img variant="top" src={p1} className="img-fluid" />
              <Card.Body className="d-flex flex-column gap-0 px-2 py-0 m-0">
                <h1 className="m-0 px-0">Syltherine</h1>
                <p className="text-muted py-2">Stylish Cafe chair</p>
                <div className="d-flex m-0 justify-content-between align-items-center p-0">
                  <h4 className="p-0 m-0">Rp 2.500.000</h4>
                  <p className="mt-2 text-decoration-line-through">
                    Rp 3.500.000
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 bg">
              <Card.Img variant="top" src={p2} className="img-fluid" />
              <Card.Body className="d-flex flex-column gap-0 px-2 py-0 m-0">
                <h1 className="m-0 px-0">Syltherine</h1>
                <p className="text-muted py-2">Stylish Cafe chair</p>
                <div className="d-flex m-0 justify-content-between align-items-center p-0">
                  <h4 className="p-0 m-0">Rp 2.500.000</h4>
                  <p className="mt-2 text-decoration-line-through">
                    Rp 3.500.000
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 bg">
              <Card.Img variant="top" src={p3} className="img-fluid" />
              <Card.Body className="d-flex flex-column gap-0 px-2 py-0 m-0">
                <h1 className="m-0 px-0">Syltherine</h1>
                <p className="text-muted py-2">Stylish Cafe chair</p>
                <div className="d-flex m-0 justify-content-between align-items-center p-0">
                  <h4 className="p-0 m-0">Rp 2.500.000</h4>
                  <p className="mt-2 text-decoration-line-through">
                    Rp 3.500.000
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 Card bg position-relative">
              <Card.Img variant="top" src={p2} className="img-fluid" />
              <Card.Body className="d-flex flex-column gap-0 px-2 py-0 m-0">
              <Button className="card-btn border-0">Add To Cart</Button>
                <h1 className="m-0 px-0">Syltherine</h1>
                <p className="text-muted py-2">Stylish Cafe chair</p>
                <div className="d-flex m-0 justify-content-between align-items-center p-0">
                  <h4 className="p-0 m-0">Rp 2.500.000</h4>
                  <p className="mt-2 text-decoration-line-through">
                    Rp 3.500.000
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12" className="py-3 text-center">
          <Button className="show-more rounded-0">Show More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
