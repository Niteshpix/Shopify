import React from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  
} from "@mui/material";


//import { useForm } from "react-hook-form";

function Information({formData, setFormData}) {

  // const {register, handleSubmit,
  //      formState: { errors },
  //      } = useForm();
  
  
 // console.log(formData)


  return (
    <div>
      <form>
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
            margin: "auto",
            
          }}
        >
          <Grid
            container
            spacing={2}
            style={{
              marginTop: "30px",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={6} >
              <TextField
              fullWidth
                label="FirstName"
                name="FirstName"
                onChange={(e) => {
                  setFormData({ ...formData, firstName: e.target.value });
                }}
                value={formData.firstName}
                

                // {...register("firstName", {
                //   required: "First Name is required.",
                // })}
                // error={Boolean(errors.firstName)}
                // helperText={errors.firstName?.message}
              
              />
              <TextField
              fullWidth
                id="LastName"
                label="LastName"
                name="lastName"
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                }}
                value={formData.lastName}


                // {...register("lastName", {
                //   required: "Last Name is required.",
                // })}
                // error={Boolean(errors.lastName)}
                // helperText={errors.lastName?.message}
                 style={{marginTop:"10px"}}
              />

              <TextField
                fullWidth
                label="Email"
                id="fullWidth"
                name="email"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                value={formData.email}

                // {...register("email", {
                //   required: "E-mail Address is required.",
                // })}
                // error={Boolean(errors.email)}
                // helperText={errors.email?.message}
                 style={{marginTop:"10px"}}
              />
              <FormControl style={{ display:'flex' }} >
                <FormLabel id="demo-radio-buttons-group-label" style={{ display:'flex' }}>
                  Gender
                </FormLabel>
                <div className="radio-buttons" onChange={(e) => {
                  setFormData({ ...formData, gender: e.target.value });
                }}>

                Male
                <input
                type='radio'
                name="gender"
                value='male'
                />
                
                Female
                <input
                type='radio'
                name="gender"
                value='female'

                />

                </div>
              </FormControl>
             
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                name="phone"
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                }}                
                value={formData.phone}


                // {...register("email", {
                //   required: "E-mail Address is required.",
                // })}
                // error={Boolean(errors.email)}
                // helperText={errors.email?.message}
              />
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                name="address"
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                }}                
                value={formData.address}


                // {...register("email", {
                //   required: "E-mail Address is required.",
                // })}
                // error={Boolean(errors.email)}
                // helperText={errors.email?.message}
              />
            </Grid>
          </Grid>
        
        </Box>

      </form>
    </div>
  );
}

export default Information;
