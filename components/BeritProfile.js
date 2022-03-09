import React from 'react'
import Image from 'next/image'
import profilePic from '../public/images/berit.jpg'


//TODO: FIX CSS 
export default function BeritProfile() {
    return (
        <>
       < div style={{borderRadius:'5px', overflow: 'hidden'}}>
           <Image src={profilePic} alt="berit" width="200" height="200" objectFit="cover"/>
       </div>
        Name: Berit Vacker
        <br/>
        Age: 50 years old
       </>
    )
}

