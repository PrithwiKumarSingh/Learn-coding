import React from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import {FaGithub,FaLinkedin} from 'react-icons/fa';

const Navbar = ()=>{

    const MenuItem = [
        {id:"menu", label:"About"},
        {id:"skills", label:"Skills"},
        {id:"experience", label:"Experience"},
        {id:"work", label:"Projects"},
        {id:"education", label:"Education"}
    ];


    return(
        <nav className='bg-transparent'>
            <div className='text-white py-5 flex justify-center items-center'>

                {/* Logo  */}
                <div className='text-lg font-semibold cursor-pointer'>
                <span className='text-[#8245ec]'>&lt;</span>
                <span className='text-white'>Prithwi</span>
                <span className='text-[#8245ec]'>/</span>
                <span className='text-white'>Kumar</span>
                <span className='text-[#8245ec]'>&gt;</span>
                </div>

                {/* Desktop Menu  */}
                <ul className=''>
                    {MenuItem.map((items)=>(
                        <li key={items.id} className=''>
                            <button>{items.label}</button>
                        </li>
                    ))}
                </ul>


            </div>

        </nav>
    )
}

export default Navbar
