
import React from 'react'
import { Link } from 'react-router-dom'
function Logo({width = '100px'}) {
  return (
    <div>
      <Link to="/" >
        <img src="https://images.pexels.com/photos/13805647/pexels-photo-13805647.jpeg" alt="Logo" style={{ width }} className='rounded-full'/>
      </Link>
    </div>
  )
}

export default Logo
