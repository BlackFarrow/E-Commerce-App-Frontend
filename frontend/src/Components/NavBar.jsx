import React from "react";

function NavBar() {
  return (
    <div>
      <div className="flex items-center justify-between p-3 bg-pink-300">
        <div className="logo">
          <img src="/Assets/logo.png" alt="logo" />
        </div>
        <ul className="flex gap-3 bg-slate-50">
          <li>Shop</li>
          <li>Mens</li>
          <li>Womens</li>
          <li>Kids</li>
        </ul>
        <div className="flex gap-3 bg-slate-200">
          {" "}
          <button className="bg-white  w-24 rounded-[25px] outline outline-1  cursor-pointer hover:bg-slate-200">
            Login
          </button>
          <div className="cart">
            <img src="/Assets/cart_icon.png" alt="cart Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
