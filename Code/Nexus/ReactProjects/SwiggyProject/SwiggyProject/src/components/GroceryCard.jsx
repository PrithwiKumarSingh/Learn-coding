import React from 'react'

const GroceryCard = ({foodData}) => {
  return (
    <div className=''>
        <a href={foodData.action.link}>
            <img className='w-36 h-45' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+foodData.imageId} alt="" />
        </a>
        <h2 className='w-36 mt-3 font-bold text-center text-xl text-[#02060cbf] '>{foodData.action.text}</h2>
    </div>
  )
}

export default GroceryCard