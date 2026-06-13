import { useState, useEffect } from "react";
import  "../css/movie_detail_style.css";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
    const {id} = useParams();
    const [movie,setMovie] = useState(null);

    useEffect(() => {
        getMovieDetail();
    },[id]);
    const getMovieDetail = async () => {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=3744b0f7&i=${id}`,
        );
        const data = await res.json();
       
        // console.log(data);
        setMovie(data)
    }
     if (!movie) return <h2>Loading...</h2>;
  return (
    <div className="movie-detail">
      <div
        className="detail-hero"
        style={{
          backgroundImage: `url(${movie.Poster})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content"></div>
      </div>

      <div className="details-container">
        <img className="poster" src={movie.Poster} alt={movie.Title} />

        <div className="info">
          <h1>{movie.Title}</h1>

          <div className="meta">
            <span>{movie.Year}</span>
            <span>{movie.Runtime}</span>
            <span>{movie.Genre}</span>
          </div>

          <p className="rating">⭐ {movie.imdbRating}</p>

          <p className="plot">{movie.Plot}</p>

          <div className="extra">
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Writer:</strong> {movie.Writer}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Released:</strong> {movie.Released}
            </p>
            <p>
              <strong>Rated:</strong> {movie.Rated}
            </p>
            <p>
              <strong>Language:</strong> {movie.Language}
            </p>
            <p>
              <strong>Country:</strong> {movie.Country}
            </p>
            <p>
              <strong>Awards:</strong> {movie.Awards}
            </p>
            <p>
              <strong>Box Office:</strong> {movie.BoxOffice}
            </p>
            <p>
              <strong>Metascore:</strong> {movie.Metascore}
            </p>
            <p>
              <strong>IMDb Votes:</strong> {movie.imdbVotes}
            </p>
            {movie.DVD !== "N/A" && (
              <p>
                <strong>DVD:</strong> {movie.DVD}
              </p>
            )}
            {movie.Production !== "N/A" && (
              <p>
                <strong>Production:</strong> {movie.Production}
              </p>
            )}
            {movie.Website !== "N/A" && (
              <p>
                <strong>Website:</strong> {movie.Website}
              </p>
            )}
          </div>

          <div className="ratings">
            {movie.Ratings &&
              movie.Ratings.map((r, index) => (
                <div key={index} className="rating-box">
                  <p>{r.Source}</p>
                  <strong>{r.Value}</strong>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
