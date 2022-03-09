import React from 'react'
import Image from 'next/image'
import profilePic from '../public/images/berit.jpg'


//TODO: FIX CSS 
export default function ChristinaProfile() {
    return (
        <>
       < div style={{borderRadius:'5px', overflow: 'hidden'}}>
           <Image src={profilePic} alt="christina" width="200" height="200" objectFit="cover"/>
       </div>
        Name: Christina Green
        <br/>
        Age: 44 years old
       </>
    )
}