import React, { useEffect, useState } from 'react'
import RestCard from './RestCard';

const Resturant = () => {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxy + api);
        const data = await response.json();
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);
  
  if(restData.length == 0)
   return <div className='flex items-center justify-center text-4xl h-screen'> <h1>Data is loading..........</h1></div>

        
        return(
            <div className='flex flex-wrap container w-[80%] mx-auto gap-5 mt-20'>
                {
                    restData.map((restData)=> <RestCard key={restData?.info?.id} restData={restData} ></RestCard>)
                }
            </div>
        )
    }

export default Resturant