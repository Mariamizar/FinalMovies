import React, { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b6979dbd498b1c9887c1438b966185b5"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load movies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, loading }}>
      {children}
    </MoviesContext.Provider>
  );
}
