import React from "react";
//props --> src, title, subtitle, isDark(bool)
const CastPosterComp =(props) =>{
  return(
    <>
    <div className = "flex flex-col items-start gap-2 px-3">
    <div className = "h-30">
    <img src={props.src} alt={props.title} className="w-full h-30 rounded-full" />
    </div>

    <h3 className = {`text-lg font-bold ${
      props.isDark ? "text-white" : "text-gray-700"
    }`}>{props.title}</h3>

    <p className = {`text-sm font-bold ${
      props.isDark ? "text-white" : "text-gray-700"
    }`}>{props.subtitle}</p>
    </div>
    </>
  )
};

export default CastPosterComp;
