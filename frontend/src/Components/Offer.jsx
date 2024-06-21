import React from "react";

function Offer() {
  return (
    <div className=" w-65% h-[60vh] flex p-140px mb-[150px] bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-00">
      {/* offer left */}
      <div className="flex flex-col justify-center flex-1 pl-10">
        <h1 className="text-black text-[80px] font-[600]">Exclusive</h1>
        
        <h1 className="text-black text-[22px] font-[600]">Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button className="font-bold text-white bg-red-600 rounded-full w-[282px] h-[45px] mt-5">Check Now</button>
      </div>

      {/* offer right */}
      <div className="flex justify-center">
        <img className="" src="/Assets/exclusive_image.png" alt="exclusive image" />
      </div>
    </div>
  );
}

export default Offer;
