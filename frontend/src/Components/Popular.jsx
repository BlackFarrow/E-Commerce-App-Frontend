import React from "react";
import data_product from "/public/Assets/data";
import Items from "./Items";

function Popular() {
  return (
    <div className=" flex flex- items-center gap-[10px] h-[90vh] ">
      <h1 className=" text-[50px] font-[600]">Popular In women</h1>
      <hr className=" w-[200px] h-[6px] rounded-[15px]   bg-slate-700" />
     
     {/* popular items */}
      <div className="flex mt-[40px]">
        {data_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              oldprice={item.old_price}
              newprice={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
