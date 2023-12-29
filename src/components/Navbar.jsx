import React from 'react'
import "@/styles/navbar.css"
import Link from 'next/link'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className="logo"><h1>ToolForPDF</h1></div>
            <div className='nav_items'>
              <Link href={'/'} className='links'>Login</Link>
              <Link href={'/'} className='links'>Register</Link>
              <Link href={'/'} className='links'>About</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar
