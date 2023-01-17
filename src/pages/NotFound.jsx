import React from 'react'
import { Link } from 'react-router-dom'

// Component to display the 404 page

const NotFound = () => {
  return (
    <div className='body404'>
      <div className='page'>
        <h1>404</h1>
        <div className='content'>
          <h2>You look like you have gotten yourself lost</h2>
          <Link to='/' className='button'>
            GO HOME
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
