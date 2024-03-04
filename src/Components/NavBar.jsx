import React from 'react'
import '../Components/NavStyle.css'
import { Link } from 'react-router-dom';

import logo from '../Components/Images/logo.png'


function NavBar() {
  return (
    <div className=''>
        <nav className='navbar justify-content-around'>
            <Link to='/'><img className='brand ms-2' src={logo} alt="" /></Link>
            <span className='inames'> <Link className='navItems' to='/'> Home </Link> </span>
            <span className='inames'> <Link className='navItems' to='/men' >MEN</Link> </span>
            <span className='inames'> <Link className='navItems' to='/boy' >BOY</Link> </span>
            <span className='inames'> <Link className='navItems' to='/about' >About</Link> </span>
            <span className='inames'> <Link className='navItems' to='/contact'>Contact</Link> </span>
        </nav>
    </div>
  )
}

export default NavBar