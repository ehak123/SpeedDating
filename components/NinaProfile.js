import React from 'react'
import Image from 'next/image'
import profilePic from '../public/images/Nina.jpg'
import user from '../styles/userongoing.module.css'


//TODO: FIX CSS 
export default function NinaProfile() {
    return (
        <>
       < section className={user.profile}>
           <div className={user.img}>
           <Image src="https://images.unsplash.com/photo-1603691436755-354a2d9b4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx3b21hbiUyMGhpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="nina" width="430" height="430" objectFit="cover"/>
           <div className={user.shortinfo}>
               <p>Name: Nina Nice</p>
               <p>Age: 36 years old</p>
           </div>
           </div>
       </section>
       </>
    )
}

