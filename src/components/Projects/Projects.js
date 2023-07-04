import React from 'react'
import { projects } from '../../utils/data'
import ProjectCard from '../Cards/ProjectCard'

const Projects = () => {
  return (
    <div className='p-14 flex-col bg-slate-100'>
     
      {projects.map((project)=>(
        project.left?
        <div className='flex'>
          <div className='relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-0 md:mr-auto md:pl-0 md:pr-16;'>
            <ProjectCard title={project.title} time_period={project.time_period} desc={project.description} tech_stack={project.tech_stack} demo={project.demo}/>
         </div> 
         <iframe className="p-32 w-[300px] h-auto relative xs:pl-28 md:w-1/2 md:ml-auto md:pl-16" src={project.demo} title="eYIC 2019-20: AIDE  AI &amp; IoT Enabled Home Automation for Disabled &amp; Elderly" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
        :
        <div className='m-4 p-4 flex'>
          <iframe className="p-32 w-[300px] h-auto relative xs:pl-28 md:w-1/2 md:ml-auto md:pl-16" src={project.demo} title="eYIC 2019-20: AIDE  AI &amp; IoT Enabled Home Automation for Disabled &amp; Elderly" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className='relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16'>
            <ProjectCard title={project.title} time_period={project.time_period} desc={project.description} tech_stack={project.tech_stack} demo={project.demo}/>
         </div> 
         </div>
     ))}  
    </div>
  )
}

export default Projects