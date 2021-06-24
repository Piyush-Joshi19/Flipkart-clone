import React, { useState, useContext } from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import LoginDialog from "../login/Login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";
const useStyle = makeStyles({
  login: {
    backgroundColor: "#FFFFFF",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
  },
  wrapper: {
    marginLeft: " auto",
    display: "flex",
    alignItems: "center",
    marginRight: "7%",
    "& > *": {
      marginRight: 50,
      textDecoration: "none",
      color: "#FFFFFF",
    },
  },
  container: {
    display: "flex",
  },
});

const HeaderButtons = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const { cartItems } = useSelector((state) => state.cart);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box className={classes.wrapper}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Link>
          <Button
            variant="contained"
            onClick={() => handleClickOpen()}
            className={classes.login}
          >
            Login
          </Button>
        </Link>
      )}

      <Typography style={{ marginTop: 5 }}>More</Typography>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default HeaderButtons;
