import MenuCard from './MenuCard'
import { Link, useParams } from 'react-router'
import { useState, useEffect } from 'react';


const ResturantMenu = () => {
      const [restData, setRestData] = useState([]);
      const[selected, setSelected] = useState(null);

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
      <div className='w-[60%] mx-auto'>

        <Link to={`/city/delhi/${id}/search`}>
        <div className='relative'>
          <p className='py-4 w-full text-2xl font-normal rounded-4xl text-center bg-gray-300 mt-20 mb-10' >Search Here</p>
          <img className='absolute right-9 bottom-5 h-6' src="https://www.svgrepo.com/show/532555/search.svg" alt="" />
        </div>
        </Link>
        <div className='mt-4 mb-4 '>
          <button className={`px-8 py-3 mr-4 rounded-xl ${selected==="Veg" ? "bg-green-600 text-white" : "bg-gray-300"}`} onClick={()=> setSelected(selected==="Veg" ? null : "Veg")} >Veg</button>
          <button className={`px-4 py-3 rounded-xl ${selected==="non-Veg" ? "bg-red-600 text-white" : "bg-gray-300"}`} onClick={()=> setSelected(selected==="non-Veg" ? null : "non-Veg")}>non Veg</button>
        </div>
    <div >
        {
          restData.map((menuItem)=><MenuCard key={menuItem?.card?.card?.title} foodselect={selected} menuItem={menuItem?.card?.card}></MenuCard>)
        }
    </div>
    </div>
  )
}

export default ResturantMenu