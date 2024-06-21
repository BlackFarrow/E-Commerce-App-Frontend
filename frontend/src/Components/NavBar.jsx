import React, { useState } from "react";
import { Link } from "react-router-dom";


function NavBar() {


  const [menu, setMenu] = useState("shop")
  return (
    <div>
      <div className="flex items-center justify-between pl-10 pr-10 bg-pink-200 shadow font-poppins outline-1 outline">
        <div className="logo">
          <img src="/Assets/logo.png" alt="logo" className="cursor-pointer" />
        </div>
      
        <ul className="flex items-center gap-5" >
          <li onClick={()=>{setMenu("shop")}} className="font-semibold cursor-pointer"><Link to="/">Shop</Link>{menu==="shop"?<hr className= "h-0.5 bg-red-400 border-none rounded-full mt-1"/>:<></>}</li> 
          <li onClick={()=>{setMenu("mens")}} className="font-semibold cursor-pointer"><Link to="/mens">Mens</Link>{menu==="mens"?<hr className= "h-0.5 bg-red-400 border-none rounded-full mt-1"/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}} className="font-semibold cursor-pointer"><Link to="/womens">Womens</Link>{menu==="womens"?<hr className= "h-0.5 bg-red-400 border-none rounded-full mt-1"/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}} className="font-semibold cursor-pointer"><Link Link to="/kids">Kids</Link>{menu==="kids"?<hr className= "h-0.5 bg-red-400 border-none rounded-full mt-1"/>:<></>}</li>

          {/* Button */}
          <Link to="/LoginSignup"><button className="bg-white h-8 w-24 rounded-[25px] outline outline-1  cursor-pointer hover:bg-slate-200 curso">
            Login
          </button></Link>

          {/* cart */}
          <Link to="/cart">
          <div className="flex cursor-pointer cart">
            <img src="/Assets/cart_icon.png" alt="cart Image" />
            <div className="flex w-5 h-5 font-semibold text-white bg-red-600 rounded-full ml-[-10px] mt-[-5px] text-center justify-center items-center text-[12px]">1</div>
          </div></Link>
          
        </ul>



         
      </div>
      
    </div>
  );


}

export default NavBar;