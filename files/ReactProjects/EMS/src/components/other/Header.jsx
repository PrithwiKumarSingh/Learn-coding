import React from 'react'

const Header = () => {
  return (
    <div className=' flex items-end justify-between'>
        <h1 className='text-4xl font-medium'>Hi, <br /> <span className='text-6xl '>Prithwi Kumar </span>👋</h1>
        <button className='bg-red-600 py-2 text-lg font-medium rounded-sm px-5'>Log out</button>
    </div>
  )
}

export default Header