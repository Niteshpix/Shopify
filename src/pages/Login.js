import {
  Alert,
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/Slices/authSlice";

function Login() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 600,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(loginUser(user));
    navigate('/dashboard');
   
  };


  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form className="styleform" onSubmit={handleSubmit}>
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
              {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
            </Button>

            <Typography>
              <Link to={"/"}>Forgot password ?</Link>
            </Typography>
            <Typography>
              Do you have already account ?
              <Link to={"/signup"}>
                <Button color="inherit">SignUp</Button>
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
