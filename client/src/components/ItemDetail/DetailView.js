import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/productAction";
import ProductDetail from "./ProductDetail";
import ActionItem from "./ActionItem";
import { getProductById } from '../../service/api';
import {
  Box,
  Typography,
  makeStyles,
  CircularProgress,
  Button,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    background: "#FFFFFF",
    margin: "0 80px",
    display: "flex",
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  price: {
    fontSize: 28,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
});

const data = {
  id: "",
  url: "",
  detailUrl: "",
  title: {
    shortTitle: "",
    longTitle: "",
  },
  price: {
    mrp: 0,
    cost: 0,
    discount: "",
  },
  description: "",
  discount: "",
  tagline: "",
};

const DetailView = ({history, match }) => {
  const classes = useStyles();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const productDetails = useSelector((state) => state.getProductDetails);
  const {loading, product } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    if(product && match.params.id !== product.id)   
        dispatch(getProductDetails(match.params.id));
}, [dispatch, product, match, loading]);
  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length && (
        <Box className={classes.container}>
          <ActionItem product={product} />
          <Box className={classes.rightContainer}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.greyTextColor, classes.smallText)}
              style={{ marginTop: 5 }}
            >
              8 Ratings & 1 Reviews
              <span>
                <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>₹{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <ProductDetail product={product} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailView;
