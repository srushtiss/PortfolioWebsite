import React from 'react'
import ProgressBar from './ProgressBar'

const Skills = () => {
  return (
    <div className='flex-col'>
      <h1 className='m-4 p-4 text-4xl'>My Skills</h1>
      <div className='flex flex-wrap m-4 p-4'>
        <ProgressBar percent={80} logo={"https://brandeps.com/logo-download/J/Java-logo-vector-01.svg"}/>
        <ProgressBar percent={90} logo={"https://brandeps.com/logo-download/H/HTML-5-logo-vector-01.svg"}/>
        <ProgressBar percent={90} logo={"https://brandeps.com/logo-download/C/CSS-3-logo-vector-01.svg"}/>
        <ProgressBar percent={70} logo={"https://brandeps.com/logo-download/J/JavaScript-logo-vector-01.svg"}/>
        <ProgressBar percent={70} logo={"https://brandeps.com/logo-download/R/React-logo-vector-01.svg"}/>
        <ProgressBar percent={90} logo={"https://brandeps.com/logo-download/M/MySQL-logo-vector-01.svg"}/>
        <ProgressBar percent={60} logo={"https://git-scm.com/images/logos/2color-lightbg@2x.png"}/>
        <ProgressBar percent={60} logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"}/>
        <ProgressBar percent={40} logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1024px-Android_Studio_Icon_3.6.svg.png?20210301045217"}/>
        <ProgressBar percent={40} logo={"https://seeklogo.com/images/L/linux-logo-3793382FC8-seeklogo.com.png"}/>
      </div>
    </div>
  )
}

export default Skills


