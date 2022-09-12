import React from "react";

const Categories = ({ filterItems, categories }) => (
  <div className="btn-container">
    {categories.map((category, i) => {
      return (
        <button
          key={i}
          onClick={() => filterItems(category)}
          type="button"
          className="filter-btn"
        >
          {category}
        </button>
      );
    })}
  </div>
);

export default Categories;
