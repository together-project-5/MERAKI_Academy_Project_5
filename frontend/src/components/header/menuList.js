import React, { useState, useEffect } from "react";
import axios from "axios";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import "./header.css";
import useStyles from "./style";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import useTheme from "../darkMode/useTheme";
import ToggleMode from "../darkMode/ToggleMode";
import style from "styled-theming";
import TemporaryDrawer from "./../header/list";
import { useDispatch } from "react-redux";
import { setPost } from "../../reducers/post";
import SearchTitl from "../search/index";
import { setSearchTitle } from "../../reducers/search";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/post`)
      .then((res) => {
        dispatch(setPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/post`)
      .then((res) => {
        dispatch(setPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    history.push("/");
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const chat = () => {
    history.push("/chat");
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  let search = "";

  const searchPost = (e) => {
    axios
      .get(`http://localhost:5000/post/title/${search}`)
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBackground = style("mode", {
    light: "#EEE",
    dark: "#111",
  });

  const getForeground = style("mode", {
    light: "#111",
    dark: "#EEE",
  });

  const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
}
`;

  const theme = useTheme();

  return (
    <div className="MuiToolbar-regular">
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >

          </IconButton> */}
            <Typography
              onClick={handleClick}
              className="websiteName"
              variant="h6"
              noWrap
            >
              Together
            </Typography>

            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              className="headerSearch-bar"
              onChange={(e) => {
                dispatch(setSearchTitle(e.target.value));
              }}
              placeholder="Search"
            />
            <SearchIcon
              className="headerSearch-button"
              onClick={(e) => {
                history.push("/search");
              }}
            >
              search
            </SearchIcon>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <ThemeProvider theme={theme}>
                  <GlobalStyle />
                  <ToggleMode />
                </ThemeProvider>
              </IconButton>
              <IconButton
                onClick={chat}
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <TemporaryDrawer />
            </div>

            <div className={classes.sectionMobile}></div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </div>
  );
}
