import React from 'react'
import {CircularProgressbarWithChildren} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider"

const ProgressBar = (props) => {

  return (
    <div className='h-60 w-60 m-4'>
        <ProgressProvider valueStart={0} valueEnd={props.percent}>
          { (value) => <CircularProgressbarWithChildren value={value}>
            <div className='flex flex-col items-center'>
                <img src={props.logo} alt="logo" className='w-28'/>
                <strong className='text-3xl'>{props.percent}%</strong>
            </div>
                      </CircularProgressbarWithChildren>}
        </ProgressProvider>
      </div>
  )
}

export default ProgressBar