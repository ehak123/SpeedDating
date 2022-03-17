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
           <Image src="https://images.unsplash.com/photo-1573166475912-1ed8b4f093d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWFuJTIwaW4lMjB0ZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="christina" width="430" height="430" objectFit="cover"/>
           <div className={user.shortinfo}>
               <p>Name: Christina Tech</p>
               <p>Age: 44 years old</p>
           </div>
           </div>
       </section>
       </>
    )
}

