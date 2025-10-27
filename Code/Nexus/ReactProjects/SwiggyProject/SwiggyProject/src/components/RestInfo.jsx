
const RestInfo = ({restData}) => {
  return (
    <div>
    <div className="flex w-full justify-between mt-8">
        <div className="w-[70%]">
            <p className="text-2xl mb-1 font-semibold  text-gray-700" >{restData?.name}</p>
            <p className="text-xl font-semibold mb-2 ">{"₹"+("defaultPrice" in restData ? restData?.defaultPrice/100 : restData?.price/100)}</p>
            <div className="flex gap-1">
                   <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.83 1.476 8.303L12 18.896l-7.412 4.543 1.476-8.303L0 9.306l8.332-1.151z" />
                </svg>
            <span className="text-green-700 mb-1">{restData?.ratings?.aggregatedRating?.rating}</span>
            <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2 +")"}</span>
            </div>
            <p>{restData.description}</p>
        </div>
        <div className="w-[20%] h-40 flex items-center  relative"> 
                <img className="w-full h-36 object-cover rounded-2xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId} alt="" />
                <button className=" transform transition cursor-pointer duration-200 hover:bg-gray-200 mt-10 absolute bottom-0 rounded-xl shadow-sm text-green-600 bg-white left-17 py-2 px-8">ADD</button>
            </div>
    </div>
        <hr className="mt-3 mb-6 "></hr> 
    </div> 
  )
}

export default RestInfo