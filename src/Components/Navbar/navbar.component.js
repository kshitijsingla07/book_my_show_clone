import React from "react";
import {BsChevronRight, BsSearch, BsChevronDown} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"
const NavSm = () =>{
  return(
    <>
    <div className="flex justify-between">
    <div className="text-white">
    <h3 className="text-xl font-bold">It All Starts Here</h3>
    <span className= "text-gray-400 text-xs flex items-center">Sangrur <BsChevronRight/></span>
    </div>
    <div className = "text-white w-8 h-8">
    <BsSearch className= "w-full h-full"/>
    </div>
    </div>
    </>
  );
};

const NavMd = () => {
return(
  <div className="w-full flex items-center bg-white gap-3 px=2 py-1 rounded-sm">
  <BsSearch />
  <input type = "search" className="w-full focus:outline-none" placeholder = "Search for Movies, Events, Plays, Sports and Activities" />
  </div>
)
};

const NavLg = () => {
  return(
    <>
  <div className = "container flex mx-auto items-center justify-between">


<div className = "flex items-center w-1/2 gap-3">
<div className = "w-20 h-12">
<img src="https://recruit-c7ff.kxcdn.com/recruit/wp-content/uploads/e-mmtlogo.png" alt="" className = "w-full h-full"/>
</div>
<div className="w-full flex items-center bg-white gap-3 px=2 py-1 rounded-sm">
<BsSearch />
<input type = "search" className="w-full focus:outline-none" placeholder = "Search for Movies, Events, Plays, Sports and Activities" />
</div>
</div>


<div className ="flex gap-3 items-center ">
<div >
<span className= "text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">Sangrur <BsChevronDown/></span>
</div>
<div>
<button className ="bg-red-600 text-white rounded p-2 ">Sign In</button>
</div>
<div><GiHamburgerMenu className="text-white"/></div>
</div>
  </div>
  </>
);
};

const Navbar = () => {
  return(
  <>
  <nav className="bg-indigo-950 px-4 py-2">
<div className= "md:hidden">{
  <NavSm />
}</div>
<div className = "hidden lg:hidden md:flex">{
<NavMd />
}</div>
<div className = "hidden lg:flex">{
  <NavLg />
}</div>
  </nav>
  </>
)
};

export default Navbar;
