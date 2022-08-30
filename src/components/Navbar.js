import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/Slices/authSlice";
import { toast } from "react-toastify";

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
  const classes = useStyles("theme");
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const [isLogged, setisLogged] = useState();

  useEffect(() => {
    checkStorage();
  }, [isLogged]);

  function checkStorage() {
    if (localStorage.getItem("token", "token")) {
      setisLogged(true);
    } else {
      setisLogged(false);
    }
  }

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

              <Button className="nav-link">
                {!isLogged ? (
                  <Link to="/signup">Signup</Link>
                ) : (
                  <Link to="/">{""}</Link>
                )}
              </Button>

              <Button className="nav-link">
                {!isLogged ? (
                  <Link to="/login">Login</Link>
                ) : (
                  <Link
                    to="/"
                    onClick={() => {
                      dispatch(logoutUser());
                      toast.warning("Logged out!", { position: "top-right" });
                      setisLogged(false);
                    }}
                  >
                    Logout
                  </Link>
                )}
              </Button>

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
    </div>
  );
}

export default Navbar;
