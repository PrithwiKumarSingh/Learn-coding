import React from 'react'
import { useState } from 'react';

const Home = () => {

    const [search, setSearch] = useState('');
    console.log(search);

    const fruits = [
  "Apple",
  "Banana 🍌",
  "Grapes 🍇",
  "Watermelon 🍉",
  "Strawberry 🍓",
  "Pineapple 🍍",
  "Mango 🥭",
  "Cherry 🍒",
  "Peach 🍑",
  "Lemon 🍋",
  "Orange 🍊",
  "Pear 🍐",
  "Kiwi 🥝",
  "Melon 🍈",
  "Blueberry 🫐",
  "Tomato 🍅",
  "Coconut 🥥",
  "Green Apple 🍏",
  "Red Apple 🍎",
  "Black Grapes 🍇"
];

   const filtered =  fruits.filter((e)=> e.toLowerCase().includes(search.toLowerCase().trim()) )
    console.log(filtered);


  return (
    <div className='w-full flex justify-center items-center m-20'>
        <div className=''>
        <input onChange={(e)=> setSearch(e.target.value)}  type="text" className=' w-100 px-4 py-4 outline rounded-2xl' placeholder='Search Fuits'/>
        <div className='font-bold flex gap-2 text-center flex-col mt-5'>
            {

            filtered.map((fruit, index)=><p key={index}>{fruit}</p>)
            
            }

        </div>
        </div>
    </div>
  )
}

export default Home