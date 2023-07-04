import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='bg-slate-100'>
      <div className='p-8 flex flex-wrap justify-between items-center'>
        <Link to="https://www.linkedin.com/in/srushtisachdev/">
          <div className='p-6 box-border border-4 rounded-3xl bg-blue-300'>
          <img className='m-auto w-16' src={require("../../utils/linkedin.png")} alt="LinkedIn"/>
          <h3 className='pt-3 font-about text-xl'>Username : srushtisachdev</h3>
          </div>
        </Link>
        <Link to="https://github.com/srushtiss">
          <div className='m-4 p-4 box-border border-4 rounded-3xl bg-slate-400'>
          <img className='m-auto w-16' src={require("../../utils/github.png")} alt="Github"/>
          <h3 className='pt-3 font-about text-xl'>Username : srushtiss</h3>
          </div>
        </Link>
        <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=sachdevsrushti@gmail.com&su=SUBJECT&body=BODY">
          <div className='m-4 p-4 box-border border-4 rounded-3xl bg-red-300'>
          <img className='m-auto w-16' src={require("../../utils/gmail.png")} alt="Gmail"/>
          <h3 className='pt-3 font-about text-xl'>Username : sachdevsrushti@gmail.com</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Contact