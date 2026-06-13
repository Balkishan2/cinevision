import {useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom';
export default function Navbar({getMovies}) {
  const inputQuery = useRef()
  const handleSearch = (e) => {
    const value = inputQuery.current.value.trim();
    if(value.length > 3) {
        getMovies(value)
    } else {
      getMovies("new")  
    }
  };
  return (
    <div className="navbar">
      <Link to="cinevision/" className="logo">
        CineVision
      </Link>
      <div className="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="search-icon"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          ref={inputQuery}
          onChange={handleSearch}
          type="text"
          placeholder="Search movies, actors..."
        />
      </div>
    </div>
  );
}
