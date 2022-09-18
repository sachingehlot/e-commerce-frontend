import { Box, Stack } from '@mui/system'
import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Login from './Login'
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
export default function () {

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


 



  return (
    <div>
      <Stack>
      <ToggleButtonGroup style={{"margin-left":"35%","marginTop":"20px"}}
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">ALL</ToggleButton>
      <ToggleButton value="apparel">APPAREL</ToggleButton>
      <ToggleButton value="electronics">ELECTRONICS</ToggleButton>
      <ToggleButton value="personal care">PERSONAL CARE</ToggleButton>
    </ToggleButtonGroup>
      </Stack>
      <div  class="flex-container" style={{"display":"flex", "background-color":"green", "width":"90%" ,"height":"650px", "margin-left":"70px","padding":"40px"}}>
        content
       <div style={{"background-color":"gray","width":"35%","height":"530px"}} >
        <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=530,quality=60,format=auto,fit=cover,g=top/in-resources/22a79ec5-e694-4d7a-ac5a-85c8fa45b7f1/Images/ProductImages/Source/ITMDN00486Dark%20Wash_1nw.Jpg"  />
       </div>
       <div  style={{"background-color":"white", "height":"530px","width":"60%" }}>
          placeholder
        </div>

      </div>
    
    </div>
  )
}
