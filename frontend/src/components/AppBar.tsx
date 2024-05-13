import React from 'react'
import { Avatar } from './BlogCards'
import { Link } from 'react-router-dom'

const AppBar = () => {
  return (
    <div className='flex justify-between px-10 border-b py-4'>
      
      <Link to={'/blogs'} className='flex felx-col justify-center cursor-pointer'>
            Medium
        </Link>

        <div>
          <Link to={'/publish'}>
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-5 me-2 mb-2">New</button>
          </Link>

            <Avatar name={'ankit'}/>
        </div>
    </div>
  )
}

export default AppBar