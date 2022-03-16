import { useState } from 'react';
import user from '../../styles/userview.module.css'
import layout from '../../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'
import { name } from '../../data/metadata'
import Link from 'next/link'
import Logo from '../layout/logo';

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={user.navbar}>
    <nav className={user.navbar}>
        <a className={user.navlogo}> 
             <Logo />
        </a>
      <ul className={isOpen === false ?
          user.navmenu : user.navmenu + ' ' + user.active}>
        <li className={user.navitem}>
            <Link href="/">
            <a className={user.navlink}>Home</a>
            </Link>
        </li>
        <li className={user.navitem}>
            <a className={user.navlink}>Link1</a>
        </li>
        <li className={user.navitem}>
            <a className={user.navlink}>Link2</a>
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
