import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await axios.get(
      "https://www.omdbapi.com/?apikey=d379bc56&s=batman",
    );
    setMovies(res.data.Search || []);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={getMovies}>Load Movies</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{ border: "1px solid black", padding: "10px" }}>
            <img src={movie.Poster} width="100%" alt="" />
            <h3>{movie.Title}</h3>

            <Link to={`/movie/${movie.imdbID}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
