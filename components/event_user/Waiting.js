import React from 'react'
import EventHeader from '../EventHeader'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import profileStyle from "../event_user/userevent.module.css";
import Link from "next/link";



function WaitBox() {
    return (
        <>
        <Box 
        sx={{
        boxShadow: 1, 
        height: 300, 
        width: 300}}>
            <Typography>Please wait for host</Typography>
            <CircularProgress />
      </Box>
        </>
    )
}

function Waiting() {
    return (
        <>
        <EventHeader title="Welcome to SpeedDating!"/>
        <WaitBox />

            <div className={profileStyle.exit}>
        <Link href="/">
          <button className={profileStyle.exitbutton}>Exit event</button>
        </Link>
      </div>

        </>
    )
}

export default Waiting
