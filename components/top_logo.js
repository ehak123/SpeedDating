import React from 'react';
import user from '../styles/userongoing.module.css'
import Image from 'next/image'


export const TopLogo = ({title = "default title"}) => { 
  return (
    <header className={user.header}>
      <div className={user.wrapper}>
      <div className={user.logo}>
        <Image 
        height={50}
        width={50}
        src="/images/icon400x400.jpg"/>
      </div>
        <h1 className={user.headertitle}>{title}</h1>
      </div>
    </header>
  )
}



/*
export const TopLogo = ({title = "default title"}) => { 
  return (
    <header className={user.header}>
    <nav className={user.navbar}>
        <a className={user.navlogo}> 
             <Image
              priority
              src="/images/icon400x400.jpg"
              className={utilStyles.borderCircle}
              height={40}
              width={40}
              alt={title}
            /> 
        </a>
        <h1 className={user.centerheader}>{title}</h1>
    </nav>
  </header>
  )
}*/
