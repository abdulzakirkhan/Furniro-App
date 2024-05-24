import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../ReduxStore/cartSlice";

export default function ShoppingCarts() {
  const carts = useSelector((state) => state.cart);
  const totalCartPrice = carts.reduce((total, cart) => total + cart.newPrice, 0);
  console.log(carts)
  const dispatch =useDispatch()
  const navigate = useNavigate();
  const handleCart = () => {
    console.log("Cart Btn Clicked");
    navigate("/carts");
  };
  const handleCheckOut = () => {
    console.log("handleCheckOut");
    navigate("/check-out");
  };
  const handleRemove= (id) => {
    dispatch(removeToCart(id))
  }
  return (
    <Container>
      <Row className="g-4">
      {carts.length > 0 ? (
        carts.map((cart, index) => (
          <Col md="12" className="p-0" key={index}>
            <div className="d-flex justify-content-between align-items-center shadow-lg rounded-3 p-3">
              <div className="img-box">
                <img
                  src={cart.itemImage}
                  alt=""
                  className="img-fluid rounded-3"
                  style={{ height: "70px", width: "40px" }}
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <h6>{cart.itemName}</h6>
                <p>
                  <span className="t">
                    Rs: <span>{cart.newPrice}</span>
                  </span>
                </p>
              </div>
              <div>
                <Button onClick={() => handleRemove(cart.id)}>x</Button>
              </div>
            </div>
          </Col>
        ))
      ) : (
        // If carts is empty, display a message
        <Col md="12">
          <p>No items in the cart</p>
        </Col>
      )}
       {/*
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
       */} 

        <Col md="12" className="mt-5 pt-5">
          <div className="d-flex justify-content-between align-items-center border-bottom">
            <span>Subtotal</span>
            <p>
              <span>Rs: </span> <span className="t">{totalCartPrice}</span>
            </p>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Button
              className="bg-transparent text-black rounded-4 border-black px-5"
              onClick={handleCart}
            >
              Cart
            </Button>
            <Button
              className="bg-transparent text-black rounded-4 border-black px-5"
              onClick={handleCheckOut}
            >
              CheckOut
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
