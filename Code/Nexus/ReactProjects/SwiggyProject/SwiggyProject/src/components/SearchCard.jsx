import React from 'react'
import { Link,useParams } from 'react-router'
import { useState, useEffect } from 'react'
import RestInfo from './RestInfo'

const SearchCard = () => {
    const [food, setFood] = useState("")
    const [restData, setRestData] = useState([]); 
    const {id} = useParams();

            useEffect(() => {
            const fetchData = async () => {
                try {
                const proxy = `https://cors-anywhere.herokuapp.com/`;
                const api = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
                const response = await fetch(proxy + api);
                const data = await response.json(); 
                const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filterData = tempData.filter((item)=> 'title' in item?.card?.card);
                const itemFilter = filterData.map((items)=> items?.card?.card?.itemCards ? items?.card?.card?.itemCards : items?.card?.card?.categories)
                const itemData = itemFilter.map((item)=> item?.card?.info)
                console.log(itemData.name)
                setRestData(itemFilter);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        

        fetchData();
      }, []);






  return (
    <div className='w-[60%] mx-auto mt-20 '>
        <div className='relative'>
        <input onChange={(e)=> setFood(e.target.value)} className='w-full outline-none border-b text-2xl py-4 pl-12' placeholder='Search Here '></input>
        <Link to={`/city/delhi/${id}`}>
        <img className='h-8 absolute bottom-4 left-0' src="https://www.svgrepo.com/show/510041/left-arrow.svg" alt="" />
        </Link>
        <img className='h-8 absolute bottom-4 right-5 '  src="https://www.svgrepo.com/show/532555/search.svg" alt="" />
        </div>  

        {/* <div>
            {
                restData.map((item)=><RestInfo key={item?.card?.info?.description} restData={item?.card?.info}></RestInfo>)
            }
        </div> */}
    </div>
  )
}

export default SearchCard