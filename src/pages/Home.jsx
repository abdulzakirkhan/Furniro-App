import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Products, Ranges, Slider } from "../components";

export default function Home() {
  return (
    <section>
      <section id="hero" className=" d-flex align-items-center">
        <Container className="mt-5 pt-5">
          <Row className="justify-content-end">
            <Col md="6" className="ms-5">
              <Card className="custCard border-0">
                <Card.Body>
                  <h6>New Arrival</h6>
                  <h6 className="display-3 fw-bold">
                    Discour Our New Collection
                  </h6>
                  <Card.Text className="fs-16">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat vitae aspernatur distinctio neque ratione id
                    exercitationem ab a, deserunt vel nostrum nemo minima
                    nesciunt repellat aliquid provident tempore, debitis qui!
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 bg-transparent">
                  <div className=" pb-3">
                    <Button className="custbtn rounded-0 border-0">
                      BUY NOW
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Ranges />
      <Products />
      <Slider />
    </section>
  );
}
