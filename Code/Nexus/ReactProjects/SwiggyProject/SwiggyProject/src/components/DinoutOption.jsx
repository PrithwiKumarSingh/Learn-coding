import React from 'react'
import {DineoutRestaurants} from '../utils/DineoutRestaurants'
import DinoutCard from './DinoutCard'

const DinoutOption = () => {
  return (
    <div className='w-[80%] container mx-auto  mt-25 mb-10 '>
      <h2 className='font-bold text-2xl mb-10'>Discover best restaurants on Dineout</h2>
      <div className='flex flex-none gap-5 overflow-x-auto'>
          {
            DineoutRestaurants.map((DinoutData)=> <DinoutCard key={DinoutData?.info?.id} DinoutData={DinoutData}></DinoutCard>)
          }
      </div>
    </div>
  )
}

export default DinoutOption