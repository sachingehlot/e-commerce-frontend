import { Autocomplete, Grid, TextField, } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Signup from './Signup';
import { Stack,  } from 'react-bootstrap';
import Login from './Login'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Details, SettingsInputAntennaSharp } from '@mui/icons-material';


export default function () {


const BuyHandler =(event)=>{
    event.preventDefault();
}




const Sortby = [
    { label: 'Default',  },
    { label: 'Price: High To Low',  },
    { label: 'Price: Low To High',  },
    { label: 'Price: Newest',  },
   
  ];

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


         <Stack>
      <Autocomplete style={{"marginLeft":"10px","marginTop":"20px"}}
      disablePortal
      id="combo-box-demo"
      options={Sortby}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="SORT BY" />}/>
      </Stack>

      <Grid  container spacing={2} style={{"padding-left":"15%", "marginTop":"20px" }}>
       
      
        <Grid item xs={3.5}>
      
     
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://storage.sg.content-cdn.io/cdn-cgi/image/width=600,height=800,quality=60,format=auto,fit=cover,g=top/in-resources/22a79ec5-e694-4d7a-ac5a-85c8fa45b7f1/Images/ProductImages/Source/ITMDN00486Dark%20Wash_1nw.Jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Levi Strauss Jeans
          </Typography>
          <Typography variant="body2" color="text.secondary">
          slim fit stretch jeans offers comfort with style. 
          Made with high-quality material of cotton lycra and superior
           stitching for excellent fit,
           comfort and a stylish look.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={BuyHandler} variant='contained'  style={{"background-color":"#3f51b5"}} >BUY</Button>
      </CardActions>
    </Card>
          
        </Grid>

        <Grid item xs={3.5}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="178"
          image="https://www.mytrendyphone.eu/images/iPhone-12-Mini-64GB-Black-0194252029619-25102020-01-p.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          iPhone 12
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A14 Bionic, the fastest chip in a smartphone.
           An edge-to-edge OLED display.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' onClick={BuyHandler} style={{"background-color":"#3f51b5"}} >BUY</Button>
      </CardActions>
    </Card>
          
        </Grid>
        <Grid item xs={3.5}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="158"
          image="https://5.imimg.com/data5/SELLER/Default/2020/8/IV/VS/ND/30769763/lifebuoy-240-ml-sanitizer-500x500.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Lifebuoy Hand Sanitizer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It instantly kills 99.9% bacteria and viruses. 
          Can be used as often as required and works without any water
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' onClick={BuyHandler} style={{"background-color":"#3f51b5"}} >BUY</Button>
      </CardActions>
    </Card>
          
        </Grid>

        <Grid item xs={3.5}>
        <Card sx={{ maxWidth: 345 }}  style={{"marginTop":"50px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="90"
          image="https://rukminim1.flixcart.com/image/800/960/knxiavk0/shoe/a/r/b/6-hkz70-7-reebok-smoky-indigo-vector-original-imag2hwk8h5xq6a3.jpeg?q=50"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          EMERGO RUNNER Running Shoes 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Unique new design with an amalgamation of PU and textile mesh.
           PU at the rearfoot for motion and protection. 
          Full EVA outsole responsible for traction and responsiveness.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' onClick={BuyHandler} style={{"background-color":"#3f51b5"}} >BUY</Button>
      </CardActions>
    </Card>
          
        </Grid>

        <Grid item xs={3.5}>
        <Card sx={{ maxWidth: 345 }} style={{"marginTop":"50px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="158"
          image="https://rukminim1.flixcart.com/image/416/416/kmccosw0/headphone/g/7/j/airdopes-131-boat-original-imagf9n3rhpwq252.jpeg?q=70"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          boAt Airdopes 131
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Bring home the boAt Airdopes 131 that comes with a carrying case.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' onClick={BuyHandler} style={{"background-color":"#3f51b5"}} >BUY</Button>
      </CardActions>
    </Card>
          
        </Grid>


        
      </Grid>
    </div>
  )
}