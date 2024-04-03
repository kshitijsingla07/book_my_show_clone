import React from "react";
import {Route} from "react-router-dom";
import MovieLayout from "../Layout/Movie.layout"
const MovieHOC = ({component:Component, ...props}) =>{
  return(
  <>
  <Route
  {...props}
  component = {(props) =>(
    <MovieLayout>
    <Component {...props}/>
    </MovieLayout>
  )
  }/>
  </>
);
};

export default MovieHOC;
