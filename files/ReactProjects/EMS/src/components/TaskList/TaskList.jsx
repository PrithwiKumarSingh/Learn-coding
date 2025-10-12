import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className=' overflow-x-auto h-[60%] w-full mt-15 rounded-xl py-5 flex items-center justify-start gap-8'>

        <div className='flex-shrink-0 h-full w-[450px] bg-red-400 rounded-xl p-8'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 font-medium px-4 py-1 text-xl rounded-sm'>High</h3>
                <h4 className='font-bold' >13 oct 2025</h4>
            </div>
            <h2 className='mt-10 text-4xl font-bold'>Make a Youtube Video</h2>
            <p className='mt-5 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum at reprehenderit fuga quasi.</p>

        </div>
        <div className='flex-shrink-0 h-full w-[450px] bg-blue-400 rounded-xl p-8'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 font-medium px-4 py-1 text-xl rounded-sm'>High</h3>
                <h4 className='font-bold' >13 oct 2025</h4>
            </div>
            <h2 className='mt-10 text-4xl font-bold'>Make a Youtube Video</h2>
            <p className='mt-5 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum at reprehenderit fuga quasi.</p>

        </div>
        <div className='flex-shrink-0 h-full w-[450px] bg-green-400 rounded-xl p-8'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 font-medium px-4 py-1 text-xl rounded-sm'>High</h3>
                <h4 className='font-bold' >13 oct 2025</h4>
            </div>
            <h2 className='mt-10 text-4xl font-bold'>Make a Youtube Video</h2>
            <p className='mt-5 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum at reprehenderit fuga quasi.</p>

        </div>
        <div className='flex-shrink-0 h-full w-[450px] bg-yellow-400 rounded-xl p-8'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 font-medium px-4 py-1 text-xl rounded-sm'>High</h3>
                <h4 className=' font-bold' >13 oct 2025</h4>
            </div>
            <h2 className='mt-10 text-4xl font-bold'>Make a Youtube Video</h2>
            <p className='mt-5 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum at reprehenderit fuga quasi.</p>

        </div>

    </div>
  )
}

export default TaskList