import React from 'react'
import { useState } from 'react';
import { MdOutlineClear } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";


const Search = () => {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

const items = [
  { name: "Apple 🍎", category: "fruits" },
  { name: "Banana 🍌", category: "fruits" },
  { name: "Mango 🥭", category: "fruits" },
  { name: "Orange 🍊", category: "fruits" },
  { name: "Grapes 🍇", category: "fruits" },
  { name: "Strawberry 🍓", category: "fruits" },
  { name: "Pineapple 🍍", category: "fruits" },
  { name: "Watermelon 🍉", category: "fruits" },
  { name: "Cherry 🍒", category: "fruits" },
  { name: "Peach 🍑", category: "fruits" },
  { name: "Pear 🍐", category: "fruits" },
  { name: "Kiwi 🥝", category: "fruits" },
  { name: "Blueberry 🫐", category: "fruits" },
  { name: "Lemon 🍋", category: "fruits" },
  { name: "Coconut 🥥", category: "fruits" },
  { name: "Papaya 🥭", category: "fruits" },
  { name: "Guava 🍈", category: "fruits" },
  { name: "Lychee 🍒", category: "fruits" },
  { name: "Pomegranate 🍎", category: "fruits" },
  { name: "Fig 🍇", category: "fruits" },
  { name: "Lion 🦁", category: "animals" },
  { name: "Tiger 🐅", category: "animals" },
  { name: "Elephant 🐘", category: "animals" },
  { name: "Dog 🐶", category: "animals" },
  { name: "Cat 🐱", category: "animals" },
  { name: "Horse 🐎", category: "animals" },
  { name: "Monkey 🐒", category: "animals" },
  { name: "Panda 🐼", category: "animals" },
  { name: "Bear 🐻", category: "animals" },
  { name: "Wolf 🐺", category: "animals" },
  { name: "Fox 🦊", category: "animals" },
  { name: "Zebra 🦓", category: "animals" },
  { name: "Giraffe 🦒", category: "animals" },
  { name: "Kangaroo 🦘", category: "animals" },
  { name: "Koala 🐨", category: "animals" },
  { name: "Rabbit 🐰", category: "animals" },
  { name: "Deer 🦌", category: "animals" },
  { name: "Leopard 🐆", category: "animals" },
  { name: "Crocodile 🐊", category: "animals" },
  { name: "Camel 🐫", category: "animals" },
  { name: "Car 🚗", category: "vehicles" },
  { name: "Bus 🚌", category: "vehicles" },
  { name: "Truck 🚚", category: "vehicles" },
  { name: "Bike 🏍️", category: "vehicles" },
  { name: "Scooter 🛵", category: "vehicles" },
  { name: "Train 🚆", category: "vehicles" },
  { name: "Airplane ✈️", category: "vehicles" },
  { name: "Helicopter 🚁", category: "vehicles" },
  { name: "Ship 🚢", category: "vehicles" },
  { name: "Boat ⛵", category: "vehicles" },
  { name: "Taxi 🚕", category: "vehicles" },
  { name: "Ambulance 🚑", category: "vehicles" },
  { name: "Fire Truck 🚒", category: "vehicles" },
  { name: "Police Car 🚓", category: "vehicles" },
  { name: "Tractor 🚜", category: "vehicles" },
  { name: "Van 🚐", category: "vehicles" },
  { name: "Cable Car 🚡", category: "vehicles" },
  { name: "Rocket 🚀", category: "vehicles" },
  { name: "Submarine 🚤", category: "vehicles" },
  { name: "Metro 🚇", category: "vehicles" },
  { name: "Rose 🌹", category: "flowers" },
  { name: "Tulip 🌷", category: "flowers" },
  { name: "Sunflower 🌻", category: "flowers" },
  { name: "Lotus 🪷", category: "flowers" },
  { name: "Daisy 🌼", category: "flowers" },
  { name: "Hibiscus 🌺", category: "flowers" },
  { name: "Cherry Blossom 🌸", category: "flowers" },
  { name: "Lavender 💜", category: "flowers" },
  { name: "Orchid 🌺", category: "flowers" },
  { name: "Marigold 🌼", category: "flowers" },
  { name: "Jasmine 🌼", category: "flowers" },
  { name: "Lily 🌸", category: "flowers" },
  { name: "Peony 🌺", category: "flowers" },
  { name: "Magnolia 🌸", category: "flowers" },
  { name: "Bluebell 🔵", category: "flowers" },
  { name: "Poppy 🌺", category: "flowers" },
  { name: "Daffodil 🌼", category: "flowers" },
  { name: "Geranium 🌺", category: "flowers" },
  { name: "Begonia 🌺", category: "flowers" },
  { name: "Carnation 🌸", category: "flowers" },
  { name: "Apricot 🍑", category: "fruits" },
  { name: "Blackberry 🫐", category: "fruits" },
  { name: "Raspberry 🍓", category: "fruits" },
  { name: "Plum 🍑", category: "fruits" },
  { name: "Dragon Fruit 🐉", category: "fruits" },
  { name: "Durian 🟢", category: "fruits" },
  { name: "Goose 🦢", category: "animals" },
  { name: "Chicken 🐔", category: "animals" },
  { name: "Duck 🦆", category: "animals" },
  { name: "Owl 🦉", category: "animals" },
  { name: "Parrot 🦜", category: "animals" },
  { name: "Eagle 🦅", category: "animals" },
  { name: "Shark 🦈", category: "animals" },
  { name: "Whale 🐋", category: "animals" },
  { name: "Dolphin 🐬", category: "animals" },
  { name: "Octopus 🐙", category: "animals" },
  { name: "Skateboard 🛹", category: "vehicles" },
  { name: "Bullet Train 🚄", category: "vehicles" },
  { name: "Speedboat 🚤", category: "vehicles" },
  { name: "Hot Air Balloon 🎈", category: "vehicles" }
];

//    const filtered =  items.filter((e)=> e.name.toLowerCase().includes(search.toLowerCase().trim()) )

   const filtered = items.filter((items)=> {
    const matchFilter = (filter ? items.category.toLowerCase().trim().includes(filter.toLowerCase().trim()) : true);

    const matchSearch = items.name.toLowerCase().trim().includes(search.toLowerCase().trim());

    return matchFilter && matchSearch;
   })



  return (
    <div className='w-full flex justify-center items-center mt-10'>
        <div className='w-400 p-15 border'>

        <div className='relative w-100 mx-auto '>
        <input value={search} onChange={(e)=> setSearch(e.target.value)}  type="text" className=' w-100 px-4 py-4 outline rounded-2xl focus:bg-gray-100 hover:bg-gray-100' placeholder='Example: Apple'/>
        <div className='flex gap-4 mt-4 justify-center '>
            <button onClick={()=>setFilter("") } className='px-4 py-2 border text-xl hover:bg-gray-100 rounded-xl cursor-pointer'>Clear</button>
            <button onClick={()=>setFilteapr("animals") } className='px-4 py-2 border text-xl hover:bg-gray-100 rounded-xl cursor-pointer'>Animals</button>
            <button onClick={()=>setFilter("flowers")} className='px-4 py-2 border text-xl hover:bg-gray-100 rounded-xl cursor-pointer'>Flowers</button>
            <button onClick={()=>setFilter("fruits")} className='px-4 py-2 border text-xl hover:bg-gray-100 rounded-xl cursor-pointer'>Fruits</button>
        </div>
        <div className='absolute right-5 top-5 cursor-pointer '>
            { (search ? <MdOutlineClear onClick={()=>{setSearch("")}} size={20} /> : <IoSearch size={20}/> )
                
            }
        </div>
        </div>
        
        <div className='font-bold grid grid-cols-4 gap-3 text-center mt-5'>
            <AnimatePresence>
            {

            filtered.map((item, index)=><motion.p 
            className='px-4 py-2 border rounded  hover:bg-gray-100  ' 
            key={index}
            initial={{opacity:0, scaleX:0.95}}
            animate={{opacity:1, scaleX:1}}

            exit={{ opacity: 0, scaleX: 0.95 }}
            transition={{duration:0.3}}
            
            >{item.name}</motion.p>)
            
            }
            </AnimatePresence>

        </div>

        </div>
    </div>
  )
}

export default Search