import React, { useState } from 'react'
import { Stack , Button, Alert} from '@mui/material'
import LoginForm from "./LoginForm";

export default function Login({show}) {

  const adminUser = {
    email : "admin@gmail.com",
    password : "admin123"
  }

  const [user, setUser] = useState({name : "" , email : ""});
  const [error, setError] = useState("");

  const Login =(details) =>{
    if(details.email === adminUser.email && details.password === adminUser.password){
        
      show(<Button style={{"margin-left" : "90px"}} variant="contained" onClick=
      {Logout}>Logout</Button> );
      
      setUser({name: details.name, email: details.email});
      
      setError("");
      
}


else{
  console.log("not vaild");
  }
}
  
  const ErrorHandle = () => {
    setError("");
  }

  const Logout = () => {
    show("");
    setUser({name : "",email :""})
    show("");
  }
   
  const LoggedIn = <Stack spacing={3}> <h1>Welcome ! {user.name}</h1></Stack>;

  const LogginDetails =(<LoginForm Login={Login} error={ErrorHandle}/>);
   
  const ErrorAlert = error ==="" ? "" : (<Alert severity="error">
    Please enter valid email or password</Alert>); 
  
  const styleVal = {
    "margin-left": "",
    "width" : "25%",
    "background-color" : "#fdf9f9",
    "border-radius": "19px",
    "border": "1px solid",
    "padding": "29px",
    "box-shadow": "5px 5px #d0cbcb"
  }
  
  
  
  return (
    <Stack spacing={2}> 
     <div style={styleVal}>  
     <Stack spacing={4} direction='row'>
     {(user.email !== "") ? LoggedIn  : LogginDetails}
     </Stack>
     {ErrorAlert}
      </div>

    </Stack>
  )
}






// import { Stack,TextField, Button, Typography } from '@mui/material';
// import React,{useState} from 'react'
// import LockIcon from '@mui/icons-material/Lock';
// import { Link } from 'react-router-dom';
// import Signup from './Signup';

// export default function LoginForm({Login, error}) {
//   const[details, setDetails] = useState({name: "",email:"", password:""});

//   const submitHandler = (event) =>{
//     console.log("click")
//     event.preventDefault();
//     Login(details);
//   }

//   const lock={
//     "margin-left":"140px",
//     "background-color":"#e91e63",
//     "color":"white",
//     "border-radius": "20px",
//     "height":"40px",
//     "width":"35px",
//   }

//   const signin={
//     "margin-left":"130px"

//   }
//   return (
//     <Stack spacing={3} style={{"width":"100%"}}>

//         <LockIcon style={lock}></LockIcon>
//         <Typography style={signin}>Signin</Typography>

//         <TextField style={{"background-color":"#e3f2fd"}}  id="outlined-basic" label="Email"variant="outlined" type="email"
//         onChange={ e => setDetails({...details, email: e.target.value})}value=
//         {details.email}/>


//         <TextField style={{"background-color":"#e3f2fd"}} id="outlined-basic" label="password"
//         variant="outlined" type="password" onChange={ 
//           e =>
//           setDetails({...details, password: e.target.value})}value=
//         {details.password}/>

//         <Button style={{"background-color":"#3f51b5"}} variant="contained" onClick={submitHandler}>Submit</Button>
//         <Link style={{"color":"#3f51b5"}}>Don't hav any account signup</Link>
//     </Stack>
//   )
// }