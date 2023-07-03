import React from 'react'
import ProgressBar from './ProgressBar'
import { skills } from '../../utils/data'

const Skills = () => {
  return (
    <div className='flex-col bg-slate-100'>
      <h1 className='text-4xl'>My Skills</h1>
      <div className='flex flex-wrap m-8 p-8 justify-between'>
        {skills.map((skill)=>(
          <ProgressBar percent={skill.percent} logo={skill.logo}/>
        ))}
      </div>
    </div>
  )
}

export default Skills


