import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart, removeFromCart } from "../../redux/actions/cartAction";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartIem";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import TotalView from "./TotalView";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const useStyle = makeStyles({
  component: {
    marginTop: 55,
    padding: "30px 135px",
    display: "flex",
  },
  leftComponent: {
    width: "67%",
    marginRight: 15,
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    borderTop: "1px solid #f0f0f0",
  },
  placeOrder: {
    display: "flex",
    marginLeft: "auto",
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 51,
  },
});

const Cart = ({ match }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;

  useEffect(() => {
    if (cartItems && match.params.id !== cartItems.id)
      dispatch(addtoCart(match.params.id));
    console.log(cartItems);
  }, [dispatch, cartItems, match]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "codeforinterview01@gmail.com",
    });
    var information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };
  return (
    <div>
      {cartItems.length ? (
        <Box className={classes.component}>
          <Box className={classes.leftComponent}>
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <Box className={classes.bottom}>
              <Button
                onClick={() => buyNow()}
                variant="contained"
                className={classes.placeOrder}
              >
                Place Order
              </Button>
            </Box>
          </Box>
          <TotalView cartItems={cartItems} />
        </Box>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
