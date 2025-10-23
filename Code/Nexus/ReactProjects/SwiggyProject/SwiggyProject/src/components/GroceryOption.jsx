import React from 'react'
import {GroceryGridCards} from "../utils/Grocery"
import GroceryCard from './GroceryCard'

const GroceryOption = () => {
  return (
    <div className='container mx-auto w-[80%] mt-20'>
        <h2 className='font-bold text-2xl mb-10'>Shop groceries on Instamart</h2>
        <div className='flex flex-nowrap gap-20 overflow-x-auto'>
        {
            GroceryGridCards.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData} ></GroceryCard>)
        }
        </div>
    </div>
  )
}

export default GroceryOption