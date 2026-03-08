import React from 'react'

const MiniCard = ({data,logo}) => {
  return (
    <div className="bg-white text-black border p-2 flex gap-6 rounded-2xl">
        <div className='mx-auto flex items-center'>
            {logo}
        </div>
        <div>
          <h1 className='text-black text-2xl font-bold'>{data.title}</h1>
          <p >
              {data.discription}
          </p>
    </div>
    </div>
  )
}

export default MiniCard