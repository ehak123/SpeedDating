import React from 'react';
import user from '../styles/userview.module.css'
import utilStyles from '../styles/utils.module.css'

import Image from 'next/image'

export function TopLogo() {
const name = 'First Round';

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
              alt={name}
            /> 
        </a>
        <h1 className={user.centerheader}>{name}</h1>
    </nav>
  </header>
  )
}
