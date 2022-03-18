import React from 'react'
import UserTimer from "../components/UserTimer.js"
import EventHeader from "../components/EventHeader.js"
function first_rating({siteTitle}) {
  return (
    <div>
      <EventHeader title={siteTitle} />
      <UserTimer />
    </div>
  )
}

export default first_rating
