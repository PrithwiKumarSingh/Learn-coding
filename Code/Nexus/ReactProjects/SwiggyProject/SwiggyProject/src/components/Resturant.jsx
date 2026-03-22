import React, { useEffect, useState } from 'react'
import RestCard from './RestCard';
import FamousFood from './FamousFood';
import TopRest from './TopRest';
import { IoIosArrowDown } from "react-icons/io";

const Resturant = () => {
  const [restData, setRestData] = useState([]);
  const [famousFood, setFamousFood] = useState([]);
  const [topRest, setTopRest] = useState([]);
  console.log(famousFood);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api =  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4640087729816&lng=77.02618695368315&is-seo-homepage-enabled=true"
        const response = await fetch(proxy + api);
        const data = await response.json();
        setFamousFood(data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        setTopRest(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);
  
  if(restData.length == 0)
   return <div className='flex items-center justify-center text-4xl h-screen'> <h1>Data is loading..........</h1></div>

        
        return(
          <div className='container mx-auto'>
              <h2 className='mt-30 text-xl font-extrabold '>What's on your mind?</h2>
            <div className=' flex flex-nowrap gap-5 overflow-x-scroll'>
              {
                famousFood.map((famousFood)=> <FamousFood key={famousFood.id}  famousFood={famousFood}></FamousFood>)
              }
              

            </div>
            <div className='h-[2px] bg-gray-200 w-full mt-10'></div>

              <h2 className=' text-xl font-extrabold mt-10 px-2 '>Top restaurant chains in Gurgaon</h2>
              <div className='flex flex-nowrap gap-5 mt-5 px-2 overflow-x-scroll'>
                {
                    topRest.map((topRest)=> <TopRest key={topRest?.info?.id} topRest={topRest} ></TopRest>)
                }
            </div>


            <div className='h-[2px] bg-gray-200 w-full mt-10'></div>



                {/* Restaurants with online food delivery in Gurgaon */}

            <div>
            <h1 className=' text-2xl font-extrabold mt-5 px-2' >Restaurants with online food delivery in Gurgaon</h1>
            <button className='py-1.5 px-2.5 text-sm text-gray-600 font-medium border cursor-pointer flex gap-2 rounded-2xl border-gray-400 my-4 ml-2 items-center'>
              <span>Sort By</span>
              {
                <IoIosArrowDown className='font-bold' size={15} />
              }
              </button>
            <div className='flex flex-wrap mx-auto gap-5 mt-10 px-2'>
                {
                    restData.map((restData)=> <RestCard key={restData?.info?.id} restData={restData} ></RestCard>)
                }
            </div>
            </div>



          </div>
        )
    }

export default Resturant