// import { connect } from "react-redux";
import { connect } from "react-redux";
import { addToCart } from "../Services/actions/actions";
import Header from "../Header";
const mapStateToProps = (state) => ({
  cardData: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Home;
