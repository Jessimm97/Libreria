import React from "react";
import "./categories.css";

const Categories = ({ categories, onSelectCategory }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className="categories__button"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;