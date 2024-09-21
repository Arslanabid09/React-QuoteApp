import React from 'react'
import { FaRotateRight,FaXTwitter } from 'react-icons/fa6'
import UseQuote from './component/CustomHook'
const Quote = () => {
  // const res = UseQuote()
  const [quote,handleQuote] = UseQuote();
  console.log(quote);
  
  const Linkedin =()=>{
    window.open(`https://twitter.com/intent/tweet?text=${quote[0].quote} -- ${quote[0].character}`) 
  }
  return (
    <section className='flex justify-around items-center  h-screen w-screen bg-gradient-to-r from-blue-900 to-blue-800'>
      <div key={quote[0]._id} className='  w-11/12 rounded-md shadow-sm lg:w-5/12 flex flex-col  bg-white text-blue-800 h-auto p-10'>
        <h1 className='text-3xl text-indigo-800 text-center '><span className='font-semibold'>Quote</span> App --React</h1>
        <h1 className='md:text-3xl text-xl text-indigo-800 mt-5 '>{quote[0].quote||"Fetching Quote"}</h1>
        <div className='flex justify-between items-center mt-10' >
            <p className='font-semibold tracking-wide 
            hover:underline hover:underline-offset-8 duration-300 '>--{quote[0].character||"Fetching Character"}</p>
            <div className='space-x-8'>
                <button className='text-xl rounded-full border-2 border-blue-700 p-2 hover:bg-blue-700 hover:text-white duration-300' onClick={()=>handleQuote()}><FaRotateRight/></button>
                <button className='text-xl rounded-full border-2 border-blue-700 p-2 hover:bg-blue-700 hover:text-white duration-300 ' onClick={Linkedin}><FaXTwitter/></button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Quote