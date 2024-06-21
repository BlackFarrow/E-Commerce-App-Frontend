import React from 'react'
import new_collection from "/public/Assets/new_collections"
import Items from './Items';

function NewCollections() {
  return (
    <div className=' flex flex-col items-center gap-[10px] h-auto'>
        <h1  className=" text-[50px] font-[600]">
            New Collections
        </h1>
        <hr className=" w-[200px] h-[6px] rounded-[15px]   bg-slate-700" />
        <div className="grid grid-cols-4 gap-10 ">
        {new_collection.map((item,i)=>{
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
  )
}

export default NewCollections