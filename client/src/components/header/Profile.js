import React, { useState } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    marginLeft: 20,
    fontSize: 14,
    textDecoration: "none",
    color: "#FFFFFF",
  },
});

const Profile = ({ account, setAccount }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setAccount(false);
  };
  return (
    <div>
      <Link>
        <Typography onClick={handleClick} style={{ cursor: "pointer" }}>
          {account}
        </Typography>
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNewIcon fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
