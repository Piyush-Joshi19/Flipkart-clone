import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";
import { Box, makeStyles } from "@material-ui/core";
// import { products } from "../../constants/data";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productAction";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#f2f2f2",
  },
  rightWrapper: {
    background: "#FFFFFF",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
    overflowX: "hidden",
  },
});

const Home = () => {
  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "83%" }}>
            <Slide timer={true} title="Deal of the Day" products={products} />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} alt="Ad" style={{ width: 230 }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="Discount for you" products={products} />
        <Slide timer={false} title="Suggested Item" products={products} />
        <Slide timer={false} title="Top Selection" products={products} />
        <Slide timer={false} title="Recomended Item" products={products} />
      </Box>
    </div>
  );
};

export default Home;
