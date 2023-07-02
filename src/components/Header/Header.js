import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='flex justify-between border border-solid'>
      <h1 className='p-2 m-4'>Srushti</h1>
      <ul className='flex'>
        <li className='p-2 m-4'><Link to="/home">Home</Link></li>
        <li className='p-2 m-4'><Link to="/about">About Me</Link></li>
        <li className='p-2 m-4'><Link to="/education">Education</Link></li>
        <li className='p-2 m-4'><Link to="/projects">Projects</Link></li>
        <li className='p-2 m-4'><Link to="/skills">Skills</Link></li>
        <li className='p-2 m-4'><Link to="/publications">Publications</Link></li>
        <li className='p-2 m-4'><Link to="/contact">Contact Me</Link></li>
      </ul>
    </div>
  )
}

export default Header
