import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import "./index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing,
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <section className="nav">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar sx={{ marginX: "8rem" }}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Link to={"/"}>
                <Typography variant="h6" className={classes.title}>
                  Shopify
                </Typography>
              </Link>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Register</Button>
              <Button color="inherit">Services</Button>
              <Link to={"/cart"}>
                <Button color="inherit">
                  cart
                  <h4>{cart.length > 0 && cart.length}</h4>
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </section>

      <section>
        <div className="box"></div>
      </section>
    </div>
  );
}

export default Navbar;
