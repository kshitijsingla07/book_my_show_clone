import React from "react";
import MovieHero from "../Components/MovieHero/MovieHero.component.js";
import {BiCameraMovie} from "react-icons/bi";
import CastPosterComp from "../Components/Poster/Movie.cast.poster.js";
const MoviePage = () => {
return (
<>
<div >
   <MovieHero />
   <div className = "my-10 mx-auto container lg:w-1/2 lg:ml-64">
      <div className = "flex flex-col items-start gap-5">
         <h2 className = "text font-bold text-2xl"> About the Movie </h2>
         <p>Life is bliss until one day Kanti Sharan Mudgal`s son Vivek is blamed for immoral conduct and expelled from school. Overwhelmed, Kanti plans to leave town until a divine intervention leads him to seek justice by taking those responsible to court.</p>
      </div>
      <div className = "my-8">
         <hr/>
      </div>
      <div className = "flex flex-col gap-3">
         <h2 className = "text-xl font-bold"> Applicable Offers </h2>
         <div className = "flex items-start align-middle gap-2 bg-yellow-100 border-yellow-400 border-2 border-dashed rounded-md p-3 w-96">
            <div className = "w-8 h-8">
               <BiCameraMovie className = "w-full h-full"/>
            </div>
            <div className = "flex flex-col items-start gap-3">
               <h3 className = "text-lg text-gray-900">Filmy Pass</h3>
               <p className = "text-gray-600">Get Rs. 75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
            </div>
         </div>
      </div>
      <div className = "my-8">
         <hr/>
      </div>
      <div className ="flex flex-col">
         <h1 className = "text-2xl font-bold text-gray-900">Cast</h1>
         <div className = "flex">
            <div className="h-30">
               <CastPosterComp src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-1681713982.jpg" title="Akshay Kumar" subtitle = "as Lord Shiva" />
            </div>
            <div className="h-30">
               <CastPosterComp src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/pankaj-tripathi-29809-23-03-2017-02-54-29.jpg" title="Pankaj Tripathi" subtitle = "as Kanti Sharan Mudgal" />
            </div>
            <div className="h-30">
               <CastPosterComp src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/yami-gautam-17250-30-09-2017-01-01-12.jpg" title="Yami Gautam" subtitle = "as Kamii Maheshwari" />
            </div>
            <div className="h-30">
               <CastPosterComp src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/pavan-malhotra-1675-24-03-2017-18-02-03.jpg" title="Pavan Malhotra" subtitle = "as Judge Purshottam" />
            </div>
         </div>
      </div>
   </div>

</div>
</>
)
}
export default MoviePage;
