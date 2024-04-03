import React from "react";
import PosterComp from "../Poster/poster.js";
import settings from "../../config/postercarousal.config.js";
import Images from "../../config/tempPosters.config.js";
import Slider from "react-slick";
const PosterSlider = (props) => {
  return(
<>
<div className = "container mx-auto px-4 py-4 w-4/5" >
<h3 className = {`text-lg font-bold ${
  props.isDark ? "text-white" : "text-gray-700"
}`}>{props.title}</h3>
<p className = {`text-lg font-bold ${
  props.isDark ? "text-white" : "text-gray-700"
}`}>{props.subtitle}</p>
<Slider {...settings}>
{props.images.map((Image) =>
<PosterComp {...Image} isDark = {props.isDark}/>)}
</Slider>
</div>
</>

  )
}

export default PosterSlider;
