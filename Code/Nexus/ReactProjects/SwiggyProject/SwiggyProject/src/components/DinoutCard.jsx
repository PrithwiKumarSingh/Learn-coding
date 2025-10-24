import React from 'react'

const DinoutCard = ({DinoutData}) => {
  return (
    <div className='max-w-sm flex-none'>
      <a target='_blank' href={DinoutData?.cta?.link}>
            <div className='relative'>
            <img className='w-80 h-50' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+ DinoutData?.info?.mediaFiles[0]?.url} alt="" />
            <p className=' text-white font-bold text-xl absolute left-4 bottom-2 z-10 w-[80%] truncate '>{DinoutData?.info?.name}</p>
            <p className=' text-white font-bold text-xl absolute right-4 bottom-2 z-10 '>{DinoutData?.info?.rating?.value}</p>
            <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0"></div>
        </div>
      </a>
    </div>
  )
}

export default DinoutCard