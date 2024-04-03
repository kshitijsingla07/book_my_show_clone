import React from "react";
import {Route} from "react-router-dom";
import DefaultLayout from "../Layout/Default.layout"
const DefaultHOC = ({component:Component, ...props}) =>{
  return(
  <>
  <Route
  {...props}
  component = {(props) =>(
    <DefaultLayout>
    <Component {...props}/>
    </DefaultLayout>
  )
  }/>
  </>
);
};

export default DefaultHOC;
