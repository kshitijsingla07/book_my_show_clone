import React from "react";
import {BsChevronRight, BsSearch, BsChevronDown, BsChevronLeft} from "react-icons/bs";
import {CiShare2} from "react-icons/ci"
import {GiHamburgerMenu} from "react-icons/gi"
const NavSm = () =>{
  return(
    <>
    <div className="flex justify-between">
    <div className="text-white flex items-center gap-3">
    <BsChevronLeft classname = "h-full w-full"/>
    <h3 className="text-xl">Oppenheimer</h3>
    </div>
    <div className = "text-white w-8 h-8">
    <CiShare2 className= "w-full h-full"/>
    </div>
    </div>
    </>
  );
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
  <nav className=" absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-indigo-950 px-4 py-2">
<div className= "md:hidden">{
  <NavSm />
}</div>
<div className = "hidden lg:hidden md:block">{
<NavSm />
}</div>
<div className = "hidden lg:flex">{
  <NavLg />
}</div>
  </nav>
  </>
)
};

export default Navbar;
