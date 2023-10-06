import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Logo from '../logo.svg'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'


export function AppBarComponent() {
   
    return <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Avatar alt="REACT JS" src={Logo} />
          </IconButton>
          <Typography variant="h6" >
            MyEcommerce
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            >
                 <Typography variant="h6" >
                    HLS
                </Typography>
                <Divider orientation="vertical" flexItem />
                 <Button color="inherit">Login</Button>

            </Grid>
         
        </Toolbar>
      </AppBar>
  
  }

export default AppBarComponent
