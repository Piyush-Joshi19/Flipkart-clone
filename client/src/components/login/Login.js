import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { authenticateSignup, authenticateLogin } from "../../service/api";

const useStyle = makeStyles({
  component: {
    height: "83vh",
    width: "93vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "83vh",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#2875f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "20px 20px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: "20px",
    },
  },
  text: {
    color: "#878787",
    fontSize: "12px",
  },
  loginBtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#FFFFFF",
    height: 48,
    borderRadius: 2,
  },
  reqBtn: {
    textTransform: "none",
    background: "#FFFFFF",
    color: "#2874F0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  createText: {
    textAlign: "center",
    marginTop: "auto",
    fontSize: "14px",
    color: "#2874f0",
    fontWeight: 600,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    color: "#ff6161",
    marginTop: 10,
    fontWeight: 600,
    lineHeight: 0,
  },
});

const initialState = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders,Wishlist and Recommendiations",
  },
  signup: {
    view: "signup",
    heading: "Look like you're new here",
    subheading: "Sign up to get started",
  },
};

const signupInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValue = {
  username: "",
  password: "",
};

const Login = ({ open, setOpen, setAccount }) => {
  const classes = useStyle();
  const [account, toggleAccount] = useState(initialState.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, setError] = useState(false);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialState.signup);
  };
  const toggleUserAccount = () => {
    toggleAccount(initialState.signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) {
      setError(true);
      return;
    }
    handleClose();
    setAccount(login.username);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subheading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField
                name="username"
                onChange={(e) => onValueChange(e)}
                label="Enter Username"
              />
              <TextField
                name="password"
                onChange={(e) => onValueChange(e)}
                label="Enter Password"
              />
              {error && (
                <Typography className={classes.error}>
                  Invalid Username or Pasword
                </Typography>
              )}
              <Typography className={classes.text}>
                By Continuing, you agree to flipkart's terms of Use and Privacy
                Policy
              </Typography>
              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={() => loginUser()}
              >
                Login
              </Button>
              <Typography
                style={{ textAlign: "center" }}
                className={classes.text}
              >
                OR
              </Typography>
              <Button className={classes.reqBtn} variant="contained">
                Request OTP
              </Button>
              <Typography
                onClick={() => toggleUserAccount()}
                className={classes.createText}
              >
                New to Flipkart, Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                name="firstname"
                label="Enter First Name"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="lastname"
                label="Enter Last Name"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="username"
                label="Enter Username"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="email"
                label="Enter Email"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="password"
                label="Enter Password"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="phone"
                label="Enter Number"
                onChange={(e) => onInputChange(e)}
              />

              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={() => signupUser()}
              >
                Signup
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
