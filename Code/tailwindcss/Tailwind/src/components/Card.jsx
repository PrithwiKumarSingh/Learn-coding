import React from 'react'
import { FiInstagram } from "react-icons/fi";

const Card = ({data,logo}) => {
  return (
    <div>
        
        <div className='bg-white  max-w-sm mx-auto p-6 text-center border border-black rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105'>
          <div className='flex justify-center'>
            {logo}
            {/* <FiInstagram className='h-12 text-center rounded-3xl' /> */}
            {/* <img className='h-12 ,logotext-center rounded-3xl' src={data.logo} /> */}
          </div>
          <h1 className='text-black text-2xl font-bold mt-4 '>{data.title}</h1>
          <p  className='max-w-3xs mt-2'>{data.discription}</p>
          <button className='bg-slate-900 w-full rounded-3xl mt-4 py-2 text-white transition-all duration-300 hover:bg-slate-800'>READ MORE</button>
        </div>
    </div>
  )
}

export default Card