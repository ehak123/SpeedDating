import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@material-ui/core/styles'
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  texttitle: {
    flexGrow: 1,
    textAlign: "center",
    color: "black",
  },
  logo: {
    marginRight: "auto",
    textAlign: "center",
    maxWidth: "50%",
    maxHeight: "70%",

  },
  bar: {
    backgroundColor: "white",
  }
})
)

export default function EventHeader({title = "default title"}) {
  const styles = useStyles();

  return (
      <AppBar elevation={1} className={styles.bar}>
        <Container maxWidth="sx">
        <Toolbar >
          <Avatar 
          className = {styles.logo}
        height={50}
        width={50}
        src="/images/icon400x400.jpg"></Avatar>
          <Typography variant="h6" className={styles.texttitle}>
            {title}
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
  );
}



/*
import React from 'react';
import user from './event_user/userevent.module.css'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

})
)

export const EventHeader = ({title = "default title"}) => { 
  const styles = useStyles();
  return (
    <header className={user.header}>
      <div className={user.wrapper}>
      <div className={user.logo}>
        
      </div>
        <h1 className={user.headertitle}>{title}</h1>
      </div>
    </header>
  )
} */




