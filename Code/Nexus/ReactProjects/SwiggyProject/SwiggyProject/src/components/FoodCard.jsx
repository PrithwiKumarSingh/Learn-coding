import React from 'react'

const FoodCard = ({FoodData}) => {
  return (
    <div className='shrink-0'>
        <a href={FoodData?.action?.link}>
            <img className='w-40 h-50 object-cover ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+ FoodData?.imageId} alt="" />
        </a>
    </div>
  )
}

export default FoodCard