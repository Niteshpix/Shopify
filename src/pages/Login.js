import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";

import React from "react";

function Login() {

  const paperStyle={padding :20,height:'60vh',width:600, margin:"20px auto",}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField 
            label="Username"
            placeholder="Enter username"
            variant="outlined"
            fullWidth
            required
          />
          <TextField style={{marginTop:"12px"}}
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?<Link to={"/signup"}>
              <Button color="inherit">SignUp</Button>
              </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
