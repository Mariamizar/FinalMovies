import React, { useContext, useState, useRef, useEffect } from "react";
import SideFilter from "../components/SideFilter";
import MovieList from "../components/MovieList";
import PopularBar from "../components/PopularBar";
import { MoviesContext } from "../context/MoviesContext";
import "../pages/MoviePage.css";

function MoviesPage() {
  const { movies } = useContext(MoviesContext);
  const [filteredMovies, setFilteredMovies] = useState(movies || []);

  useEffect(() => {
    setFilteredMovies(movies || []);
  }, [movies]);

  const applyFilters = (filters) => {
    if (!movies) return;

    let results = [...movies];

    if (filters.year && filters.year !== "any") {
      results = results.filter((movie) => {
        const date = movie.release_date || movie.first_air_date;
        if (!date) return false;
        return new Date(date).getFullYear().toString() === filters.year;
      });
    }

    if (filters.sortBy) {
      results.sort((a, b) => {
        switch (filters.sortBy) {
          case "popularity.desc":
            return (b.popularity || 0) - (a.popularity || 0);
          case "vote_average.desc":
            return (b.vote_average || 0) - (a.vote_average || 0);
          case "release_date.desc":
            return (
              new Date(b.release_date || 0) - new Date(a.release_date || 0)
            );
          case "release_date.asc":
            return (
              new Date(a.release_date || 0) - new Date(b.release_date || 0)
            );
          case "title.asc":
            return (a.title || "").localeCompare(b.title || "");
          case "title.desc":
            return (b.title || "").localeCompare(a.title || "");
          default:
            return 0;
        }
      });
    }

    setFilteredMovies(results);
    console.log("Filtered result count:", results.length);
  };

  return (
    <div className="movies-page">
      <div className="main-container">
        <SideFilter onApplyFilters={applyFilters} />
        <MovieList movies={filteredMovies} />
        <PopularBar />
      </div>
    </div>
  );
}
export default MoviesPage;
