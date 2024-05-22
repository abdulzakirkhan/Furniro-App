import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { room } from "../assets/images";

export default function ShoppingCarts() {
  return (
    <Container>
      <Row className="g-4">
        <Col md="12" className="p-0">
          <div className="d-flex justify-content-between align-items-center shadow-lg rounded-3 p-3">
            <div className="img-box">
              <img
                src={room}
                alt=""
                className="img-fluid rounded-3"
                style={{ height: "120px" }}
              />
            </div>
            <div className="d-flex flex-column gap-1">
              <h6>Asgar Sofa</h6>
              <p>
                <span>1</span> x{" "}
                <span className="t">
                  Rs: <span>2400.000</span>
                </span>
              </p>
            </div>
            <div className="">
              <Button>x</Button>
            </div>
          </div>
        </Col>
        <Col md="12" className="p-0">
          <div className="d-flex justify-content-between align-items-center p-3 rounded-3 shadow-lg">
            <div className="img-box">
              <img
                src={room}
                alt=""
                className="img-fluid rounded-3"
                style={{ height: "120px" }}
              />
            </div>
            <div className="d-flex flex-column gap-1">
              <h6>Asgar Sofa</h6>
              <p>
                <span>1</span> x{" "}
                <span className="t">
                  Rs: <span>2400.000</span>
                </span>
              </p>
            </div>
            <div className="">
              <Button>x</Button>
            </div>
          </div>
        </Col>
        <Col md="12" className="mt-5 pt-5">
          <div className="d-flex justify-content-between align-items-center border-bottom">
          <span>Subtotal</span>
          <p><span>Rs: </span> <span className="t">122333</span></p>
          </div>
          <div className="d-flex justify-content-between mt-3">
          <Button className="bg-transparent text-black rounded-4 border-black px-5">Cart</Button>
          <Button className="bg-transparent text-black rounded-4 border-black px-5">CheckOut</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
