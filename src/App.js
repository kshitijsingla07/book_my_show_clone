import {Route} from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./Pages/Home.page";
import MovieHOC from "./HOC/Movie.HOC";
import MoviePage from "./Pages/Movie.page";
import Plays from "./Pages/Plays.Page"
import PlayHOC from "./HOC/Play.HOC"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Importing Axios
import axios from "axios";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
  <>
  <DefaultHOC path = "/" exact component= {HomePage}/>
  <MovieHOC path = "/movie/:id" exact component = {MoviePage} />
  <PlayHOC path = "/plays" exact component= {Plays}/>
</>
  )
};

export default App;
