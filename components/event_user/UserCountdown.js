import React from 'react'
import UserTimer from "../UserTimer.js"
import EventHeader from "../EventHeader.js"
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

function UserCountdown({round, matchname}) {
    return (
        <div>
            <EventHeader title="Date ongoing!" />
          
            <UserTimer round={round} matchname={matchname}/>

        </div>
    )
}

export default UserCountdown
