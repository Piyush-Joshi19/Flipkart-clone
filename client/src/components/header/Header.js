import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  withStyles,
} from "@material-ui/core";
import SearchBar from "./SearchBar";
import HeaderButtons from "./HeaderButtons";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    backgroundColor: "#2874f0",
    height: 55,
  },
  logo: {
    width: 75,
  },
  suburl: {
    width: 10,
    marginLeft: 4,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    textDecoration: "none",
    color: "#FFFFFF",
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
});

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Header = () => {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <div>
      <AppBar className={classes.header}>
        <ToolBar>
          <Link to="/" className={classes.component}>
            <img src={logoURL} alt="logo" className={classes.logo} />
            <Box className={classes.container}>
              <Typography className={classes.subHeading}>
                Explore <span style={{ color: "#ffe500 " }}>Plus</span>
              </Typography>
              <img src={subURL} alt="url" className={classes.suburl} />
            </Box>
          </Link>
          <SearchBar />
          <HeaderButtons />
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Header;
