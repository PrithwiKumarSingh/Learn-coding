import React from 'react'

const FoodCard = ({FoodData}) => {
  return (
    <div>
        <a href={FoodData?.action?.link}>
            <img className='w-36 h-45 ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+ FoodData?.imageId} alt="" />
        </a>
    </div>
  )
}

export default FoodCard