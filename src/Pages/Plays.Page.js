import React from "react";
import PlayPosterComp from "../Components/Poster/Poster.plays.js";
import PlaysFilter from "../Components/PlaysFilter/PlaysFilter.component.js"
const Plays = () => {
return (<>
<div className = "container mx-auto px-4 bg-gray-100">
   <div className = "w-full lg:flex lg:flex-row-reverse">
      <div className ="w-8/12">
         <h1 className = "text-2xl font-bold my-8 pt-8"> Plays in Delhi-NCR </h1>
         <div className = "flex flex-wrap">
            <div className = "w-1/2 md:w-1/3  lg:w-1/4 my-4">
               <PlayPosterComp src=" https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363357-breermptnq-portrait.jpg" title="12 Angry Men" subtitle="L.T.G Auditorium: Delhi"/>
            </div>
            <div className = "w-1/2 md:w-1/3 lg:w-1/4 my-4">
               <PlayPosterComp  src=" https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363243-vflpmvkkwy-portrait.jpg" title="Rendezvous with Checkhov (Seduction)" subtitle="The Piano Man Jazz Club"/>
            </div>
            <div className = "w-1/2 md:w-1/3 lg:w-1/4 my-4">
               <PlayPosterComp  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00326780-mnjqxwzwyw-portrait.jpg" title="Abhimanyu" subtitle="Shri Ram Centre: Delhi"/>
            </div>
            <div className = "w-1/2 md:w-1/3  lg:w-1/4 my-4">
               <PlayPosterComp src=" https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364955-wartgmrkgu-portrait.jpg" title="Kuch Life Jaisa" subtitle="Shein Auditorium, India"/>
            </div>
            <div className = "w-1/2 md:w-1/3  lg:w-1/4 my-4">
               <PlayPosterComp src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366318-czscavftdw-portrait.jpg" title="A Midsummer Night's Dream" subtitle="Shri Ram Centre: Delhi"/>
            </div>
            <div className = "w-1/2 md:w-1/3 lg:w-1/4 my-4">
               <PlayPosterComp src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNSBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365537-tnrlhmcfel-portrait.jpg" title="Betrayal" subtitle="L.T.G Auditorium: Delhi"/>
            </div>
            <div className = "w-1/2 md:w-1/3 lg:w-1/4 my-4" >
               <PlayPosterComp src="https://asszzzlets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366320-qgklqhwszh-portrait.jpg" title="Khidki (Hilarious Comedy Play)" subtitle="Shri Ram Centre: Delhi"/>
            </div>
            <div className = "w-1/2 md:w-1/3 lg:w-1/4 my-4">
               <PlayPosterComp src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366592-ywuvtsjvmq-portrait.jpg" title="Parakram-Children Theatre Festival 2023" subtitle="Shri Ram Centre: Delhi"/>
            </div>
         </div>
      </div>
      <div className = "lg:w-1/4 ">
      <h2 className = "text-2xl font-bold text-gray-800 my-8 pt-8">Filters</h2>
      <div><PlaysFilter title="Date" tags = {["Today", "Tomorrow", "This Weekend"]} /></div>
      <div><PlaysFilter title="Language" tags = {["Hindi", "English", "Urdu"]} /></div>
      <div><PlaysFilter title="Categories" tags = {["Theatre", "Storytelling"]} /></div>
      <div><PlaysFilter title="Genres" tags = {["Drama", "Comedy", "Musical", "Contemporary", "Adaptation", "Classic", "Thriller", "Adult", "Adventure", "Fantasy", "Mystery", "Period", "Suspense", "Horror"]} /></div>
      <div><PlaysFilter title="More Filters" tags = {["Outdoor Events", "Live Events at Flat 16% Off!", "Fast Filling", "Kids Allowed"]} /></div>
      <div><PlaysFilter title="Price" tags = {["Free", "0-500", "500-2000", "Above 2000"]} /></div>

      </div>
   </div>
</div>
</>
)
};
export default Plays;
