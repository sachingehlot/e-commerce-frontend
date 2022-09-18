import { Stack,TextField, Button, Typography } from '@mui/material';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function LoginForm({Login, error}) {
  const[details, setDetails] = useState({email:"", password:""});

  const submitHandler = (event) =>{
    event.preventDefault();
    Login(details);

  }
  const lock={
    "margin-top":"100px",
    "margin-left":"48%",
    "background-color":"#e91e63",
    "color":"white",
    "width":"25px",
    "height":"26px",
    "border-radius":"12px",

}
const signup={
    "margin-left":"47%"
}

  return (
    <Stack spacing={3}>

<Stack style={lock}> <LockOutlinedIcon /></Stack>

<div style={signup} >
<Typography variant='h6'>Sign in</Typography>
</div>

<Stack spacing={1} style={{"margin-left":"40%","margin-right":"40%"}}>

        <TextField style={{"background-color":"#e1f5fe"}} id="outlined-basic" label="Email"variant="outlined" type="email"
        onChange={ e => setDetails({...details, email: e.target.value})}value=
        {details.email}/>

        <TextField style={{"background-color":"#e1f5fe"}}id="outlined-basic" label="password"
        variant="outlined" type="password" onChange={ 
          e =>
          setDetails({...details, password: e.target.value})}value=
        {details.password}/>

        <Button  style={{"background-color":"#3f51b5",}}  variant="contained" onClick={submitHandler}>Signin</Button>
        <Link  style={{"color":"#3f51b5",}} to="/signup"> Don't have an account? Sign up</Link>
</Stack>

    </Stack>
  )
}