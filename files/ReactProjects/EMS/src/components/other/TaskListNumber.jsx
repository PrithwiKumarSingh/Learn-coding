import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-15 justify-between gap-5 screen'>
        <div className=' w-[45%] bg-red-400 rounded-xl py-6 px-9'>
            <h2 className='text-5xl font-semibold'>1</h2>
            <h3 className=' mt-3 text-2xl font-medium'>New Task</h3>
        </div>
        <div className=' w-[45%] bg-blue-400 rounded-xl py-6 px-9'>
            <h2 className='text-5xl font-semibold'>3</h2>
            <h3 className='mt-3 text-2xl font-medium'>Completed</h3>
        </div>
        <div className=' w-[45%] bg-green-400 rounded-xl py-6 px-9'>
            <h2 className=' !text-black text-5xl font-semibold'>0</h2>
            <h3 className=' !text-black mt-3 text-2xl font-medium'>Accepted</h3>
        </div>
        <div className=' w-[45%] bg-yellow-400 rounded-xl py-6 px-9'>
            <h2 className='text-5xl font-semibold'>0</h2>
            <h3 className='mt-3 text-2xl font-medium'>Failed</h3>
        </div>

    </div>
  )
}

export default TaskListNumber