import React from "react";

function Items(props) {
  return (
    <div className="w-[300px] hover:scale-105 hover:transition-all duration-600 cursor-pointer m-5">
      {/* Item image */}
      <img src={props.image} className="rounded-t-xl" alt="" />
      {/* Item name */}
      <p className=" m-[6px 0px]">{props.name}</p>
      <div className="flex item_prices gap-[20px]">
        {/* item price new */}
        <div className="text-black text-[18px] font-[600]">
          ${props.newprice}
        </div>
        {/* item price old */}
        <div className="old_price text-black text-[18px] font-[600] line-through">
          ${props.oldprice}
        </div>
      </div>
    </div>
  );
}

export default Items;
