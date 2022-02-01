import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { AccountCircle } from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate } from "react-router";
import axios from "axios";
import { Tooltip } from "@material-ui/core";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const history = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [auth, setAuth] = useState(false);
  const open = Boolean(anchorEl);
    
  useEffect(() => {
    const temp = JSON.parse(sessionStorage.getItem("login"))
      ? JSON.parse(sessionStorage.getItem("login"))
      : false;
    setAuth(temp);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleTransaction() {
    history("/transaction");
  }
  function handleBudget() {
    history("/budget");
  }
  function handleHome() {
    history("/");
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" className={classes.title}>
            Expense Analyser
          </Typography>
              <Tooltip title="Menu">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <div>
                    <MenuItem onClick={handleTransaction}>Transaction</MenuItem>
                    <MenuItem onClick={handleBudget}>Budget</MenuItem>
                    <MenuItem onClick={handleHome}>Logout</MenuItem>
                </div>
              </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
