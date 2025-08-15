import React from "react";
import "../pages/MoviePage.css";

function SideFilter({ onApplyFilters }) {
  const [filters, setFilters] = React.useState({
    year: "any",
    sortBy: "popularity.desc",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 25 }, (_, i) => currentYear - i);

  return (
    <div className="Side-bar">
      <h3>Filter</h3>
      <div className="Type">
        <div className="one">
          <p>Movie</p>
          <p>TV</p>
        </div>
        <div className="two">
          <p>Ona</p>
          <p>Ova</p>
        </div>
      </div>
      <div className="year">
        <h4>Year</h4>
        <select
          name="year"
          className="Year-select"
          value={filters.year}
          onChange={handleChange}
        >
          <option value="any">Any Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="sort">
        <h4>Sort By</h4>
        <select
          name="sortBy"
          className="SortBy"
          value={filters.sortBy}
          onChange={handleChange}
        >
          <option value="popularity.desc">Most Popular</option>
          <option value="vote_average.desc">Top Rated</option>
          <option value="release_date.desc">Newest First</option>
          <option value="release_date.asc">Oldest First</option>
          <option value="title.asc">A-Z</option>
          <option value="title.desc">Z-A</option>
        </select>
      </div>
      <button
        className="apply-btn"
        onClick={() => {
          onApplyFilters({ ...filters });
          console.log("Applying filters:", filters);
        }}
      >
        Apply Filters
      </button>
    </div>
  );
}
export default SideFilter;
