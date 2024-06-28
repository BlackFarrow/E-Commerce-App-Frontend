import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import Items from "../Components/Items";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

 const filteredProducts = all_product.filter(
   (item) => item.category === props.category 
);

 //console.log("filteredProducts:", filteredProducts);

  return (
    <div>
      <img className="block w-82% m-auto"  src={props.banner} alt="Banner" />
      
      <div className="flex items-center justify-between m-5">
        <p>
          <span className="font-bold">Showing 1-2 </span> out of 36 products
        </p>

        <div className="flex items-center gap-1 px-5 py-2 bg-white border border-black rounded-full cursor-pointer">
          sort by <img src="/Assets/dropdown_icon.png" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {filteredProducts.map((item , i) => {
          
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
          
          
        } )}
      </div>
      {/* load more */}
      <div className="flex items-center justify-center mt-10 mb-10 border border-black rounded-full cursor-pointer font-[500] text-black w-48 px-3 py-2 hover:bg-black hover:text-white m-auto hover:scale-105 transition-all duration-300">Explore More</div>
    </div>
  );
}

export default ShopCategory;
