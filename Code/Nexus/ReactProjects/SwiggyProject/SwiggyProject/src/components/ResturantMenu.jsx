import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';


const ResturantMenu = () => {
      const [restData, setRestData] = useState(null);
      let {id} = useParams();
      console.log(id);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
            const response = await fetch(proxy + api);
            const data = await response.json();
            setRestData(data);
          } catch (err) {
            console.error("Error fetching data:", err);
          }
        };
    
        fetchData();
      }, []);

   
    console.log(restData);

  return (
    <div>
        <h1>Hello, Prithwi Kumar </h1>
        <p>{id}</p>
    </div>
  )
}

export default ResturantMenu