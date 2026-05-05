import {Link} from 'react-router-dom';

export default function Moviecard({ movie }) {
  return (
    <>
      <Link to={`/movie/${movie.imdbID}`} className="card-link">
       <div className="card">
        <div className="card-wrap">
          <span className="tag">{movie.Type ? movie.Type.toUpperCase() : 'NEW'}</span>
          <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'} alt={movie.Title} />
        </div>
        <div className="card-content">
          <div className="title">{movie.Title}</div>
          <div className="meta">
            {movie.Year}
          </div>
          {movie.imdbRating && movie.imdbRating !== "N/A" && (
            <div className="rating">
              <span>★</span> {movie.imdbRating}
            </div>
          )}
        </div>
      </div>
      </Link>
    </>
  );
}
