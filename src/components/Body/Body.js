import React from 'react'

const Body = () => {
  return (
    <div className='flex justify-between items-center m-4'>
      <h1 className='text-7xl'>I am Srushti</h1>
      <img src={require("../../utils/my_pic.jpg")} alt="Srushti's pic"/>
    </div>
  )
}

export default Body