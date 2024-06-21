import React from "react";

function Hero() {
  return (
    <div className="flex bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="flex-col justify-center flex flex-1 gap-1 pl-10 leading-[1.3] hero-left p-16 ">
        <h2 className="text-3xl font-semi-bold">New Arrivals</h2>
        <div>
          <div className="hand-hand-icon w-[105px] flex">
            <p className="text-black text-[100px]  font-[100] ">new</p>
            <img src="/Assets/hand_icon.png" alt="hand icon" />
          </div>
          <p className="text-black text-[100px]  font-[100]">collection</p>
          <p className="text-black text-[100px]  font-[100]">for everyone</p>
        </div>
        <div className="flex items-center hero-latest-btn  gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-red-500 text-white text-[22px] font-[500] text-center pl-12 cursor-pointer hover:bg-red-700"> Latest Collection
            <img src="/Assets/arrow.png" alt="" className=""/>
        </div>
      </div>
      <div className="items-center flex-1 heroright">
        <img src="/Assets/hero_image.png" className="" alt="" />
      </div>
    </div>
  );
}

export default Hero;
