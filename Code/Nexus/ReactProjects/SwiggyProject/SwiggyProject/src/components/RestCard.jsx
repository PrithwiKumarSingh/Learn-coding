import React from 'react'
import { Link } from 'react-router'

const RestCard = ({restData}) => {
  return (
    <Link to={"/city/delhi/"+restData?.info?.id}>
    <div className='w-[360px] overflow-hidden mx-auto transform transition duration-200 hover:scale-95 cursor-pointer ' >
      <div className='relative overflow-hidden rounded-xl'>
        <img className=' w-full h-60 object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restData.info.cloudinaryImageId} alt="" />
         <p className=' absolute left-3 bottom-1 text-white z-10 font-extrabold text-xl '>{restData?.info?.aggregatedDiscountInfoV3?.header +" "+ (restData?.info?.aggregatedDiscountInfoV3?.subHeader ? restData?.info?.aggregatedDiscountInfoV3?.subHeader : " ") }</p>
        <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0"></div>
        </div>
        <div className='flex flex-col ml-2 overflow-ellipsis'>
        <h2 className='mt-2 font-bold text-lg'>{restData?.info?.name}</h2>
        <div className=' flex gap-1 items-center mb-1'>
            <div className="flex items-center justify-center w-5 h-5 bg-green-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.83 1.476 8.303L12 18.896l-7.412 4.543 1.476-8.303L0 9.306l8.332-1.151z" />
              </svg>
            </div>
            <span className='text-lg font-normal  '>{restData?.info?.avgRating} <span className=' font-extrabold '>&middot;</span> </span>
            <span className='text-lg font-medium'>{restData?.info?.sla?.slaString}</span>
        </div>
        <div className='h-6.5 overflow-hidden'>
          <p className=' text-gray-500 font-medium text-base h-6' >{restData?.info?.cuisines.join(" , ")}</p>
        </div>
        
        <p className=' text-gray-500 font-medium text-base '>{restData?.info?.areaName}</p>
       
        </div>

    </div>
    </Link>
  )
}

export default RestCard