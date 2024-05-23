import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { biView, filter, line } from "../assets/icons";
import Cards from "../components/Cards";
import Brands from "../components/Brands";
import SmHero from "../components/SmHero";
import { logo } from "../assets/images";
import { cardsData } from "../components/cardsData";

export default function Shop(props) {
  return (
    <section className="mt-1 pt-1">
      <SmHero img={logo} title="Shop" location="Shop" />
      <section className="filter-section">
        <Container>
          <Row className="py-2">
            <Col md="12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <Button className="bg-transparent border-0 d-flex align-items-center gap-3 fs-13">
                    <span>
                      <img
                        src={filter}
                        alt=""
                        className="img-fluid m-0"
                        width={22}
                      />
                    </span>
                    <span className="fs-14 mt-1 text-black">Filter</span>
                  </Button>
                  <span>
                    <img src={biView} alt="" className="img-fluid" width={22} />
                  </span>
                  <span>
                    <img src={line} alt="" className="img-fluid" width={1.5} />
                  </span>
                  <span className="fs-14">Showing 1-18 of 32 results</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-2">Show</div>
                  <span>Default</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="py-5">
      <Row className="g-md-4 g-3">
        {cardsData.map((product, index) => (
          <Col md="3" key={index}>
            <Card className="border-0 position-relative">
              <span className="position-absolute end-12 topBrand">
                {product.topBrand}
              </span>
              <Card.Img
                variant="top"
                src={product.itemImage}
                className="img-fluid"
                style={{ height: "260px" }}
              />
              <Card.Body
                className="d-flex flex-column gap-0 px-2 m-0"
                style={{ backgroundColor: "#f4f5f7" }}
              >
                <h6 className="m-0 px-0">{product.itemName}</h6>
                <p className="text-muted mt-1 mb-0">{product.itemTitle}</p>
                <div className="d-flex m-0 justify-content-between align-items-center p-0">
                  <h6 className="p-0 m-0">{product.newPrice}</h6>
                  <p className="m-0 text-decoration-line-through">
                    {product.oldPrice}
                  </p>
                </div>
              </Card.Body>
              <Card.Footer
                className="border-0 px-2"
                style={{ backgroundColor: "#f4f5f7" }}
              >
                <Button
                  className="w-100 border-0 rounded-0 custbtn"
                  style={{ height: 40 }}
                  onClick={() =>props.addToCartHandler({name:product.itemName,price:product.newPrice})}
                >
                  Add To Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
      <Brands />
    </section>
  );
}
