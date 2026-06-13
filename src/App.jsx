import { useState,useEffect } from "react";
import "./App.css";
import {Routes,Route,useLocation} from 'react-router-dom';
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Navbar from "./components/Navbar";
import Newmovie from "./components/Newmovie";

function App() {
     const [movies, setMovies] = useState([]);
     const location = useLocation();

     const getMovies = async (query) => {
       const res = await fetch(
         `https://www.omdbapi.com/?apikey=3744b0f7&s=${query}`,
       );
       const data = await res.json();
       console.log(data);
       setMovies(data.Search || []);
     };

     useEffect(() => {
       getMovies("Dune");
     }, []);
  return (
    <>
      <Navbar getMovies={getMovies} />
      {location.pathname === '/' && <Newmovie />}
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
