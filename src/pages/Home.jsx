import { useState, useEffect, useRef } from "react";
import MovieList from "../components/MovieList";

export default function Home({movies}) {
  return (
    <div className="container">
      <div className="section-header">
        <h2>Trending Now</h2>
      </div>

      <div className="grid">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
