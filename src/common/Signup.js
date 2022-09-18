import { AppBar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link, Route, Routes, }from 'react-router-dom';
import LoginForm from "./Login";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockIcon from '@mui/icons-material/Lock';

  export default function Signup() {

    const[details, setDetails] =useState ({firstname:"", lastname:"", emailaddress : "", password:"", connfirmpassword:"", contactnumber:"" });

   
    const submitHandler = (event)=>{
      event.preventDefault();
      console.log(details);
    };
    
    const lock={
        "margin-left":"47%",
        "background-color":"#e91e63",
        "color":"white",
        "width":"25px",
        "height":"26px",
        "border-radius":"12px",
    
    }
    const signup={
        "margin-left":"41%"
    }

  return (

    <Stack direction="row">
    <Stack style={{"margin-left":"40%" ,"width":"22%","marginTop":"40px"}} spacing={1}>
       
        <Stack style={lock}> <LockOutlinedIcon /></Stack>

      <div style={signup}>
      <Typography variant='h6'>Sign up</Typography>
      </div>

    <TextField id="outlined-basic" variant="outlined" label="First Name" type='name'
     onChange={ e =>  setDetails({...details, firstname: e.target.value})} 
     value ={details.firstname}
     /> 

    <TextField id="outlined-basic" label="Last Name" type='lastname' variant="outlined" 
     onChange={ e => setDetails({...details, lastname: e.target.value})}value=
     {details.lastname}
     />

    <TextField  id="outlined-basic" label="Email Address" type='emailaddress' variant="outlined" 
     onChange={ e => setDetails({...details, emailaddress: e.target.value})}value=
     {details.emailaddress}
    />

    <TextField  id="outlined-basic" label="Password" type='password' variant="outlined"
     onChange={ e => setDetails({...details, password: e.target.value})}value=
     {details.password}
     />

<TextField  id="outlined-basic" label="Confirm Password" type='confirmpassword' variant="outlined"
     onChange={ e => setDetails({...details, connfirmpassword: e.target.value})}value=
     {details.confirmpassword}
     />

    

    <TextField  id="outlined-basic" label="Contact Number" type='contactnumber' variant="outlined"
     onChange={ e => setDetails({...details, contactnumber: e.target.value})}value=
     {details.contactnumber}
     />

    <Button style={{"background-color":"#3f51b5"}} variant="contained" onClick={submitHandler}> SIGNUP</Button>
    
    <Link  style={{"color":"#3f51b5",}} to="/login"> Already have an account? Sign in</Link>

    <Stack>
        {/* <Route path= "/signin"  element={<Loginfrom/>} /> */}
    </Stack>

  </Stack>

  </Stack>


  );
}