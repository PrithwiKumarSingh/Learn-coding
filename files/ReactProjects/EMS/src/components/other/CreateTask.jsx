import React from 'react'

const CreateTask = () => {
  return (
        <div  className= ' w-[100%] rounded-xl bg-[#1c1c1c] flex gap-100 justify-between mt-5 p-5'>
         <div className='flex flex-col gap-7 w-1/2'>
            <div>
                <h3 className='text-xl pb-1 font-medium'>Task Title</h3>
                <input className='w-[100%] text-xl font-medium px-3 py-2 border-2 border-gray-400 rounded-sm ' type="text" placeholder='Make a UI design'/>
            </div>
            <div>
                <h3 className='text-xl pb-1 font-medium'>Date</h3>
                <input className='w-[100%] text-xl font-medium px-3 py-2 border-2 border-gray-400 rounded-sm '  type="date" placeholder='dd/mm/yyyy' />
            </div>
            <div>
                <h3 className='text-xl font-medium pb-1'>Assign To</h3>
                <input className='w-[100%] text-xl px-3 font-medium py-2 border-2 border-gray-400 rounded-sm ' placeholder='employee name'  type="text" />
            </div>
            <div>
                <h3 className='text-xl font-medium pb-1'>Category</h3>
                <input className='w-[100%] text-xl px-3 py-2 font-medium border-2 border-gray-400 rounded-sm '  type="text" placeholder='Design, Dev, etc' />
            </div>
         </div>
            <div className='w-[50%] '>
                <div>
                    <h3 className='text-xl font-medium pb-1'>Discription</h3>
                    <textarea className='w-[100%] bg-transparent border-2 border-white rounded-sm  !text-black' name="" id="" cols="30" rows="10"></textarea>
                </div>
                    <button className='mt-5 bg-emerald-500 w-[100%] py-5 cursor-pointer px-5 rounded-sm text-xl font-medium '>Create Task</button>
            </div>


         </div>
  )
}

export default CreateTask