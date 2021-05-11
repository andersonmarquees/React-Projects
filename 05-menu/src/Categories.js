import React from "react";

const Categories = ({ AllCategories, handleFilterMenu }) => {
  return (
    <div className="btn-container">
      {AllCategories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => handleFilterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
