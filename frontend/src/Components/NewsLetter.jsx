import React from 'react'

function NewsLetter() {
  return (
    <div className=' h-[40vh] w-65% flex flex-col items-center justify-center m-auto p-[140px] mb-[150px] bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-100 gap-2  '>

        <h1 className=' text-blue-950 text-[55px] font-[600]'>Get Exclusive offer on your email</h1>
        <p className='text-blue-950 text-[20px]'>Subscribe to our newsletter and stay updated</p>
        {/* input */}
        <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-3xl  border-solid'>
        <input type="email" placeholder='your email id' className='w-[500px] ml-4 border-none outline-none 0 font-poppins text-[16px]' />
        <button className=' w-[210px] h-[70px] rounded-xl bg-black text-white text-[16px] cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter