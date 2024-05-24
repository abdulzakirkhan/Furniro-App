import React, { useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { cardsData } from "./cardsData";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxStore/cartSlice";

export default function Cards() {
  const dispatch = useDispatch()
  const [alert, setAlert] = useState("");
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAlert(product.itemName + " " + "Add To Cart Success")
    setTimeout(() => {
      setAlert("")
    }, 2000);
  };

  // console.log(props)
  return (
    <Container className="py-5">
      <Row className="g-md-4 g-3">
       {alert &&  <Alert variant="success" className="al text-center">{alert}</Alert>}
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
                 onClick={() =>handleAddToCart(product)}
                >
                  Add To Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
