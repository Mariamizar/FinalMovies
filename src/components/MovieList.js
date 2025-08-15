import React from "react";
import { useNavigate } from "react-router-dom"; // <-- add this import
import "../pages/MoviePage.css";

function MovieList({ movies, loading }) {
  const navigate = useNavigate();

  if (loading) return <div className="loading">Loading movies...</div>;
  if (!movies || movies.length === 0)
    return <div className="loading">No movies found.</div>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
              onClick={() => navigate(`/movie/${movie.id}`)}
              onError={(e) => {
                e.target.src = "/placeholder.jpg";
                e.target.alt = `${movie.title} poster not available`;
              }}
            />
          ) : (
            <div className="poster-placeholder">No poster available</div>
          )}
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>
              {movie.release_date ? movie.release_date.substring(0, 4) : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
