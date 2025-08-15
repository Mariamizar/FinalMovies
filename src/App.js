import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MoviesProvider } from "./context/MoviesContext";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetails from "./pages/MovieDetailsPage";

function App() {
  return (
    <MoviesProvider>
      <Router>
        <Routes>
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/movies"
            element={
              <Layout>
                <MoviesPage />
              </Layout>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <Layout>
                <MovieDetails />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </MoviesProvider>
  );
}

export default App;
