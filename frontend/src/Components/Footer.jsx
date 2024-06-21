import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        <div className="flex items-center gap-2">
            <img src="/Assets/logo.png" alt="logo" />
            <p className='text-black text-[46px] font-[700]'>Shopper</p>
        </div>
        <ul className='flex gap-5  text-[20px]'>
            <li className='cursor-pointer '>Company</li>
            <li className='cursor-pointer '>Product</li>
            <li className='cursor-pointer '>Offices</li>
            <li className='cursor-pointer '>About</li>
            <li className='cursor-pointer '>Contact</li>
        </ul>

        {/* footer social cart_icon */}
        <div className='flex gap-2'>
            <div  className=''>
                <img src="/Assets/instagram_icon.png" alt="insta" />
            </div>
            <div  className=''>
                <img src="/Assets/pintester_icon.png" alt="pinterest" />
            </div>
            <div  className=''>
                <img src="/Assets/whatsapp_icon.png" alt=" whatsapp" />
            </div>
        </div>
        
<div className='flex flex-col items-center gap-3 w-[100%] mb-5bg-black'> 
<hr className= "h-0.5 bg-red-400 border-none rounded-full mt-1"/>
    <p>Coptright @2024 Allright reserved</p>
</div>

    </div>
  )
}

export default Footer