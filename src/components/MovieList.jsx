import Moviecard from "./Moviecard";
export default function MovieList({ movies }) {
    if (!movies.length) return <p>No Record Found</p>;
    return (
        <>
            {movies.map((movie) => (
                <Moviecard key={movie.imdbID} movie={movie} />
            ))}
     </>
  )
}
