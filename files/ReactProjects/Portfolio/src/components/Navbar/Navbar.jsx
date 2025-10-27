import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import {FaGithub,FaLinkedin} from 'react-icons/fa';

const Navbar = ()=>{

    const [active, setActive] = useState(false);

    const MenuItem = [
        {id:"menu", label:"About"},
        {id:"skills", label:"Skills"},
        {id:"experience", label:"Experience"},
        {id:"work", label:"Projects"},
        {id:"education", label:"Education"}
    ];


    return(
        <nav className='bg-transparent'>
            <div className='text-white py-5 flex justify-between items-center'>

                {/* Logo  */}
                <div className='text-lg font-semibold cursor-pointer'>
                <span className='text-[#8245ec]'>&lt;</span>
                <span className='text-white'>Prithwi</span>
                <span className='text-[#8245ec]'>/</span>
                <span className='text-white'>Kumar</span>
                <span className='text-[#8245ec]'>&gt;</span>
                </div>

                {/* Desktop Menu  */}
                <ul className='md:flex space-x-8 text-gray-300'>
                    {MenuItem.map((items)=>(
                        <li key={items.id} className={` cursor-pointer hover:text-[#8245ec]  ${
                            active ? items.id :" "
                        }`}>
                            <button onClick={()=>{}} className='cursor-pointer'>{items.label}</button>
                        </li>
                    ))}
                </ul>


            </div>

        </nav>
    )
}

export default Navbar
