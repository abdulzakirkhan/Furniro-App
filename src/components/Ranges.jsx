import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { card1, card3, room } from '../assets/images'

export default function Ranges() {
  return (
    <section id="ranges">
        <Container className="py-5">
          <Row className="">
            <Col md="12" className="text-center">
              <h3>Browse The Range</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi.
              </p>
            </Col>
            <Col md="4">
              <Card className="border-0 p-0">
                <Card.Body className="p-0">
                  <img src={card1} alt="" className="img-fluid" />
                </Card.Body>
                <Card.Footer className="border-0 text-center bg-transparent">
                  <span className="fs-16">Dining</span>
                </Card.Footer>
              </Card>
            </Col>
            <Col md="4">
              <Card className="border-0">
                <Card.Body className="p-0">
                  <img src={room} alt="" className="img-fluid" />
                </Card.Body>
                <Card.Footer className="border-0 text-center bg-transparent">
                  <span className="fs-16">Living</span>
                </Card.Footer>
              </Card>
            </Col>
            <Col md="4">
              <Card className="border-0">
                <Card.Body className="p-0">
                  <img src={card3} alt="" className="img-fluid" />
                </Card.Body>
                <Card.Footer className="border-0 text-center bg-transparent">
                  <span className="fs-16">Bed Room</span>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
  )
}
