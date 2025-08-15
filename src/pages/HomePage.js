import React from "react";
import { useNavigate } from "react-router-dom";
import homepageBg from "../assets/homepage-bg.png";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="Homepage-container"
      style={{
        backgroundImage: `url(${homepageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="Home-title">FinalMovies</h1>
      <h2>Search for your favorite movies, TV series and anime.</h2>
      <input
        type="search"
        className="search-input"
        placeholder="Search movie or TV shows..."
      />
      <p>Top Search:</p>
      <div className="Top-search">
        <ul>
          <li>Dead Poets Society</li>
          <li>Good Will Hunting</li>
          <li>Fantastic Mr Fox</li>
          <li>The Maze Runner</li>
        </ul>
      </div>
      <button className="home-button" onClick={() => navigate("/movies")}>
        Watch Movies
      </button>
    </div>
  );
}

export default HomePage;
