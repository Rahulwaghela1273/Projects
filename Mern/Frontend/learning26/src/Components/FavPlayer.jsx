import React from "react";
import "../assets/css/FavPlayer.css";
import playerImg from "../assets/images/virat.jpg";

function FavPlayer() {
  return (
    <div className="player-card">
      <img src={playerImg} alt="Player" className="player-img" />

      <h1>Virat Kohli</h1>
      <h3 className="player-role">Indian Cricketer</h3>

      <p className="player-desc">
        Virat Kohli is one of the greatest batsmen in modern cricket. Known for
        his discipline, aggression and leadership.
      </p>

      <ul>
        <li>Former Indian Captain</li>
        <li>100+ International Centuries</li>
        <li>ICC Player of the Year</li>
      </ul>
    </div>
  );
}

export default FavPlayer;
