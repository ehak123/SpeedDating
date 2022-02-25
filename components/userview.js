import React from 'react';
import { useState } from 'react';
import user from '../styles/userview.module.css'

export function PageHeader() {

  const [isOpen, setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);
  return (
    <header className={user.header}>
    <nav className={user.navbar}>
        <a className={user.navlogo}>[BrandLogo]</a>
      <ul className={isOpen === false ?
          user.navmenu : user.navmenu + ' ' + user.active}>
        <li className={user.navitem}>
            <a className={user.navlink}>Home</a>
        </li>
        <li className={user.navitem}>
          
            <a className={user.navlink}>About</a>
   
        </li>
        <li className={user.navitem}>
       
            <a className={user.navlink}>Contact</a>
  
        </li>
      </ul>
      <button className={isOpen === false ? user.hamburger : user.hamburger + ' ' + user.active}
                          onClick= {openMenu}
                          >
        <span className={user.bar}></span>
        <span className={user.bar}></span>
        <span className={user.bar}></span>
      </button>
    </nav>
  </header>
  )
}
