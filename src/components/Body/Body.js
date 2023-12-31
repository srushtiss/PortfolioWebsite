import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const Body = () => {

  return (
    <div className='flex justify-between bg-slate-100 dark:bg-black'>
      <div className='m-6 p-6'>
      <div className='pl-32 m-6 flex-col w-[500px] font-heading text-blue-600'>
        <h1 className='text-6xl'>Hello World,</h1>
        <h1 className='p-4 text-6xl'>I am</h1>
      </div>
      <div className='pl-10 text-6xl font-info text-cyan-400'>
            &lt;{''}
            <span>
            <Typewriter
                words={['Srushti Sachdev', 'a Software Developer', 'a Java Developer','a Full Stack Developer']}
                loop={false}
                cursor={false}
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
            />
            </span>
            /&gt;
    </div>
    </div>
    <img className="m-4 p-4 w-[500px] rounded-3xl" src={require("../../utils/my_pic.jpg")} alt="Srushti's pic"/>
    </div>
  )
}

export default Body