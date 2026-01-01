import quotes from "../data/Quotes";
import { useState } from "react";
import Navbar from "./Navbar";


function Quotes() {
  const [quote, setQuote] = useState(quotes[1]);

  function QuotesGen(){
    const ran = Math.floor(Math.random() * 70)+1;
    setQuote(quotes[ran]);
  }



  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center h-screen bg-[#111828]">
      <div className="bg-white p-8 text-center rounded-xl">
        <h1 className="text-3xl font-bold text-[#21253C] mb-4">Quotes of the Day</h1>
        <div className="border-l-4 p-2 rounded-md border-indigo-500">
          <p className="text-gray-600 text-center text-xl font-medium mb-4">
          <span className="text-3xl text-black font-bold mr-1">“</span>
          {
            quote
          }
          <span className="text-3xl text-black font-bold ml-1">”</span>
        </p>
        </div>
        <button onClick={()=>QuotesGen()} className=" cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#3559f9] mt-4 bg-[#5372FF] text-white px-4 py-2 rounded-xl">New Quotes</button>
      </div>
    </div>
    </>
  )
}

export default Quotes;
