import React from 'react'
import ProgressBar from './ProgressBar'
import { skills } from '../../utils/data'

const Skills = () => {

  return (
    <div className='flex-col bg-gray-100'>
      <h1 className='m-4 p-4 text-4xl'>My Skills</h1>
      <div className='flex flex-wrap m-4 p-4'>
        {skills.map((skill)=>(
          <ProgressBar percent={skill.percent} logo={skill.logo}/>
        ))}
      </div>
    </div>
  )
}

export default Skills


