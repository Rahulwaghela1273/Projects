import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  const getDetail = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=d379bc56&i=${imdbID}`,
    );
    setMovie(res.data);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Movie Detail</h1>

      <button onClick={getDetail}>Load Detail</button>

      {movie && movie.Response !== "False" && (
        <div style={{ marginTop: "20px" }}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt="" />
          <p>
            <b>Year:</b> {movie.Year}
          </p>
          <p>
            <b>Genre:</b> {movie.Genre}
          </p>
          <p>
            <b>Plot:</b> {movie.Plot}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
