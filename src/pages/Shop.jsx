import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { biView, filter, line } from "../assets/icons";
import Cards from "../components/Cards";
import Brands from "../components/Brands";
import SmHero from "../components/SmHero";
import { logo } from "../assets/images";

export default function Shop() {
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
                  <span><img src={biView} alt="" className="img-fluid" width={22} /></span>
                  <span><img src={line} alt="" className="img-fluid" width={1.5} /></span>
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
      <Cards />
      <Brands />
    </section>
  );
}
