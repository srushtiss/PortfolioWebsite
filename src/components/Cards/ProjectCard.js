import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <div className="m-4 p-4 box-border w-[500px] h-[500px] border-4 flex flex-wrap items-center justify-center rounded-3xl">
      <h1 className="p-4 text-2xl font-about font-bold">{props.title}</h1>
      <h3 className="p-4 text-xl font-about ">{props.time_period}</h3>
      <h3 className="p-4 text-xl font-about ">{props.desc}</h3>
      <h3 className="p-4 text-xl font-about "><h3 className='font-bold'>Tech Stack : </h3>{props.tech_stack}</h3>
      <button className='rounded-full bg-sky-500 hover:bg-sky-700 w-40 font-about'><Link to={props.github}>Github</Link></button>
    </div>
  )
}

export default ProjectCard