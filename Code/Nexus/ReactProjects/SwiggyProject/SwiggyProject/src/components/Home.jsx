import React from 'react'
import Header from './Header'
import FoodOptions from './FoodOptions'
import GroceryOption from './GroceryOption'
import DinoutOption from './DinoutOption'

const Home = () => {
  return (
    <div>
        <Header/>
        <FoodOptions/>
        <GroceryOption/>
        <DinoutOption/>
    </div>
  )
}

export default Home