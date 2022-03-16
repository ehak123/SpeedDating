import React, { useState } from 'react'
import user from '../styles/userongoing.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';


export default function ContactCard(props) {
    return (
    
    <Card sx={{ display: 'flex' }}>
        <CardMedia
        component="img"
        sx={{ height: 300, width: 300 }}
        image={props.path}
      />
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <IconButton>
                <FavoriteIcon />
            </IconButton>
            <IconButton>
                <HighlightOffIcon />
            </IconButton>
        </Box>
    </Card>
    );
}



