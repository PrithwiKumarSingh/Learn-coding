import MenuCard from './MenuCard'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';


const ResturantMenu = () => {
      const [restData, setRestData] = useState([]);
      let {id} = useParams();
      console.log(id);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
            const response = await fetch(proxy + api);
            const data = await response.json(); 
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((item)=> 'title' in item?.card?.card);
            setRestData(filterData);
          } catch (err) {
            console.error("Error fetching data:", err);
          }
        };
    
        fetchData();
      }, []);

   

  return (
    <div className='w-[60%] mx-auto '>
        {
          restData.map((menuItem)=><MenuCard key={menuItem?.card?.card?.title} menuItem={menuItem?.card?.card}></MenuCard>)
        }
    </div>
  )
}

export default ResturantMenu