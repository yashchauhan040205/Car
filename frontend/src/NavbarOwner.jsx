import React from 'react'
import { dummyUserData } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { assets  } from '../../assets/assets'
// Assuming you have a CSS file for styling

const NavbarOwner = () => {

    const user = dummyUserData;
    
  return (
    <div className='flex items-center justify-between px-6 md:px-10 py-4
     text-gray-500 border-b border-borderColor relative transition-all'>
        <Link to='/'>
            <img src={assets.logo} alt="" className='h-7' />
        </Link>
        <p>Welcome Car Rental Planform</p>
    </div>
  )
}

export default NavbarOwner