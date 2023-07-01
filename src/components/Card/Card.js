import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
      <div className="m-4 p-4 box-border h-auto w-80 border-4">
          <h1 className="p-4 text-2xl"><h1 className='font-bold'>Title : </h1>{props.title}</h1>
          <h3 className="p-4 text-md"><h3 className='font-bold'>Publisher : </h3>{props.publisher}</h3>
          <h3 className="p-4 text-md"><h3 className='font-bold'>Publication Date : </h3>{props.publication_date}</h3>
          <h3 className="p-4 text-md"><h3 className='font-bold'>Authors : </h3>{props.authors}</h3>
          <button className='rounded-full bg-sky-500 hover:bg-sky-700 w-40'><Link to={props.view}>View</Link></button>
      </div>
  )
}

export default Card