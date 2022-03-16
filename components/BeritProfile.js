import React from 'react'
import Image from 'next/image'
import profilePic from '../public/images/berit.jpg'
import user from '../styles/userongoing.module.css'


//TODO: FIX CSS 
export default function BeritProfile() {
    return (
        <>
       < section className={user.profile}>
           <div className={user.img}>
           <Image src={profilePic} alt="berit" width="430" height="430" objectFit="cover"/>
           <div className={user.shortinfo}>
               <p>Name: Berit Bok</p>
               <p>Age: 50 years old</p>
           </div>
           </div>
       </section>
       </>
    )
}

