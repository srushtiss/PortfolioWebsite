import React from 'react'

const Body = () => {
  return (
    <div className='flex justify-between items-center m-4'>
      <div>
      <h1 className='text-7xl'>&lt;Hello/&gt;</h1>
        <h1 className='text-7xl'>&lt;Srushti/&gt;</h1>
        <h1 className='text-7xl'>&lt;Software Engineer/&gt;</h1>
        <h1 className='text-7xl'>&lt;Full Stack Developer/&gt;</h1>
        <h1 className='text-7xl'>&lt;Java Developer&gt;</h1>
      </div>
      <img src={require("../../utils/my_pic.jpg")} alt="Srushti's pic" className='rounded-xl'/>
    </div>
  )
}

export default Body