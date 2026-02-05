import React from "react";
import { Link } from "react-router-dom";

export const Iplteams = () => {
  var movies = [
    { movieId: 1, movieName: "Dhurandhar" },
    { movieId: 2, movieName: "Kantara" },
    { movieId: 3, movieName: "Kill" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ipl Teams</h1>
      {movies.map((team) => {
        //return <li>{movie.movieName}</li>
        return (
          <li>
            {/* <Link to="/watch/{movie.movieName}">{movie.movieName}</Link> */}
            <Link to={`/watch/${team.movieName}`}>{team.movieName}</Link>
          </li>
        );
      })}
    </div>
  );
};
