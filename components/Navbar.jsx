
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul className='flex gap-4 text-xl text-blue-500'>
            <li className=''> <Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar