import React from 'react'
import EventHeader from '../EventHeader'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import profileStyle from "../event_user/userevent.module.css";
import Link from "next/link";



function WaitBox({waitTitle}) {
  //const title = props.title;
  return (
    <>
      <Box
        display="flex" justifyContent="center" alignItems="center"
        sx={{
          boxShadow: 1,
          height: 300,
          width: 300,
        }}>
        <Typography>{waitTitle}</Typography>
        <CircularProgress />
      </Box>
    </>
  )
}

function Waiting({waitTitle}) {
  return (
    <>
      <EventHeader title="Singles ready to mingle" />
      <WaitBox waitTitle={waitTitle} />
      <div className={profileStyle.exit}>
        <Link href="/">
          <button className={profileStyle.exitbutton}>Exit event</button>
        </Link>
      </div>
    </>
  )
}

export default Waiting
