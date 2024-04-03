import React from "react";
import Navbar from "../Components/Navbar/navbar.component.js"


const PlayLayout = (props) => {
  return(
  <>
  <Navbar />
  {props.children}
  </>
)
}

export default PlayLayout;
