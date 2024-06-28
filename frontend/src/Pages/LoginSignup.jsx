import React from "react";

function LoginSignup() {
  return (
    <div className="flex justify-center items-center h-[110vh] pt-[100px] bg-gray-100">
      
      {/* login signup container */}
      
      <div className="w-[580px] h-[600px] bg-white m-auto rounded-md shadow-lg p-[40px]">
        <h1 className="text-2xl font-bold text-center">Sign up</h1>
        
        {/* login signup */}
        <div className="flex flex-col gap-4 mt-4">
          <input className="h-[72px] w-[100%] pl-4 outline-none border text-[18px] " type="text" placeholder="Enter your name" />
          <input className="h-[72px] w-[100%] pl-4 outline-none border text-[18px]  " type="email" placeholder="Enter your email" />
          <input className="h-[72px] w-[100%] pl-4 outline-none border text-[18px]" type="password" placeholder="Enter your password" />
        </div>

        {/* login signup button */}
        <button className="w-full p-4 mt-4 text-white bg-black border-black rounded-md pxf-10 hover:bg-gray-400 hover:font-boldhover:text-black ">Continue</button>
        
        {/* already have an account */}
        <p>Already have an account? <span className="mt-2 text-blue-500 cursor-pointer">Login</span></p>
        
        {/* agree to terms and conditions */}
        <div className="flex items-center mt-4"	>
          <input type="checkbox" />
          <p>Agree to terms and conditions</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
