import React from "react";
import {Route} from "react-router-dom";
import PlayLayout from "../Layout/Plays.layout";

const PlayHOC = ({component:Component, ...props}) =>{
  return(
  <>
  <Route
  {...props}
  component = {(props) =>(
    <PlayLayout>
    <Component {...props}/>
    </PlayLayout>
  )
  }/>
  </>
);
};

export default PlayHOC;
