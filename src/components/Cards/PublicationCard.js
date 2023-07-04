import React from 'react'
import { Link } from 'react-router-dom'

const PublicationCard = (props) => {
  return (
      <div className="m-4 p-4 box-border h-auto w-80 border-4">
          <h1 className="p-4 text-2xl font-about"><h1 className='font-bold'>Title : </h1>{props.title}</h1>
          <h3 className="p-4 text-md font-about"><h3 className='font-bold'>Publisher : </h3>{props.publisher}</h3>
          <h3 className="p-4 text-md font-about"><h3 className='font-bold'>Publication Date : </h3>{props.publication_date}</h3>
          <h3 className="p-4 text-md font-about"><h3 className='font-bold'>Authors : </h3>{props.authors}</h3>
          <button className='rounded-full bg-sky-500 hover:bg-sky-700 w-40 font-about'><Link to={props.view}>View</Link></button>
      </div>
  )
}

export default PublicationCard