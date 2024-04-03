import React from "react";
import {BsShare} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
const MovieHero = () =>{
  return(
    <>
    <div className = "md:hidden ">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/omg-2-et00361712-1689772587.jpg" alt="" />
</div>


    <div className ="hidden md:block lg:hidden">
<img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/omg-2-et00361712-1689772587.jpg" alt="" />
</div>


    <div className = "hidden lg:block relative z-1" style={{height:"30rem"}}>
    <div className="absolute z-5 h-full w-full"
    style = {{backgroundImage: "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)" }} />
<div className = "absolute z-7 flex left-36 top-10 gap-5">
    <div className="w-64 h-96">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/omg-2-et00361712-1689772587.jpg" alt="" className="h-full w-full rounded-md" />
</div>
<div className="text-white flex flex-col gap-7">
<div>
<h2 className = "text-4xl font-bold">OMG  2</h2>
</div>
<div className = "flex gap-2 items-end">
<AiFillStar className = "text-red-400 text-3xl" />
<h4 className = "text-2xl font-bold">8.7/10</h4>
<p className = "text-md">86.5K Votes</p>
</div>
<div className = "flex bg-zinc-700 px-3 py-3 rounded-lg justify-between w-96">
<div className = "flex flex-col gap-1">
<div>
<h4 className = "text-md text-white font-bold">Add your rating and review</h4>
</div>
<div>
<p className = "text-gray-400 text-sm">Your ratings matter</p>
</div>
</div>
<div className = "bg-white rounded-lg p-3">
<p className="text-zinc-700 text-xl">Rate Now </p>
</div>
</div>
</div>
</div>

    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/omg-2-et00361712-1689772587.jpg" alt=""
    className="h-full w-full" />
    </div>

    </>
  );
};

export default MovieHero;
