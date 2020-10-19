import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  head: {
    background: "#292826",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
  },
  img: {
    width: "2rem",
    height: "2rem",
    marginRight: theme.spacing(1),
  },
  bar: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-evenly",
  },
}));

const Header = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    navigate(pageURL);
    setAnchorEl(null);
  };

  const menuItems = [
    {
      title: 'Atlas Grzybów',
      url: '/atlas'
    },
    {
      title: 'Identyfikacja Grzybów',
      url: '/identyfikacja'
    },
    {
      title: 'Mapa występowania',
      url: '/mapa'
    }
  ]

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.head}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => handleMenuClick("/")}
          >
            <img
              className={classes.img}
              src="images/mushroom.png"
              alt="icon"
            ></img>
          </IconButton>
          <Typography variant="h6" className={classes.title}>Mushrooming</Typography>
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon></MenuIcon>
              </IconButton>
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
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(mItem => {
                  const {title, url} = mItem;
                  return <MenuItem key={url} onClick={() => handleMenuClick(url)}>{title}</MenuItem>
                  })
                }
              </Menu>
            </div>
          ) : (
            <div className={classes.bar}>
              {menuItems.map(mItem => {
                const {title, url} = mItem;
                return <Button
                  key = {url}
                  variant='contained'
                  size='small'
                  onClick={() => handleMenuClick(url)}>{title}
                  </Button>
                })
              }
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
