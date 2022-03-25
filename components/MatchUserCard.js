import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { CardActionArea, CardActions } from '@mui/material';
import { CardContent } from '@material-ui/core';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export default function MatchUserCard({ id, img, name }) {
    return (
        <>
            <Box display='flex'>
            <IconButton>
                <ArrowDownwardIcon />
                </IconButton>
                  <IconButton>
                <ArrowUpwardIcon />
                </IconButton>
  

                <Card sx={{
                    display: 'flex',
                    width: 300,
                    height: 90,
                    border: 1,
                    borderColor: 'grey.200',
                    marginBottom: 1
                }}>
                  

                    <CardMedia
                        component="img"
                        sx={{ height: 80, width: 80 }}
                        image={img}
                    />
                    <CardContent>
                        <p>{id}</p>
                        <p>{name}</p>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
