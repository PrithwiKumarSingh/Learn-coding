import React from 'react'
import {imageGridCards} from '../utils/FoodData'
import FoodCard from './FoodCard'

const FoodOptions = () => {
  return (
    <div className='w-[80%] container mx-auto mt-30 '>
      <h2 className='font-bold text-2xl mb-6'>Order our best food options</h2>
      <div className='grid grid-rows-2 grid-flow-col auto-cols-[160px] overflow-x-auto gap-4 no-scrollbar'>
        {
            imageGridCards.map((FoodData)=><FoodCard key={FoodData.id} FoodData={FoodData}></FoodCard>)
        }
      </div>
    </div>
  )
}

export default FoodOptions