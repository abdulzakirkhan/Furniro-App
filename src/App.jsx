import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Carts from "./pages/Carts";
import CheckOut from "./pages/CheckOut";
import CardsContainer from "./components/containers/CardsContainer";
import HeaderCoontainer from "./components/containers/HeaderCoontainer";

function App() {
  return (
    <BrowserRouter>
      <HeaderCoontainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<CardsContainer />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/our-blogs" element={<Blogs />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/check-out" element={<CheckOut />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
