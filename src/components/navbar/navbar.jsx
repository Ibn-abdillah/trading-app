import React, { useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import './navbar.css'

function Navbar() {

    const [open, setOpen] = useState(false)
    const menuBtn = () => setOpen(!open)
    const close = () => setOpen(false)
  return (
    <div className='navbar'>
        <nav>
            <h1>Cryp<span>to</span></h1>
            <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                <li><a onClick={close} href="#home">Home</a></li>
                <li><a onClick={close} href="#feature">Featured</a></li>
                <li><a onClick={close} href="#earn">Earn</a></li>
                <li><a onClick={close} href="#footer">Footer</a></li>
            </ul>
            <button>Connect Wallet</button>

            <div className="hamburger" onClick={menuBtn}>
                {open ? <AiOutlineClose/> : <HiMenuAlt1/>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar