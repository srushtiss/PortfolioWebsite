import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {

  const downloadResume=()=>{
    fetch('Sachdev_Srushti.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Sachdev_Srushti.pdf';
          alink.click();
      })
  })
  }

  return (
    <div className='flex justify-between items-center border border-4 bg-slate-100 font-navbar text-2xl'>
      <h1 className='p-2 m-4'>Srushti</h1>
      <button onClick={downloadResume} className='p-2 m-4 w-[200px] h-[70px] rounded-3xl bg-sky-500 hover:bg-sky-700 w-40'>Download My Resume</button>
      <ul className='flex'>
        <li className='p-2 m-4'><Link to="/">Home</Link></li>
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
