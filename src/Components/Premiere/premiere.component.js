import React from "react";
import Slider from "react-slick";
import PosterComp from "../Poster/poster";
import settings from "../../config/postercarousal.config";
import Images from "../../config/tempPosters.config"
const Premiere = () => {

  return( <>
    <div className=" py-3">
    <Slider {...settings}>
    {Images.map((Image) =>
  <PosterComp {...Image} isDark/>)}
    </Slider>
    </div>
  </>
)
}

export default Premiere;
