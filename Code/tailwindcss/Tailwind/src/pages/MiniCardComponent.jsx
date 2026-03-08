import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import MiniCard from '../components/MiniCard';

const MiniCardComponent = () => {
  return (
    <div className='h-screen bg-white flex justify-center  items-center p-10'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

      <MiniCard logo={<FiInstagram className='text-black text-7xl text-center'/>} data={ {title : "Twitter", discription: " After creating these files just paste the following codes in your file.",}}/>
      <MiniCard logo={<FaTwitter className='text-black text-7xl text-center'/>} data={{title : "Instagram", discription: " After creating these files just paste the following codes in your file.",}}/>
      <MiniCard logo={<FaYoutube className='text-black text-7xl text-center'/>} data={{title : "Youtube", discription: " After creating these files just paste the following codes in your file.",}}/>

        </div>

    </div>
  )
}

export default MiniCardComponent