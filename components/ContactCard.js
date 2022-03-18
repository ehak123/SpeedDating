import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import {CardActionArea, CardActions } from '@mui/material';


export default function ContactCard(props) {
    return (
    
    <Card>
        <CardMedia
        component="img"
        sx={{ height: 300 }}
        image={props.path}
      />
            <CardActions>
            <IconButton size="large">
                <FavoriteIcon />
            </IconButton>
            <IconButton size="large">
                <HighlightOffIcon />
            </IconButton>
            </CardActions>
         </Card>
    );
}



