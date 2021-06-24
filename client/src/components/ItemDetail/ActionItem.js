import { useState, useContext, useReducer, useEffect } from "react";
import { Button, Box, makeStyles } from "@material-ui/core";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import clsx from "clsx";
import { addtoCart } from "../../redux/actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { LoginContext } from "../../context/ContextProvider";
import { useHistory } from "react-router-dom";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
const useStyle = makeStyles({
  leftContainer: {
    minWidth: "40%",
    // textAlign: 'center',
    padding: "40px 0 0 80px",
  },
  productImage: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  button: {
    width: "46%",
    borderRadius: 2,
    height: 50,
  },
  addToCart: {
    background: "#ff9f00",
    color: "#FFF",
  },
  buyNow: {
    background: "#fb641b",
    color: "#FFF",
  },
});

const ActionItem = ({ product }) => {
  const classes = useStyle();
  const history = useHistory();
  const { account } = useContext(LoginContext);
  const { id, price, detailUrl, title } = product;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  // const addItemtoCart = () => {
  //   dispatch(addtoCart(product.id));
  //   history.push(`/cart`);
  // };

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "piyushjoshi1901@gmail.com",
    });
    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  const addItemToCart = () => {
    dispatch(addtoCart(id, quantity));
    history.push("/cart");
  };

  return (
    <Box className={classes.leftContainer}>
      <img src={product.detailUrl} className={classes.productImage} />
      <br />
      <Button
        className={clsx(classes.button, classes.addToCart)}
        style={{ marginRight: 10 }}
        variant="contained"
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add to Cart
      </Button>
      <Button
        className={clsx(classes.button, classes.buyNow)}
        variant="contained"
        onClick={() => buyNow()}
      >
        <Flash /> Buy Now
      </Button>
    </Box>
  );
};

export default ActionItem;