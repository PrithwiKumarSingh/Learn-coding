import React from 'react'

const FamousFood = ({famousFood}) => {
  return (
    <div className='flex-shrink-0 bg-blue-400 cursor-pointer '>

        <a href={famousFood.action.link}>
        
        {
            <img className='w-fit h-45 object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${famousFood.imageId}`} alt="" />
        
        }
        </a>
    </div>
  )
}

export default FamousFood