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
           <Image src={profilePic} alt="nina" width="430" height="430" objectFit="cover"/>
           <div className={user.shortinfo}>
               <p>Name: Nina Nice</p>
               <p>Age: 36 years old</p>
           </div>
           </div>
       </section>
       </>
    )
}

