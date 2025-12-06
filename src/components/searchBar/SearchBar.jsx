import React from "react";
import "./searchBar.css";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Buscar libros..."
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default SearchBar;