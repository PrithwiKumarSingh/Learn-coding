import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#ff5200] font-sans'>
        
        <div className='flex container mx-auto justify-between py-8'>
            <div className='w-40 h-12 '>
                <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
            </div>
            <div className='text-white text-base font-bold flex gap-8 items-center '>
                <a target='_blank' href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                <a target='_blank' href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                <a target='_blank' className=' border border-white  py-3 px-4 rounded-2xl' href="">Get the App</a>
                <a target='_blank' className=' bg-black  py-3 px-4 rounded-2xl' href="">Sign in</a>
            </div>
        </div>

        <div className=' pt-16 pb-8 relative'>
            <img className='h-110 w-60 absolute left-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
            <img className='h-110 w-60 absolute right-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
            <div className='max-w-[60%] container mx-auto text-5xl text-center font-extrabold text-white'>Order food & groceries. Discover <br /> best restaurants. Swiggy it!</div>
            <div className='mt-8 max-w-[50%] container mx-auto flex gap-2'>
                <input className='bg-white text-xl px-4 py-4 max-w-[40%] outline-none container mx-auto rounded-2xl' type="text" value={"Delhi, India"}/>
                <input className='bg-white text-xl px-4 py-4 max-w-[55%] outline-none container mx-auto rounded-2xl' type="text" placeholder='Search for restaurant, item or more' />
            </div>
        </div>

        <div className='flex container mx-auto'>
            <a target='_blank' href="https://www.swiggy.com/restaurants"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" /></a>
            <a target='_blank' href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" /></a>
            <a target='_blank' href="https://www.swiggy.com/dineout"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" /></a>
        </div>
    </div>
  )
}

export default Header