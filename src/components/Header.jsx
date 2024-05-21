import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logo } from "../assets/images";
import { heart, search, shopping, user } from "../assets/icons";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-white" fixed="top">
        <Container>
          <Navbar.Brand>
            <span className="d-flex gap-1 align-items-center">
              <img src={logo} alt="" width={40} />{" "}
              <span className="fs-15">Furniro</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="px-4 fs-16">
                 <Link to={"/"} className="text-decoration-none text-black">Home</Link>
              </Nav.Link>
              <Nav.Link className="px-4 fs-16">
                 <Link to={"/shop"} className="text-decoration-none text-black">Shop</Link>
              </Nav.Link>
              <Nav.Link href="#" className="px-4 fs-16">
              <Link to={"/about-us"} className="text-decoration-none text-black">About</Link>
              </Nav.Link>
              <Nav.Link href="#" className="px-4 fs-16">
              <Link to={"/contact-us"} className="text-decoration-none text-black">Contact</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center gap-4">
              <div className="d-flex align-items-center gap-4">
                <span>
                  <img src={user} alt="" width={20} />
                </span>
                <span>
                  <img src={search} alt="" width={20} />
                </span>
                <span>
                  <img src={heart} alt="" width={20} />
                </span>
              </div>
              <Button className="bg-transparent border-0 m-0 p-0">
                <img src={shopping} alt="" width={20} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
