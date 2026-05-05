import { useEffect,useState} from "react";
export default function Newmovie() {
  // const [newMovies,setNewMovies] = useState([]);

  // useEffect(() => {
  //   const getNewMovies = async () => {
  //     const res = await fetch(`http://www.omdbapi.com/?apikey=3744b0f7&y=${new Date().getFullYear()}`);
  //     const data = await res.json();
  // console.log(data);

  //     setNewMovies(data.Search);
  //   }
  //   getNewMovies();
  // }, []);
  // console.log(newMovies);
  return (
    <div className="hero">
      <h1>Dune: Part Three</h1>
      <p>Explore trending and track your favorite movies</p>
    </div>
  );
}
