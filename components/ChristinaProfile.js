import React from 'react'
import Image from 'next/image'
import profilePic from '../public/images/christina.jpg'
import user from '../styles/userongoing.module.css'


//TODO: FIX CSS 
export default function ChristinaProfile() {
    return (
        <>
       < section className={user.profile}>
           <div className={user.img}>
           <Image src={profilePic} alt="christina" width="430" height="430" objectFit="cover"/>
           <div className={user.shortinfo}>
               <p>Name: Christina Tech</p>
               <p>Age: 44 years old</p>
           </div>
           </div>
       </section>
       </>
    )
}

