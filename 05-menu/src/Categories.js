import React from "react";

const Categories = ({ filterMenu, categories }) => (
  <div className="btn-container">
    {categories.map((category, i) => (
      <button
        type="button"
        key={i}
        onClick={() => filterMenu(category)}
        className="filter-btn"
      >
        {category}
      </button>
    ))}
  </div>
);

export default Categories;
