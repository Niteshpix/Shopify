import React, { useState } from "react";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "../components/index.css";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/Action";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Register() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 600,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const dispatch = useDispatch();
  const { registerStatus, registerError } = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));

  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2>SignUp</h2>
            <ToastContainer>{toast(registerStatus.message)}</ToastContainer>
            <div style={{ color: "red" }}>{registerStatus.messages}</div>
          </Grid>
          <form className="styleform" onSubmit={handleSubmit}>
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />

            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <Button variant="contained" color="success" type="submit">
              {registerStatus === "pending" ? "Submitting..." : "Register"}
            </Button>
            {registerStatus === "rejected" ? <p>{registerError}</p> : null}

            <Typography>
              Forgot password ?
              <Link to={"/"}>
                <Button color="secondary">click</Button>
              </Link>
            </Typography>
            <Typography>
              Do you have an account ?
              <Link to={"/login"}>
                <Button color="secondary">SignIn</Button>
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default Register;
