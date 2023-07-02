import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="m-4 p-4 box-border w-[500px] h-[500px] border-4 flex flex-wrap items-center justify-center rounded-3xl">
      <h1 className="p-4 text-2xl">{props.title}</h1>
      <h3 className="p-4 text-md">{props.time_period}</h3>
      <h3 className="p-4 text-md">{props.desc}</h3>
      <h3 className="p-4 text-md"><h3 className='font-bold'>Tech Stack : </h3>{props.tech_stack}</h3>
    </div>
  )
}

export default ProjectCard