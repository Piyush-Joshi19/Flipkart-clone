import React from "react";
import { navData } from "../../constants/data";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
const Navbar = () => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      {navData.map((data) => (
        <Box key={data.id} className={classes.container}>
          <img className={classes.image} src={data.url} alt="navimage" />
          <Typography className={classes.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
