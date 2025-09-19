import React, { useState } from 'react'
import {navbarStyles as styles } from '../assets/dummyStyles'

const Navbar = () => {

    const [scrolled,setScrolled]=useState(false);
    const [isOpen,setOpen]=useState(false);

  return (
    <nav className={`${styles.nav.base} ${scrolled}`}>

    </nav>
    
  )
}

export default Navbar