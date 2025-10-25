import React from 'react'
import { useState } from 'react';
import RestInfo from './RestInfo'

const MenuCard = ({menuItem}) => {
  
  const [IsOpen, setIsOpen] = useState(true);

  if('categories' in menuItem){
    return(
      <div className='w-ful'>
        <p className='text-3xl font-bold '>{menuItem.title}</p>
        <div>
          {
            menuItem?.categories?.map((items) => <MenuCard key={items?.title} menuItem={items} > </MenuCard>)
          }
        </div>
      </div>
    )
  }

  if(!IsOpen){
    return(
    <div className='w-ful mt-10'>
      <div className=' flex justify-between w-full'>
        <p className='text-3xl font-bold '>{menuItem.title}</p>
        <button className='cursor-pointer font-normal text-3xl mr-10' onClick={()=> setIsOpen(!IsOpen)} >{IsOpen ? "˄" : "˅"} </button>
      </div>
      <div className='h-5 bg-gray-200 mt-4 mb-4'></div>
    </div>
    )
  }

  return (

    <div className='w-ful mt-10'>
      <div className=' flex justify-between w-full'>
        <p className='text-3xl font-bold '>{menuItem.title}</p>
        <button className='cursor-pointer font-normal mr-10 text-3xl' onClick={()=> setIsOpen(!IsOpen)} >{IsOpen ? "˄" : "˅"} </button>
      </div>
        <div>
            {
                menuItem?.itemCards?.map((items) => <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} ></RestInfo>) 
            }
        </div>
    </div>
  )
}

export default MenuCard