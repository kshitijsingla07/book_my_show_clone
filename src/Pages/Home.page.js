import axios from "axios";
import React, {useState, useEffect} from "react"
import EntertainmentCardSlider from "../Components/Entertainment/Entertainment.component";
import Premiere from "../Components/Premiere/premiere.component.js";
import PosterSlider from "../Components/PosterSlider/posterSlider.component.js";
import Images from "../config/tempPosters.config.js";
const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() =>{
  const requestPopularMovies = async () => {
    const getPopularMovies = await axios.get("/movie/popular")
    setPopularMovies(getPopularMovies.data.results);
  }
  requestPopularMovies()
}, [])
const [upcomingMovies, setUpcomingMovies] = useState([]);
useEffect(() =>{
  const requestUpcomingMovies = async () => {
    const getUpcomingMovies = await axios.get("/movie/upcoming")
    setUpcomingMovies(getUpcomingMovies.data.results)
  }
  requestUpcomingMovies()
}, [] )
console.log(upcomingMovies)
  return(
<>
<div className="flex flex-col gap-10">
<div className = "container mx-auto px-4 py-4 w-4/5">
<h1 className = "text-2xl font-bold px-1 text-gray-800"> The Best Of Live Events </h1>
<EntertainmentCardSlider />
</div>


<div className = "bg-abhishek-50 py-16">
<div className = "flex px-10">
<img src = "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" className = "w-4/5"/>
</div>
<div className = "container mx-auto px-4 py-4 isDark">
<PosterSlider images = {popularMovies} title="Premieres" subtitle= "Brand new releases every Friday" isDark/>
</div>
</div>
</div>


<div>
<PosterSlider images = {upcomingMovies} title="Upcoming Movies" isDark={false}/>
</div>

<div>
<PosterSlider images = {popularMovies} title="Outdoor Events" isDark={false}/>
</div>

<div>
<PosterSlider images = {popularMovies} title="Laughter Therapy" isDark={false}/>
</div>

<div>
<PosterSlider images = {popularMovies} title="Popular Events" isDark={false}/>
</div>
</>
);
}


export default HomePage;
