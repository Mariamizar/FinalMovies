import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b6979dbd498b1c9887c1438b966185b5`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="details-container">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-details">
          <h3>{movie.title}</h3>
          <p>
            <span className="details">Genre:</span>
            {movie.genres?.map((g) => g.name).join(", ")}
          </p>
          <p>
            <span className="details">Rating:</span>
            {movie.vote_average}/10
          </p>
          <p>
            <span className="details">Release date:</span>
            {movie.release_date}
          </p>
          <p className="overview">
            <span className="details">Overview:</span>
            {movie.overview}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MovieDetails;
