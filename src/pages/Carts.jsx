import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import SmHero from "../components/SmHero";
import { logo, room } from "../assets/images";
import Brands from "../components/Brands";
import { dalete } from "../assets/icons";
import { useNavigate } from "react-router-dom";

export default function Carts() {
  const navigate =useNavigate();
  const handleCheckOut = () => {
    console.log("handleCheckOut clicked");
    navigate("/check-out")
  };
  return (
    <section className="pt-1 mt-2">
      <SmHero img={logo} title="Carts" location="Cart" />
      <Container className="py-5 my-3">
        <Row className="">
          <Col md="8">
            <Table borderless hover>
              <thead className="row-tab bg-black">
                <tr className="row-tab">
                  <th className="row-tab text-center">Product</th>
                  <th className="row-tab">Price</th>
                  <th className="row-tab">Quantity</th>
                  <th className="row-tab">Subtotal</th>
                  <th className="row-tab"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>
                      <img
                        src={room}
                        alt=""
                        className="img-fluid rounded-3"
                        width={90}
                      />
                    </span>
                    <span className="px-3 text-muted">Asghard Sofa</span>
                  </td>
                  <td className="vertical-align">
                    <span className="text-muted">
                      Rs <span>25000.000</span>
                    </span>
                  </td>
                  <td className="vertical-align">
                    <span className="quantity border rounded-3">1</span>
                  </td>
                  <td className="vertical-align">
                    <span>210020</span>
                  </td>
                  <td className="vertical-align">
                    <Button className="bg-transparent border-0">
                      <span>
                        <img
                          src={dalete}
                          alt=""
                          className="img-fluid"
                          width={20}
                        />
                      </span>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md="4">
            <Card className="border-0 checkout-card rounded-0">
              <Card.Header className="border-0 bg-transparent">
                <Card.Title className="fw-bold text-center">
                  Cart Totals
                </Card.Title>
              </Card.Header>
              <Card.Body className="py-3">
                <div className="d-flex justify-content-between">
                  <span>Total</span>
                  <span className="t fs-16">
                    <span>Rs:</span>
                    <span>2550050</span>
                  </span>
                </div>
                <div className="text-center py-5 mt-5">
                  <Button
                    className="custbtn rounded-3 border-2 border-black che bg-transparent text-black"
                    onClick={handleCheckOut}
                  >
                    Check Out
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Brands />
    </section>
  );
}
